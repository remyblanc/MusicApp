import { combineReducers } from 'redux';

const userReducer = (state = { name: null }, action) => {
  switch (action.type) {
    // case "INC":
    //   return state = state+action.amount;

    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer
});

export default reducers;