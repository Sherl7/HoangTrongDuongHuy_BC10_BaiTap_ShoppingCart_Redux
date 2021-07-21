import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

// Store tong
export const rootReducer = combineReducers({
  cartReducer,
});
