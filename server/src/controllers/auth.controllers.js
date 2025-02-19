import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import { User } from "../models/user.models.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    if (!userName) {
      return res.status(400).json({ message: "Username is required" });
    }

    const userFound = await User.findOne({
      where: {
        [Op.or]: [{ email: userName }, { dni: userName }],
      },
    });

    if (!userFound) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound.id });
    res.cookie("token", token);
    res.json({
      id: userFound.id,
      full_name: userFound.full_name,
      dni: userFound.dni,
      email: userFound.email,
      created_at: userFound.created_at,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { full_name, dni, email, password } = req.body;

  try {

    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) return res.status(400).json(["The email already exists"]);
    

    const dniExists = await User.findOne({ where: { dni } });
    if (dniExists) return res.status(400).json(["The DNI already exists"]);
    

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      full_name,
      dni,
      email,
      password: hashPassword,
      created_at: new Date(),
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved.id });

    res.cookie("token", token);
    res.json({
      id: userSaved.id,
      full_name: userSaved.full_name,
      dni: userSaved.dni,
      email: userSaved.email,
      created_at: userSaved.created_at,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findByPk(req.user.id);

    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
      id: userFound.id,
      full_name: userFound.full_name,
      dni: userFound.dni,
      email: userFound.email,
      created_at: userFound.created_at,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await User.findByPk(user.id);

    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound.id,
      dni: userFound.dni,
      email: userFound.email,
    });
  });
};
