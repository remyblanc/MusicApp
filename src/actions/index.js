export const ON_LOGIN = 'ON_LOGIN';
export const ON_FORGET = ON_FORGET;

import LangList from "../Langs/LangList";

export function onLogin(user) {
  return {
    type: ON_LOGIN,
    login: user.login,
    password: user.password
  };
}

export function onForgetLinkClick(forgetLink) {
  if (forgetLink.dataset.action === 'forget') {
    forgetLink.blur();
    forgetLink.innerHTML = `< ${LangList.En.BackLink}`;
    forgetLink.dataset.action = "back";
    forgetLink.parentNode.getElementsByClassName('button')[0].innerHTML = LangList.En.Recover;
    [...forgetLink.parentNode.getElementsByTagName('input')].filter((input) => {
      input.parentNode.classList.remove('error');
      if (input.type.toLowerCase() === "password") {
        input.parentNode.style.opacity = '0';
        input.parentNode.style.height = '0';
        input.parentNode.style.marginBottom = '0';
      }
    });
  } else {
    forgetLink.blur();
    forgetLink.innerHTML = LangList.En.ForgetLink;
    forgetLink.dataset.action = "forget";
    forgetLink.parentNode.getElementsByClassName('button')[0].innerHTML = LangList.En.LogIn;
    [...forgetLink.parentNode.getElementsByTagName('input')].filter((input) => {
      input.parentNode.classList.remove('error');
      if (input.type.toLowerCase() === "password") {
        input.parentNode.style.opacity = '1';
        input.parentNode.style.height = '58px';
        input.parentNode.style.marginBottom = '10px';
      }
    });
  }
}