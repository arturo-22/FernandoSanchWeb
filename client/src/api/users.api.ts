import axios from "axios";
import { User } from "../interfaces/user";

const API = "http://localhost:4000";

export const registerRequest = async (user: User): Promise<any> => {
  const response = await axios.post(`${API}/register`, user);
  return response.data;
};
