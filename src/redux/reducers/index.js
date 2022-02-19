import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";

export default combineReducers({ robots: robotsReducer });
