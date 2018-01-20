import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {ADD_PLAYLIST, SAGA_LOGIN, SAGA_RECOVER, SAGA_SEARCH} from '../actions';

const userReducer = (state = { playlists: []}, action) => {
  switch (action.type) {
    case SAGA_LOGIN:
      return {
        login: action.login,
        logged: action.logged
      };

    case SAGA_RECOVER:
      return {
        login: action.login,
        recoverUser: action.recoverUser
      };

    case ADD_PLAYLIST:
      const playlist = {
        title: action.playlistName
      };
      return {
        playlists: [...state.playlists, playlist]
      };

    default:
      return state;
  }
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SAGA_SEARCH:
      return {
        searchData: action.searchData
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer,
  search: searchReducer,
  routerReducer,
});

export default reducers;