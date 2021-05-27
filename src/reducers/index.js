import { combineReducers } from "redux";
import authReducers from "./authReducers";
import messageReducers from "./messageReducer";
import productReducers from "./productReducer";
import orderReducers from "./orderReducers";
import userReducers from "./userReducers";

export default combineReducers({
  auth: authReducers,
  message: messageReducers,
  product: productReducers,
  order: orderReducers,
  user: userReducers
});
