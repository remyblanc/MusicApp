import { combineReducers } from 'redux';

const userReducer = (state = { 'login': null }, action) => {
  switch (action.type) {
    case "onLogin":
      return {
        login: action.login,
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer
});

export default reducers;