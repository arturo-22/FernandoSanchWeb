import axios from "axios";
import { User } from "../interfaces/user";

export const createUserRequest = async (user: User): Promise<any> => {
  const response = await axios.post("http://localhost:4000/users", user);
  return response.data;
};
