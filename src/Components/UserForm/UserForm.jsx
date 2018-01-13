import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import { theme, macbook } from "../../lib/theme";
import UserPic from "../UserPic/UserPic";

const BasicUserForm = (props, { className }) => {
  return(
    <div {...{ className}}>
      {props.store.user.name ?
          <div>Logged <UserPic/></div>
        :
          <div>Log in Register <UserPic/></div>
      }
    </div>
  );
};

const UserForm = styled(BasicUserForm)`
  
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);