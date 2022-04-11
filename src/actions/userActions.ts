import * as constants from "../constants/userConstants";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { CONSTANTS } from "../constants";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      dispatch({
        type: constants.USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${CONSTANTS.URL}/api/auth/login`,
        { email, password },
        config
      );

      dispatch({
        type: constants.USER_LOGIN_SUCCESS,
        payload: data,
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch (error: any) {
      dispatch({
        type: constants.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const register =
  (
    name: string,
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      dispatch({
        type: constants.USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/auth/register",
        { name, email, password },
        config
      );

      dispatch({
        type: constants.USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: constants.USER_LOGIN_SUCCESS,
        payload: data,
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch (error: any) {
      dispatch({
        type: constants.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userInfo");
    }
    dispatch({ type: constants.USER_LOGOUT });
  };
