import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import { ON_LOGIN, SAGA_LOGIN } from "../actions";

function* CheckLogin(user) {
  try {
    const response = yield call(axios.post, 'http://localhost:3000/api/login', {user});
    yield response.data === 'yes' ?
      put({type: 'SAGA_LOGIN', 'login': user.login, 'logged': response.data})
        :
      put({type: 'SAGA_LOGIN', 'logged': response.data})
  } catch (e) {
    console.log(e);
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* mySaga() {
  yield takeEvery('ON_LOGIN', CheckLogin);
}