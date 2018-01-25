import React from 'react';
import styled from "styled-components";

import { theme, macbook, flexContainer, fontSize } from "../../lib/theme";

import { connect } from "react-redux";
import { activatePlaylist, renamePlaylist, deletePlaylist } from "../../actions";

const BasicPlaylistLink = (props) => {
  let playlistTitle = props.PlaylistLinkTitle;
  return(
    <div
      data-playlistid={props.PlaylistID}
      className={`${props.className} playlistLink ${props.activePlaylist ? 'active-playlistLink' : null}`}
      onClick={e => {
        let playlist = {
          playlistName: e.target.innerHTML,
          playlistID: parseInt(e.target.dataset.playlistid)
        };
        props.activatePlaylist(playlist);
      }}
      onDoubleClick={e => {
        e.target.contentEditable = true;
        e.target.focus();
        document.execCommand('selectAll', false, null);
      }}
      onKeyDown={e => e.keyCode === 13 ? e.target.blur() : null}
      onBlur={e => {
        e.target.contentEditable = false;
        if (playlistTitle !== e.target.innerHTML) {
          let playlist = {
            playlistName: e.target.innerHTML,
            playlistID: parseInt(e.target.dataset.playlistid)
          };
          playlist.playlistName ? props.renamePlaylist(playlist) : props.deletePlaylist(playlist);
        }
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
  word-wrap: break-word;
  overflow-wrap: break-word;
  ${fontSize(14, 14)}
  
  &.active-playlistLink {
    color: red;
  }
  
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
    activatePlaylist: playlist => dispatch(activatePlaylist(playlist)),
    renamePlaylist: playlist => dispatch(renamePlaylist(playlist)),
    deletePlaylist: playlist => dispatch(deletePlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistLink);