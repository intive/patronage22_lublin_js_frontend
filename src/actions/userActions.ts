import * as constants from "../constants/userConstants";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { loginUserRequest, registerUserRequest } from "../lib/authorization";

export let userData: null;

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

      const data = (await loginUserRequest(email, password)).data;

      dispatch({
        type: constants.USER_LOGIN_SUCCESS,
        payload: data,
      });

      userData = data;
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

      const data = (await registerUserRequest(name, email, password)).data;

      dispatch({
        type: constants.USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: constants.USER_LOGIN_SUCCESS,
        payload: data,
      });

      userData = data;
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
    userData = null;
    dispatch({ type: constants.USER_LOGOUT });
  };
