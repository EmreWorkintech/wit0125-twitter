import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { postReducer } from "./reducers/postReducer";
import { followReducer } from "./reducers/followReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  post: postReducer,
  follow: followReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
