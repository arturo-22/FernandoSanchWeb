import axios from "./axios";
import { User } from "../interfaces/user";

export const registerRequest = async (user: User): Promise<any> => {
  const response = await axios.post(`/register`, user);
  return response.data;
};

export const loginRequest = async (user: User): Promise<any> => {
  const response = await axios.post(`/login`, user);
  return response.data;
};

export const verifyTokenRequest = async (token: string): Promise<any> => {
  const response = await axios.get(`/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

