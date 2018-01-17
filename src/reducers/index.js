import { combineReducers } from 'redux';
import { ON_LOGIN } from '../actions';

const userReducer = (state = { 'login': null, 'password': null }, action) => {
  switch (action.type) {
    case ON_LOGIN:
      return {
        login: action.login,
        password: action.password,
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer
});

export default reducers;