import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if you want to use it only in production
// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production

const store = createStore(
  combineReducers({
    ...reducers
  }),
  composeEnhancers(compose(applyMiddleware(...middlewares)))
);

export { store };
