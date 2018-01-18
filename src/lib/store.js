import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';
import { mySaga } from './../sagas';

export const history = createHistory();

const sagaMiddleWare = createSagaMiddleware();
const routrMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleWare, routrMiddleware];

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleWare.run(mySaga);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

export default store;
