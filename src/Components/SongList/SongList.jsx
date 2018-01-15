import React from 'react';
import PropTypes from 'prop-types';

import Song from "./Song/Song";

function SongList(props) {
  return(
    <div className="SongList">
      {props.musicList.map(song =>
        <Song
          key={song.songID}
          n={song.songID}
          title={song.songTitle}
          author={song.songAuthor}
          gotDrag={props.gotDrag}
          playSong={props.playSong}
        />)
      }
    </div>
  );
}

SongList.propTypes = {
  musicList: PropTypes.array.isRequired,
  gotDrag: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired
};

export default SongList;