import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import { User } from "../../models/user.models.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });
    if (!userFound) return res.status(400).json({ message: "User not found" });

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
  try {
    const { full_name, dni, email, password } = req.body;

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

  const userFound = await User.findByPk(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound.id,
    full_name: userFound.full_name,
    dni: userFound.dni,
    email: userFound.email,
    created_at: userFound.created_at,
  });

};
