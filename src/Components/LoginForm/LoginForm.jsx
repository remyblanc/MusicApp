import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";
import { onLogin, onForgetLinkClick } from '../../actions';

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import BasicInput from "./../BasicInput/BasicInput";
import BasicButton from "./../BasicButton/BasicButton";
import LangList from "../../Langs/LangList";

class BasicLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <form className={this.props.className} onSubmit={this.props.onSubmit}>
        <div>
          <span>Login</span>
          <span>Register</span>
        </div>
        <BasicInput
          type="text"
          name="login"
          placeHolder={LangList.En.Login}
          icon="person"
        />
        <BasicInput
          type="password"
          name="password"
          placeHolder={LangList.En.Password}
          icon="lock"
        />
        <BasicButton
          buttonText={LangList.En.LogIn}
        />
        <span
          tabIndex="0"
          data-action="forget"
          onClick={(e) => this.props.onForgetOrBack(e)}>{LangList.En.ForgetLink}</span>
      </form>
    )
  }
}

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
    
    &:hover,  &:focus {
      opacity: 1;
      outline: none;
    }
  }
`;

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let arr = [...e.target.getElementsByTagName('input')];
      let obj = {};
      arr.map((e) => {
        if (e.dataset.value) {
          obj[e.dataset.name] = e.dataset.value;
        } else {
          e.parentNode.classList.add('error');
          return obj = {};
        }
      });
      if (obj.login) {
        dispatch(onLogin(obj));
      }
    },
    onForgetOrBack: (e) => onForgetLinkClick(e.target)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);