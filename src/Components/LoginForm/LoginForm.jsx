import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import BasicInput from "./../BasicInput/BasicInput";
import BasicButton from "./../BasicButton/BasicButton";
import LangList from "../../Langs/LangList";

const BasicLoginForm = (props) => {
  return(
    <div className={props.className}>
      <BasicInput
        type="text"
        placeHolder={LangList.En.Login}
        icon="person"
      />
      <BasicInput
        type="password"
        placeHolder={LangList.En.Password}
        icon="lock"
      />
      <BasicButton
        buttonText="Log In"
        Login={props.onLogin}
      />
      <span tabIndex="0" data-action="forget" onClick={(e) => props.onForgetOrBack(e)}>Forget your password?</span>
    </div>
  );
};

const LoginForm = styled(BasicLoginForm)`
  text-align:center;
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  right: 0px;
  margin: auto;
  width:400px;
  
  > div {
    margin-bottom: 10px;
  }
  
  > .button {
    margin: 5px auto;
  }
  
  > span {
    ${fontSize(14, 16)}
    opacity: 0.5;
    transition: 0.3s;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
    }
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch({'type': 'onLogin', 'login':1}),
    onForgetOrBack: (e) => {
      if (e.target.dataset.action === 'forget') {
        e.target.innerHTML = "Back";
        e.target.dataset.action = "back";
        let inputs = document.getElementsByTagName('input');
        [...inputs].filter((input) => {
          if (input.type.toLowerCase() === "password") {
            input.parentNode.style.opacity = '0';
            input.parentNode.style.height = '0';
          }
        });
      } else {
        e.target.innerHTML = "Forget your password?";
        e.target.dataset.action = "forget";
        let inputs = document.getElementsByTagName('input');
        [...inputs].filter((input) => {
          if (input.type.toLowerCase() === "password") {
            input.parentNode.style.opacity = '1';
            input.parentNode.style.height = '56px';
          }
        });
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);