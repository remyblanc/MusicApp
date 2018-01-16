import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";
import { onLogin, onForget } from '../../actions';

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import BasicInput from "./../BasicInput/BasicInput";
import BasicButton from "./../BasicButton/BasicButton";
import LangList from "../../Langs/LangList";

// const BasicLoginForm = (props) => {
//   return(
//     <div className={props.className}>
//       <div>
//         <span>Login</span>
//         <span>Register</span>
//       </div>
//       <BasicInput
//         type="text"
//         placeHolder={LangList.En.Login}
//         icon="person"
//         ref="login"
//       />
//       <BasicInput
//         type="password"
//         placeHolder={LangList.En.Password}
//         icon="lock"
//         ref="password"
//       />
//       <BasicButton
//         buttonText="Log In"
//         Login={props.onLogin}
//       />
//       <span
//         tabIndex="0"
//         data-action="forget"
//         onClick={(e) => props.onForgetOrBack(e)}>Forget your password?</span>
//     </div>
//   );
// };

class BasicLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.login);
  }

  render() {
    return(
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        <div>
          <span>Login</span>
          <span>Register</span>
        </div>
        <BasicInput
          type="text"
          placeHolder={LangList.En.Login}
          icon="person"
          ref="login"
        />
        <BasicInput
          type="password"
          placeHolder={LangList.En.Password}
          icon="lock"
          ref="password"
        />
        <BasicButton
          buttonText="Log In"
          Login={this.props.onLogin}
        />
        <span
          tabIndex="0"
          data-action="forget"
          onClick={(e) => this.props.onForgetOrBack(e)}>Forget your password?</span>
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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogin: (e) => {
      e.target.blur();
      // dispatch(onLogin({'login':1}))
    },
    onSubmit: (e) => {
      e.preventDefault();
      console.log(ownProps.refs);
    },
    onForgetOrBack: (e) => onForget(e)
  }
}

export default connect(null, mapDispatchToProps, null, { withRef: true })(LoginForm);