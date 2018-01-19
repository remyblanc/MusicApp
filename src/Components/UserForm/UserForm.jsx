import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import {theme, macbook, flexContainer} from "../../lib/theme";

import UserPic from "../UserPic/UserPic";

const BasicUserForm = (props) => {
  return(
    <div className={props.className}>
      {props.store.user.login ?
          <UserPic/>
        :
        <div>
          <div>
            <Link to='/login'>Log in</Link>
            <Link to='/pl'>Register</Link>
          </div>
          <UserPic/>
        </div>
      }
    </div>
  );
};

const UserForm = styled(BasicUserForm)`
  & > div {
    ${flexContainer('center','center','center')}
  }
  
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    margin-left: 10px;
    position: relative;
    
    &:after {
      width: 0;
      bottom: 0;
      left: 0;
      height: 1px; 
      position: absolute;
      content: "";
      transition: 0.2s;
      background: ${theme.colors.white};
    }
    
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
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