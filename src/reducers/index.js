import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  ACTIVATE_PLAYLIST, ADD_PLAYLIST, ADD_SONG_TO_PLAYLIST, DELETE_PLAYLIST, RENAME_PLAYLIST, SAGA_LOGIN,
  SAGA_RECOVER, SAGA_SEARCH
} from '../actions';

const userReducer = (state = { playlists: [], activePlaylist: { musicList: [] }}, action) => {
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
        id: action.playlistID,
        title: `${action.playlistName}(${action.playlistID+1})`,
        musicList: []
      };
      return {
        activePlaylist: {musicList: [], ...playlist},
        playlists: [...state.playlists, playlist]
      };

    case ADD_SONG_TO_PLAYLIST:
      if (state.activePlaylist.title) {
        return {
          ...state,
          playlists: [...state.playlists.map(playlist => {
            if (playlist.id === state.activePlaylist.id) {
              return {
                ...playlist,
                musicList: [...playlist.musicList, action.songData]
              }
            } else {
              return playlist;
            }
          })],
          activePlaylist: {
            id: state.activePlaylist.id,
            title: state.activePlaylist.title,
            musicList: [...state.activePlaylist.musicList, action.songData]
          }
        };
      } else {
        return {
          ...state,
          playlists: [{
            id: 0,
            title: "NewPlaylist(1)",
            musicList: [action.songData]
          }],
          activePlaylist: {
            id: 0,
            title: "NewPlaylist(1)",
            musicList: [action.songData]
          }
        }
      }

    case ACTIVATE_PLAYLIST:
      return {
        ...state,
        activePlaylist: {
          id: action.playlistID,
          title: action.playlistName,
          musicList: state.playlists[state.playlists.findIndex(playlist => action.playlistID === playlist.id)].musicList
        }
      };

    case DELETE_PLAYLIST:
      const index = state.playlists.findIndex(playlist => playlist.id === action.playlistID);
      //at first removing deleted element, then decrement id of others after index
      return {
        activePlaylist: {
          id: state.playlists[index-1].id,
          title: state.playlists[index-1].title,
          musicList: []
        },
        playlists: {
          playlists: [...state.playlists.slice(0, index), ...state.playlists.slice(index+1)]
      }.playlists.map(playlist => {
        if (playlist.id <= index) {
          return {
            id: playlist.id,
            title: playlist.title
          }
        } else {
          return {
            id: --playlist.id,
            title: playlist.title
          }
        }
      })};

    case RENAME_PLAYLIST:
      return {
        ...state,
        activePlaylist: {
          ...state.activePlaylist,
          title: action.playlistName,
        },
        playlists: [...state.playlists.map(playlist => {
          if (playlist.id === action.playlistID) {
            return {
              ...playlist,
              title: action.playlistName
            }
          } else {
            return playlist;
          }
        })],
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