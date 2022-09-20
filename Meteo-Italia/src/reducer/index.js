import changeTheme from "./changeTheme";
import storeReducer from "./storeReducer";
import searchReducer from "./searchReducer";
import noticeReducer from "./noticeReducer";
import weatherReducer from './weatherReducer'
import { combineReducers } from "redux";

const allReducer = combineReducers({
  changeTheme,
  storeReducer,
  searchReducer,
  noticeReducer,
  weatherReducer
});

export default allReducer;
