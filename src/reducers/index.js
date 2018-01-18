import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SAGA_LOGIN, ON_RECOVER } from '../actions';

const userReducer = (state = { 'login': null, 'password': null }, action) => {
  switch (action.type) {
    case SAGA_LOGIN: {
      return {
        login: action.login,
        logged: action.logged
      };
    }

    case ON_RECOVER:
      return {
        login: action.login
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer,
  routerReducer
});

export default reducers;