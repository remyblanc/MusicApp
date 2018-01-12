import { createStore } from 'redux';

import reducers from '../reducers';

export const store = createStore(reducers, 0);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

export default store;
