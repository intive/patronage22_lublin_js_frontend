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
import { userData } from "../actions/userActions";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

let cartItemsFromStorage;
let shippingAddressFromStorage;

if (typeof window !== "undefined") {
  cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.stringify(localStorage.getItem("cartItems"))
    : [];
}

if (typeof window !== "undefined") {
  shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.stringify(localStorage.getItem("shippingAddress"))
    : {};
}

const initialState = {
  userLogin: { userInfo: userData },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;
