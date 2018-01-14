import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import {theme, macbook, flexContainer} from "../../lib/theme";

const BasicLoginForm = (props) => {
  return(
    <div className={props.className}>
      LoginForm
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
  width:690px;
`;

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(LoginForm);