import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import {theme, macbook, flexContainer} from "../../lib/theme";

const BasicLoginForm= (props) => {
  return(
    <div className={props.className}>
      LoginForm
    </div>
  );
};

const LoginForm = styled(BasicLoginForm)`

`;

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(LoginForm);