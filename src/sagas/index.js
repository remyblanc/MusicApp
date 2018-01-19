import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import { ON_LOGIN, SAGA_LOGIN } from "../actions";

//looking for a user via server
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

//Login event listener
export function* loginSaga() {
  yield takeEvery('ON_LOGIN', CheckLogin);
}



//looking for a user via server
function* CheckRecover(user) {
  try {
    const response = yield call(axios.post, 'http://localhost:3000/api/recover', {user});
    yield response.data === 'yes' ?
      put({type: 'SAGA_RECOVER', 'login': user.login, 'recoverUser': response.data})
      :
      put({type: 'SAGA_RECOVER', 'recoverUser': response.data})
  } catch (e) {
    console.log(e);
  }
}

//Recover event listener
export function* recoverSaga() {
  yield takeEvery('ON_RECOVER', CheckRecover);
}



//looking for songs via server
function* CheckSearch(searchData) {
  if (searchData.searchData !== null) {
    try {
      const response = yield call(axios.post, 'http://localhost:3000/api/search', {searchData});
      yield put({type: 'SAGA_SEARCH', 'searchData': response.data});
    } catch (e) {
      console.log(e);
    }
  } else {
    yield put({type: 'SAGA_SEARCH', 'searchData': ""});
  }
}

//Search event listener
export function* searchSaga() {
  yield takeEvery('ON_SEARCH', CheckSearch);
}

