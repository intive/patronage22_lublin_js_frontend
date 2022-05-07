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
  } catch (error: any) {
    if (error.response.status === 422) {
      throw new Error(
        "Password must contain at least 8 characters, number and upper case letter"
      );
    } else {
      throw new Error("Email already exists");
    }
  }
};
