import React, { useEffect } from "react";
import * as constants from "../types/cartConstants";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { loadProductDetails } from "../lib/products";

export const addToCart =
  (id: any, quantity: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    try {
      const data = await loadProductDetails(id);

      dispatch({
        type: constants.CART_ADD_ITEM,
        payload: {
          id: data?.id,
          title: data?.title,
          photos: data?.photos[0],
          price: data?.price,
          quantity,
        },
      });

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cart.cartItems)
        );
      }
    } catch (error: any) {
      dispatch({
        type: "CART_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const removeFromCart =
  (id: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_REMOVE_ITEM,
      payload: id,
    });

    if (typeof window !== "undefined") {
      const cartLenght = localStorage.getItem("cartItems")?.length;
      if (cartLenght === 0) {
        localStorage.removeItem("cartItems");
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cart.cartItems)
        );
      }
    }
  };

export const saveShippingAddress =
(
  fullName: string,
    address: string,
    city: string,
    postalCode: string,
    country: string
    )
    : ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_SAVE_SHIPPING_ADDRESS,
      payload: {fullName, address, city, postalCode, country},
    });

    if (typeof window !== "undefined") {
      localStorage.setItem("shippingAddress", JSON.stringify({fullName, address, city, postalCode, country}));
      // localStorage.setItem("shippingAddress", (getState().cart.shippingAddress));
    }
    // else {
    //   localStorage.getItem(getState().cart.shippingAddress)
    //   }
  };


export const savePaymentMethod =
  (data: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });

    if (typeof window !== "undefined") {
      localStorage.setItem("paymentMethod", JSON.stringify(data));
    }
  };
