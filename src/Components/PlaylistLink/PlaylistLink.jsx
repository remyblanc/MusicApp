import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import { connect } from "react-redux";
import { playlistRename } from "../../actions";

const BasicPlaylistLink = (props) => {
  return(
    <div
      className={`${props.className} playlistLink`}
      onDoubleClick={e => {
        e.target.contentEditable = true;
        e.target.focus();
        document.execCommand('selectAll', false, null);
      }}
      onKeyDown={e => e.keyCode === 13 ? e.target.blur() : null}
      onBlur={e => {
        e.target.contentEditable = false;
        props.playlistRename();
      }}>
      {props.PlaylistLinkTitle}
    </div>
  );
};

const PlaylistLink = styled(BasicPlaylistLink)`
  cursor: pointer;
  text-align: left;
  padding: 3px 2px;
  user-select: none;
  max-width: 100px;
  ${fontSize(14, 14)}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.5);
    //border: 1px solid rgba(255,255,255,0.5);
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}


function mapDispatchToProps(dispatch) {
  return {
    playlistRename: playlistName => dispatch(playlistRename(playlistName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistLink);