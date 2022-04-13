import axios from "axios";
import { CONSTANTS } from "../constants";

export const loginUserRequest = async (email: string, password: string) => {
  return await axios(`${CONSTANTS.URL}/api/auth/login`, {
    method: "POST",
    data: { email, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const registerUserRequest = async (
  name: string,
  email: string,
  password: string
) => {
  return await axios(`${CONSTANTS.URL}/api/auth/register`, {
    method: "POST",
    data: { name, email, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
