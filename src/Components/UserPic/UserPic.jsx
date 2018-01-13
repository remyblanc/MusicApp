import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import { theme, macbook } from "../../lib/theme";

const BasicUserPic= (props, { className }) => {
  return(
    <div {...{ className}}>

      <div>{props.store.user.avatar || "default"}</div>
    </div>
  );
};

const UserPic = styled(BasicUserPic)`
  
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPic);