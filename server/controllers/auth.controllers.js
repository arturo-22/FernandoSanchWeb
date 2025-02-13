import { pool } from "../db.js";
import bcrypt from "bcrypt";
import {createAccessToken} from "../libs/jwt.js";

export const login = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "User not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { full_name, dni, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const [userSaved] = await pool.query(
      "INSERT INTO users (full_name, dni, email, password, created_at) VALUES (?, ?, ?, ?, NOW())",
      [full_name, dni, email, hashPassword]
    );
    console.log(userSaved)
    const token = await createAccessToken({ id: userSaved.id });
    res.cookie("token", token);
    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
