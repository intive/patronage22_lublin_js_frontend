import * as constants from "../types/cartConstants";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { loadProductDetails } from "../lib/products";

export let userCart: [];
export let userShippingAddress: {};
export let userPaymentMethod: {};

export const addToCart =
  (id: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const data = await loadProductDetails(id);

    dispatch({
      type: constants.CART_ADD_ITEM,
      payload: {
        product: data.id,
        title: data.title,
        category: data.category,
        photos: data.photos,
        price: data.price,
        quantity: data.quantity,
      },
    });

    userCart = getState().cart.cartItems;
  };

export const removeFromCart =
  (id: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_REMOVE_ITEM,
      payload: id,
    });

    userCart = getState().cart.cartItems;
  };

export const saveShippingAddress =
  (data: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    userShippingAddress = data;
  };

export const savePaymentMethod =
  (data: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch({
      type: constants.CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });

    userPaymentMethod = data;
  };
