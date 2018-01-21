import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";
import { onLogin, onRecover, onForgetLinkClick, login } from '../../actions';
import { push } from 'react-router-redux';

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import BasicInput from "./../BasicInput/BasicInput";
import BasicButton from "./../BasicButton/BasicButton";
import LangList from "../../Langs/LangList";

class BasicLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.store.user.logged === "no") {
      [...this.childNode.getElementsByTagName("input")].filter(input => {
        input.parentNode.classList.add("error");
      });
      let hidden = this.childNode.getElementsByClassName("incorrect-password")[0];
      hidden.classList.remove("hidden");
      hidden.classList.add("shown");
      hidden.style.opacity = '1';
    } else if (nextProps.store.user.logged === "yes") {
      [...this.childNode.getElementsByTagName("input")].filter(input => {
        input.parentNode.classList.remove("error");
        input.parentNode.classList.add("success");
      });
      let hidden = this.childNode.getElementsByClassName("incorrect-password")[0];
      hidden.classList.add("hidden");
      hidden.classList.remove("shown");
      hidden.style.opacity = '0';
      setTimeout(() => {
        this.childNode.style.opacity = 0;
        document.getElementsByClassName("loader")[0].style.opacity = '1';
        setTimeout(() => {
          nextProps.changeUrl('/');
        },800);
      },550);
    }

    if (nextProps.store.user.recoverUser === "yes") {
      [...this.childNode.getElementsByTagName("input")].filter(input => {
        input.parentNode.classList.remove("error");
        input.parentNode.classList.add("success");
      });
      let hidden = this.childNode.getElementsByClassName("recover-info")[0];
      hidden.classList.remove("hidden");
      hidden.classList.add("shown");
      hidden.style.opacity = '1';
    } else {

    }
  }

  // componentDidMount() {
  //   if (this.props.store.user.logged === "yes") {
  //     this.props.changeUrl('/');
  //   }
  // }

  render() {
    return(
      <form
        className={this.props.className}
        ref={(ref) => this.childNode = ref}
        data-form="login-form"
        onSubmit={this.props.onSubmit}>
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
        <div className="recover-info hidden">User founded, next actions sent to email.</div>
        <div className="incorrect-password hidden">It seems that login or password incorrect.</div>
        <BasicButton
          buttonText={LangList.En.LogIn}
        />
        <span
          tabIndex="0"
          data-action="forget"
          onClick={(e) => this.props.onForgetOrBack(e)}
          onKeyUp={(e) => e.keyCode === 13 ? this.props.onForgetOrBack(e) : null}>{LangList.En.ForgetLink}</span>
      </form>
    )
  }
}

const LoginForm = styled(BasicLoginForm)`
  transition: 0.3s;
  text-align:center;
  position:absolute;
  // top: 50%;
  // transform: translateY(-50%);
  left: 0px;
  right: 0px;
  margin: auto;
  width:400px;
  
  .incorrect-password, .recover-info {
    ${fontSize(14, 16)}
    margin: 0px;
    color: ${theme.colors.red};
    position: relative;
    z-index: 0;
    
    &.shown {
      margin-bottom: 5px;
    }
  }
  
  .recover-info {
    color: ${theme.colors.green};
  }
  
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
    position: relative;
    z-index: 1;
    
    &:hover,  &:focus {
      opacity: 1;
      outline: none;
    }
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let formType = e.target.dataset.form;
      let inputs = [...e.target.getElementsByTagName('input')];
      let user = {};
      inputs.map((input) => {
        if (!input.disabled) {
          if (input.dataset.value) {
            user[input.dataset.name] = input.dataset.value;
          } else {
            input.parentNode.classList.add('error');
            return user = {};
          }
        }
      });
      if (user.login) {
        switch (formType) {
          case 'login-form': dispatch(onLogin(user)); break;
          case 'forget-form': dispatch(onRecover(user)); break;
        }

      }
    },
    onForgetOrBack: (e) => onForgetLinkClick(e.target),
    changeUrl: (location) => dispatch(push(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);