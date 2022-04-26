import * as constants from "../types/userConstants";
import { PayloadAction } from "@reduxjs/toolkit";

export const userLoginReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return { loading: true };
    case constants.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case constants.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case constants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case constants.USER_REGISTER_REQUEST:
      return { loading: true };
    case constants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case constants.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case constants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
