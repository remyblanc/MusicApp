import React from 'react';
import styled from "styled-components";

import { theme, macbook, flexContainer, fontSize } from "../../lib/theme";
import { addPlaylist, addSongToPlaylist } from "../../actions";
import { connect } from "react-redux";

const BasicSearchResult = (props) => {
  return(
    <div className={props.className}>
      <div>
        <div className="material-icons play-btn">play_arrow</div>
        <div>
          <div className="song-title">{props.songData.songTitle}</div>
          <div className="song-author">{props.songData.songAuthor}</div>
        </div>
      </div>
      <div>
        {/*<div className="hq">hq</div>*/}
        <div className="song-time">5:36</div>
        <div
          className="material-icons playlist-add"
          onClick={(song) => props.addSongToPlaylist(song.target)}>playlist_add</div>
      </div>
    </div>
  );
};

const SearchResult = styled(BasicSearchResult)`
  background: ${theme.colors.menuColorRgba};
  padding: 10px ;
  margin-bottom: 3px;n
  border-radius: 4px;
  transition: 0.3s;
  color:#ffffff;
  ${flexContainer('space-between', 'center', 'center')}
  
  > div {
    ${flexContainer('center', 'center', 'center')}
  }
  
  .play-btn {
    font-size: 32px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .song-author {
    ${theme.fonts.TitilliumWebThin}
    ${fontSize(13, 13)}
    opacity: 0.8;
  }
  
  .song-title {
    ${theme.fonts.TitilliumWebRegular}
    ${fontSize(16, 18)}
    margin-bottom: 1px;
  }
  
  .song-time {
    ${fontSize(13, 13)}
    margin: 0px 10px;
  }
  
  .hq {
    ${theme.fonts.TitilliumWebBold}
    ${fontSize(10, 10)}
    background: #ffffff;
    border-radius: 3px;
    padding: 3px 4px;
    color: ${theme.colors.menuColor};
  }
  
  .playlist-add {
    padding-top: 2px;
    font-size: 30px;
    cursor: pointer;
  }
  
  &:hover {
    background: ${theme.colors.menuColor};
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    addSongToPlaylist: songElement => dispatch(addSongToPlaylist(songElement))
  }
}

export default connect(null, mapDispatchToProps)(SearchResult);