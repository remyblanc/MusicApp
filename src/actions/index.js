export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RENAME_PLAYLIST = 'RENAME_PLAYLIST';
export const ON_LOGIN = 'ON_LOGIN';
export const ON_RECOVER = 'ON_RECOVER';
export const ON_SEARCH = 'ON_SEARCH';
export const SAGA_LOGIN = 'SAGA_LOGIN';
export const SAGA_RECOVER = 'SAGA_RECOVER';
export const SAGA_SEARCH = 'SAGA_SEARCH';

import LangList from "../Langs/LangList";

//implements when user press Log In Button
export function onLogin(user) {
  return {
    type: ON_LOGIN,
    login: user.login,
    password: user.password
  }
}

//implements when user press Recover button
export function onRecover(user) {
  return {
    type: ON_RECOVER,
    login: user.login,
  };
}

//implements on search
export function onSearch(searchData) {
  return {
    type: ON_SEARCH,
    searchData: searchData
  };
}

//implements on add playlist
export function addPlaylist(playlistsCount) {
  return {
    type: ADD_PLAYLIST,
    playlistName: LangList.En.DefaultPlaylist,
    playlistID: playlistsCount++
  }
}

export function addSongToPlaylist(songData) {
  return {
    type: ADD_SONG_TO_PLAYLIST,
    songData: songData
  }
}

//implements on delete playlist
export function deletePlaylist(playlist) {
  return {
    type: DELETE_PLAYLIST,
    playlistID: playlist.playlistID
  }
}

//implements on rename playlist
export function renamePlaylist(playlist) {
  return {
    type: RENAME_PLAYLIST,
    playlistName: playlist.playlistName,
    playlistID: playlist.playlistID
  }
}

//implements when user press Forget your password link
export function onForgetLinkClick(forgetLink) {
  if (forgetLink.dataset.action === 'forget') {
    forgetLink.blur();
    forgetLink.innerHTML = `< ${LangList.En.BackLink}`;
    forgetLink.dataset.action = "back";
    forgetLink.parentNode.dataset.form = "forget-form";
    forgetLink.parentNode.getElementsByClassName('button')[0].innerHTML = LangList.En.Recover;
    [...forgetLink.parentNode.getElementsByTagName('input')].filter((input) => {
      input.parentNode.classList.remove('error');
      input.parentNode.classList.remove('success');
      if (input.type.toLowerCase() === "password") {
        input.disabled = true;
        input.parentNode.style.opacity = '0';
        input.parentNode.style.height = '0';
        input.parentNode.style.marginBottom = '0';
      }
    });
  } else {
    forgetLink.blur();
    forgetLink.innerHTML = LangList.En.ForgetLink;
    forgetLink.dataset.action = "forget";
    forgetLink.parentNode.dataset.form = "login-form";
    forgetLink.parentNode.getElementsByClassName('button')[0].innerHTML = LangList.En.LogIn;
    [...forgetLink.parentNode.getElementsByTagName('input')].filter((input) => {
      input.parentNode.classList.remove('error');
      input.parentNode.classList.remove('success');
      if (input.type.toLowerCase() === "password") {
        input.disabled = false;
        input.parentNode.style.opacity = '1';
        input.parentNode.style.height = '58px';
        input.parentNode.style.marginBottom = '10px';
      }
    });
  }
}