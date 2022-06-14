import React, { useEffect } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
} from "../reducers/userReducers";
import {
  productListReducer,
  productDetailsReducer,
} from "../reducers/productReducer";
import { cartReducer } from "../reducers/cartReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

let userInfoFromStorage;
let cartItemsFromStorage: any;
let shippingAddressFromStorage = {};
let paymentMethodFromStorage = {};

if (typeof window !== "undefined") {
  userInfoFromStorage = localStorage.getItem("userInfo");
}

if (typeof window !== "undefined") {
  const cartData: any = localStorage.getItem("cartItems");
  cartItemsFromStorage = cartData ? JSON.parse(cartData) : [];
}

if (typeof window !== "undefined") {
  
  const shippingData:any=localStorage.getItem("shippingAddress")
  // shippingAddressFromStorage=shippingData? JSON.parse(shippingData):{}
  shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.stringify(localStorage.getItem("shippingAddress"))
    : {};
}

if (typeof window !== "undefined") {
  paymentMethodFromStorage = localStorage.getItem("paymentMethod")
    ? JSON.stringify(localStorage.getItem("paymentMethod"))
    : {};
}

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userRegister: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;
