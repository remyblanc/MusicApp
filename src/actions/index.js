export const ON_LOGIN = 'ON_LOGIN';
export const ON_RECOVER = 'ON_RECOVER';
export const SAGA_LOGIN = 'SAGA_LOGIN';

import LangList from "../Langs/LangList";

import axios from 'axios';

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
      if (input.type.toLowerCase() === "password") {
        input.disabled = false;
        input.parentNode.style.opacity = '1';
        input.parentNode.style.height = '58px';
        input.parentNode.style.marginBottom = '10px';
      }
    });
  }
}