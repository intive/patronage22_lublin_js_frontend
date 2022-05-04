import * as constants from "../types/cartConstants";

interface Cart {
  cartItems: [];
}

export const cartReducer = (
  state = { cartItems: <any>[], shippingAddress: {}, paymentMethod: {} },
  action: any
) => {
  switch (action.type) {
    case constants.CART_ADD_ITEM:
      const item = action.payload;

      const existItem: any = state.cartItems.find((x: any) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case constants.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x: any) => x.id !== action.payload),
      };
    case constants.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case constants.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
