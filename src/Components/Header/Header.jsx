import React from 'react';
import styled from "styled-components";
import { theme, macbook, flexContainer } from "../../lib/theme";

import Search from ".././Search/Search";
import UserForm from ".././UserForm/UserForm";
import { connect } from "react-redux";

const BasicHeader = (props) => {
  return(
    <div className={props.className}>
      {props.store.user.activePlaylist.musicList.length > 0 ?
        <Search />
        :
        <div />
      }

      <UserForm />
    </div>
  );
};

const Header = styled(BasicHeader)`
  padding: ${theme.paddings.pcTop} ${theme.paddings.pcSide};
  ${flexContainer('space-between','center','center')}
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(Header);