import { combineReducers } from "@reduxjs/toolkit";
import ProductsSliceReducer from "../Slices/ProductsSlice";
import BasketSliceReducer from "../Slices/BasketSlice";
import LoginSliceReducer from "../Slices/LoginSlice";
import RegisterSliceReducer from "../Slices/RegisterSlice";
const RootSlice = combineReducers({
  products: ProductsSliceReducer,
  basket: BasketSliceReducer,
  login: LoginSliceReducer,
  register: RegisterSliceReducer,
});
export default RootSlice;
