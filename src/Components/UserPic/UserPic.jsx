import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import {theme, macbook, flexContainer} from "../../lib/theme";

const BasicUserPic= (props) => {
  return(
    <div className={props.className}>
      <div className="material-icons">{props.store.user.avatar || "person"}</div>
    </div>
  );
};

const UserPic = styled(BasicUserPic)`
  margin-left: 15px;
  background: ${theme.colors.menuColor};
  ${flexContainer('center','center','center')}
  height: 48px;
  width: 48px;
  border-radius: 4px;
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