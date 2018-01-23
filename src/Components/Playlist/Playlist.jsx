import React from 'react';
import styled from "styled-components";
import { theme, macbook, flexContainer } from "../../lib/theme";

import { connect } from "react-redux";

import SearchResult from "../SearchResult/SearchResult";

class BasicPlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.store.user.activePlaylist.musicList.length > 0) {
      document.getElementsByClassName(nextProps.className)[0].style.opacity = 1;
      document.getElementsByClassName(nextProps.className)[0].style.marginTop = 0;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <span>{this.props.store.user.activePlaylist.title}</span>
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
  transition: 0.7s;
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(Playlist);