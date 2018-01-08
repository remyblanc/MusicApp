import React from 'react';
import PropTypes from 'prop-types';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(){
    let audio = document.getElementsByTagName("audio");
    audio[0].load();
  }

  render()
  {
    return (
      <audio controls>
        <source src={this.props.songAddress} />
      </audio>
    )
  }
}

SongPlayer.propTypes = {
  songAddress: PropTypes.string.isRequired
}

export default SongPlayer;