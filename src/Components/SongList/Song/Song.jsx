import React from 'react';
import PropTypes from 'prop-types';

import './Song.scss';

function Song(props) {
  return(
    <div className="song-block flex-container flex-vert-center"
         onMouseDown={(e) => props.gotDrag(e)}>
      <div className="flex-container flex-vert-center">
        <div className="play-btn">play</div>
        <div>
          <div className="song-title">{props.title}</div>
          <div className="song-author">{props.author}</div>
        </div>
      </div>
      <div className="flex-container flex-vert-center">
        <div className="hq-icon">hq</div>
        <div>time</div>
      </div>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Song;