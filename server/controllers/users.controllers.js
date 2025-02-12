import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
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

export const createUsers = async (req, res) => {
  try {
    const { full_name, dni, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (full_name, dni, email, password, created_at) VALUES (?, ?, ?, ?, NOW())",
      [full_name, dni, email, hashPassword]
    );

    console.log (result);
    res.json({
      id: result.id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
