import { createStore } from "redux";
import { combineReducers, compose } from "redux";
import app from "./app";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  app,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers());
/* eslint no-underscore-dangle: 0 */
export default store;

export type RootState = ReturnType<typeof store.getState>;
