import todo from "./todoReducer";
import counter from "./counterReducer";
import { combineReducers } from "redux";

export default combineReducers({
  todo,
  counter,
});
