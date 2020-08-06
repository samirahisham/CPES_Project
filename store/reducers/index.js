import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  rootCart: CartReducer,
  //   rootAuth: AuthReducer,
});

export default rootReducer;
