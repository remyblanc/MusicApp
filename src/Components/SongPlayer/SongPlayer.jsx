import React from 'react';
import PropTypes from 'prop-types';

import './SongPlayer.scss';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playingSong: {
        songAuthor: "",
        songTitle: "",
        timer: "0",
        volume: "100"
      }
    };

    this.handlePlayStop = this.handlePlayStop.bind(this);
  }

  componentWillReceiveProps(){
    let audio = document.getElementsByTagName("audio");
    audio[0].load();
    audio[0].play();
    console.log(audio[0].currentTime);
  }

  handlePlayStop() {
    let audio = document.getElementsByTagName("audio");
    audio[0].paused ? audio[0].play() : audio[0].pause();
  }

  render()
  {
    return (
      <div>
        <div className="song-player flex-container flex-vert-center">
          <div className="sp-play-btn" onClick={this.handlePlayStop}>play</div>
          <div className="sp-main">
            <div className="flex-container">
              <div>{this.props.playingSong.songAuthor} - {this.props.playingSong.songTitle}</div>
              <div> time</div>
            </div>
            <div className="sp-progress-bar-wrap">
              <div className="sp-progress-bar" />
            </div>
          </div>
          <div className="sp-volume-wrap">
            <div className="sp-volume" />
          </div>
          <div className="sp-replay">rp</div>
        </div>
        <audio>
          <source src={`http://localhost:3000/api/music?fileTitle=${this.props.playingSong.fullTitle}`} />
        </audio>
      </div>
    )
  }
}

SongPlayer.propTypes = {
  playingSong: PropTypes.object.isRequired
}

export default SongPlayer;