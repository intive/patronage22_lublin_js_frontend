import * as constants from "../types/productConstants";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { loadProducts, loadProductDetails } from "../lib/products";

export const listProducts =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
      dispatch({
        type: constants.PRODUCT_LIST_REQUEST,
      });

      const data = await loadProducts();

      dispatch({
        type: constants.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: constants.PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listProductDetails =
  (id: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      dispatch({
        type: constants.PRODUCT_DETAILS_REQUEST,
      });

      const data = await loadProductDetails(id);

      dispatch({
        type: constants.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: constants.PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
