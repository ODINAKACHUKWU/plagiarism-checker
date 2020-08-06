import { combineReducers } from "redux";
import authReducer from "./authReducer";
import comparismReducer from "./comparismReducer";
import logReducer from "./logReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  comparism: comparismReducer,
  log: logReducer,
});

export default rootReducer;
