import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga";

import userReducer from "./user";

// ---
// REDUCERS
// ---

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer = applyMiddleware(...middlewares);

  const rootReducer = combineReducers({
    user: userReducer
  });

  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
