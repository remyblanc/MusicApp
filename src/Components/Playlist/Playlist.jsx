import React from 'react';
import styled from "styled-components";
import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import { connect } from "react-redux";
import { renamePlaylist, deletePlaylist } from "../../actions";

import SearchResult from "../SearchResult/SearchResult";

class BasicPlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.store.user.activePlaylist.musicList.length > 0) {
      document.getElementsByClassName(nextProps.className)[0].classList.add("show-playlist");
    } else {
      document.getElementsByClassName(nextProps.className)[0].classList.remove("show-playlist");
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="playlist-title">
          <div
            className="playlist-title-text"
            onDoubleClick={e => {
              e.target.contentEditable = true;
              e.target.focus();
              document.execCommand('selectAll', false, null);
            }}
            onKeyDown={e => e.keyCode === 13 ? e.target.blur() : null}
            onBlur={e => {
              e.target.contentEditable = false;
              // if (playlistTitle !== e.target.innerHTML) {
                let playlist = {
                  playlistName: e.target.innerHTML,
                  playlistID: this.props.store.user.activePlaylist.id
                };
                playlist.playlistName ? this.props.renamePlaylist(playlist) : this.props.deletePlaylist(playlist);
              // }
            }}>{this.props.store.user.activePlaylist.title}</div>
          <span
            className="material-icons"
            onClick={e => {
              document.getElementsByClassName("playlist-title-text")[0].contentEditable = true;
              document.getElementsByClassName("playlist-title-text")[0].focus();
              document.execCommand('selectAll', false, null);
            }}>mode_edit</span>
          <span
            className="material-icons"
            onClick={() => {
              let playlist = {
                playlistID: this.props.store.user.activePlaylist.id
              };
              console.log('pl',playlist);
              this.props.deletePlaylist(playlist);
            }}>delete</span>
        </div>
        {
          this.props.store.user.activePlaylist.musicList.map((song, index) => {
            return (
              <SearchResult
                key={index}
                songData={song}
              />)
          })
        }
      </div>
    );
  }
}

const Playlist = styled(BasicPlaylist)`
  width: 690px;
  margin: 25px auto auto;
  opacity: 0;
  transition: 0s;
  
  &.show-playlist {
    margin-top: 0;
    opacity: 1;
    transition: 0.7s;
  }
  
  .playlist-title {
    ${flexContainer('flex-start','center','center')}
    margin-bottom: 15px;
    ${fontSize(18, 22)}
    
    &:hover span {
      opacity: 0.5;
    }
    
    span {
      transition: 0.3s;
      margin-left: 5px;
      opacity: 0;
      cursor: pointer;
      ${fontSize(20, 22)}
      
      &:hover {
        opacity: 1;
      }
    }
  }
  
  .playlist-title-text {
    min-width: 15px;
    
    &:focus {
      opacity: 1;
      outline: none;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.5);
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
    renamePlaylist: playlist => dispatch(renamePlaylist(playlist)),
    deletePlaylist: playlist => dispatch(deletePlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);