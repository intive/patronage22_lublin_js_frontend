import * as constants from "../types/productConstants";

export const productListReducer = (state = { products: [] }, action: any) => {
  switch (action.type) {
    case constants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case constants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action: any) => {
  switch (action.type) {
    case constants.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case constants.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case constants.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
