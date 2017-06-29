import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createMiddleware from './clientMiddleware';
import ApiClient from '../helpers/ApiClient';

export default function configureStore(initialState) {
  const client = new ApiClient();
  let enhancer = null;

  if (__DEVELOPMENT__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const DevTools = require('../helpers/DevTools');
    enhancer = compose(
      //你要使用的中间件，放在前面
      applyMiddleware(createMiddleware(client), thunk),
      //必须的！启用带有monitors（监视显示）的DevTools
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (() => { })
    );
  } else {
    enhancer = applyMiddleware(createMiddleware(client), thunk);
  }

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
