import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export function configureStore() {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
