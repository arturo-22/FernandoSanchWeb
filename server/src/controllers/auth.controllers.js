import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import { User } from "../models/user.models.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { createTransporter, createMailOptions } from "../helpers/mailer.js";

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    if (!userName)
      return res
        .status(400)
        .json({ message: "Ingrese su DNI o correo electrónico" });

    if (!password)
      return res.status(400).json({ message: "Ingrese su contraseña" });

    const userFound = await User.findOne({
      where: {
        [Op.or]: [{ email: userName }, { dni: userName }],
      },
    });

    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

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
    const fullNameExists = await User.findOne({ where: { full_name } });
    if (fullNameExists) return res.status(400).json(["El nombre ya existe"]);

    const emailExists = await User.findOne({ where: { email } });
    if (emailExists)
      return res.status(400).json(["El correo electrónico ya existe"]);

    const dniExists = await User.findOne({ where: { dni } });
    if (dniExists) return res.status(400).json(["El DNI ya existe"]);

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

    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

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

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findByPk(user.id);

    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound.id,
      dni: userFound.dni,
      email: userFound.email,
    });
  });
};

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
    });
    if (!user)
      return res.status(404).json({
        message:
          "El usuario ingresado no coincide con ninguna cuenta en nuestro sistema",
      });

    const token = await createAccessToken({ id: user.id });

    const resetURL = `https://your-backend-url/resetpassword?id=${user._id}&token=${token}`;

    //send email
    const transporter = createTransporter(email);
    const mailOptions = createMailOptions(email, resetURL);
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Enlace de restablecimiento de contraseña enviado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "User not exists!" });
    }

    const secret = process.env.JWT + user.password;

    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    await user.save();

    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
