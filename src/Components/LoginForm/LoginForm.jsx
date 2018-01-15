import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import {theme, macbook, flexContainer} from "../../lib/theme";

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
      <BasicButton buttonText="Log In"/>
      <span>Forget your password?</span>
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
  
  button {
    margin: 5px 0;
  }
`;

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(LoginForm);