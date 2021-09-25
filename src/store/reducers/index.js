import { combineReducers } from "redux";
import videosReducer from "./videos";
import apiReducer from "./api";
import searchReducer from "./search";

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  search: searchReducer,
});
