import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory();
const reducer = createRootReducer(history);

export default function configureStore() {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}
