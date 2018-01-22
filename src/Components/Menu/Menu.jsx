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

let updateLast = false;

class BasicMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.store.user.playlists.length < nextProps.store.user.playlists.length) {
      updateLast = true;
    }
  }

  componentDidUpdate() {
    function selection(element) {
      let target = element;
      let rng, sel;
      if (document.createRange) {
        rng = document.createRange();
        rng.selectNode(target);
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng);
      } else {
        let rng = document.body.createTextRange();
        rng.moveToElementText(target);
        rng.select();
      }
    }
    if (updateLast === true) {
      let newPlaylistID = document.getElementsByClassName("playlistLink")[document.getElementsByClassName("playlistLink").length-1];
      newPlaylistID.contentEditable = true;
      newPlaylistID.focus();
      document.execCommand('selectAll', false, null);
      updateLast = false;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <Link to="/">
            <img alt="" src={logo}/>
          </Link>
        </div>
        <br/>
        {this.props.store.user.playlists.map(playlist =>
          <PlaylistLink
            PlaylistLinkTitle={playlist.title}
            key={playlist.id}
            PlaylistID={playlist.id}
          />
        )}

        <AddPlaylist onClick={() => this.props.addPlaylist(document.getElementsByClassName("playlistLink").length)}>
          <span className="material-icons">playlist_add</span>
          <span>Add playlist</span>
        </AddPlaylist>
      </div>
    );
  }
}

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
    addPlaylist: playlistsCount => dispatch(addPlaylist(playlistsCount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);