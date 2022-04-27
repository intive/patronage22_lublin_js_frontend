import axios from "axios";
import { CONSTANTS } from "../types/constants";

export const loginUserRequest = async (email: string, password: string) => {
  try {
    return await axios(`${CONSTANTS.URL}/api/auth/login`, {
      method: "POST",
      data: { email, password },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};

export const registerUserRequest = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    return await axios(`${CONSTANTS.URL}/api/auth/register`, {
      method: "POST",
      data: { name, email, password },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Something went wrong...");
  }
};
