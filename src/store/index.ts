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
import {
  userPaymentMethod,
  userCart,
  userShippingAddress,
} from "../actions/cartActions";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

let userInfoFromStorage;

if (typeof window !== "undefined") {
  userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.stringify(localStorage.getItem("userInfo"))
    : null;
}

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: userCart,
    shippingAddress: userShippingAddress,
    paymentMethod: userPaymentMethod,
  },
};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;
