export const ON_LOGIN = 'ON_LOGIN';
export const ON_FORGET = ON_FORGET;

export function onLogin(user) {
  return {
    type: ON_LOGIN,
    login: user.login,
    password: user.password
  };
}

export function onForget(e) {
  if (e.target.dataset.action === 'forget') {
    e.target.blur();
    e.target.innerHTML = "< Back";
    e.target.dataset.action = "back";
    document.getElementsByClassName('button')[0].innerHTML = 'Send';
    let inputs = document.getElementsByTagName('input');
    [...inputs].filter((input) => {
      if (input.type.toLowerCase() === "password") {
        input.parentNode.style.opacity = '0';
        input.parentNode.style.height = '0';
        input.parentNode.style.marginBottom = '0';
      }
    });
  } else {
    e.target.blur();
    e.target.innerHTML = "Forget your password?";
    e.target.dataset.action = "forget";
    document.getElementsByClassName('button')[0].innerHTML = 'Log in';
    let inputs = document.getElementsByTagName('input');
    [...inputs].filter((input) => {
      if (input.type.toLowerCase() === "password") {
        input.parentNode.style.opacity = '1';
        input.parentNode.style.height = '58px';
        input.parentNode.style.marginBottom = '10px';
      }
    });
  }
}