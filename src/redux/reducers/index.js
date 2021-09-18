import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { formReducer } from "./formReducer";

const reducers = combineReducers({
  counter: counterReducer,
  allUsers: formReducer,
});

export default reducers;
