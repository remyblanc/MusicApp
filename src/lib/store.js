import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import { mySaga } from './../sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mySaga);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

export default store;
