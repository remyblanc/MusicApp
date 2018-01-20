import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import {addPlaylist, onSearch} from '../../actions';

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import logo from '../../lib/logo.png';
import LangList from "../../Langs/LangList";

import PlaylistLink from "./../PlaylistLink/PlaylistLink";

const AddPlaylist = styled.div`
  ${flexContainer('center', 'center', 'center')}
  cursor: pointer;
  text-align: left;
    
  span {
    ${fontSize(14, 14)}
  }
  
  span.material-icons {
    padding-top: 2px;
    margin-right: 2px;
    ${fontSize(28, 28)}
  }
`;

const BasicMenu = (props) => {
  return(
    <div className={props.className}>
      <div>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
      </div>
      <br />
      {props.store.user.playlists.map(playlist =>
        <PlaylistLink PlaylistLinkTitle="123 "/>
      )}

      <AddPlaylist onClick={() => props.addPlaylist()}>
        <span className="material-icons">playlist_add</span>
        <span>Add playlist</span>
      </AddPlaylist>
    </div>
  );
};

const Menu = styled(BasicMenu)`
  height: 100%;
  padding: 35px 10px;
  position: fixed;
  left: 0;
  background: ${theme.colors.menuColor};
  text-align: center;
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPlaylist: () => dispatch(addPlaylist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);