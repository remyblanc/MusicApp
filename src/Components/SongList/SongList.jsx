import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Song from "./Song/Song";

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      musicList: []
    };

    this.handleGotDrag = this.handleGotDrag.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3000/api/list')
      .then(response => response.data)
      .then(musicList => this.setState({ musicList }))
      .catch(error => console.error(error.message));
  }

  handleGotDrag(obj) {
    function indexInParent(node) {
      let children = node.parentNode.childNodes;
      let num = 0;
      for (let i=0; i<children.length; i++) {
        if (children[i] === node) return num;
        if (children[i].nodeType === 1) num++;
      }
      return -1;
    }

    let startX = obj.pageX || obj.originalEvent.touches[0].pageX,
        startY = obj.pageY || obj.originalEvent.touches[0].pageY,
        currentPos = obj.target.style.transform,
        x = 0,
        y = 0,
        song = obj.target,
        songIndex = indexInParent(song);

    currentPos ? (
      currentPos = currentPos.match(/\d*/g,''),
      currentPos = currentPos.filter(String),
      currentPos.shift(),
      currentPos.pop()
    )
    :
      currentPos = [0,0];
    song.style.zIndex = 50;

    window.onmousemove = function(e) {
      x = e.pageX || e.originalEvent.touches[0].pageX;
      y = e.pageY || e.originalEvent.touches[0].pageY;

      song.style.transform = `translate3d(${currentPos[0]-(startX-x)}px, ${currentPos[1]-(startY-y)}px, 0px)`;

      let moved = (y-startY)/60;
      let rounded = Math.round(moved);

      if (y > startY-35) {
        if (rounded > 0) {
          document.getElementsByClassName('song-block')[rounded+songIndex].style.transform = `translate3d(0px, -61px, 0px)`;
        }
      }

      window.onmouseup = function(e) {
        window.onmousemove = null;
        if (y > startY-35 && y < startY+35) {
          song.style.zIndex = 0;
          song.style.transform = `translate3d(0px, 0px, 0px)`;
          window.onmouseup = null;
        } else {
          song.style.zIndex = 0;
          song.style.transform = `translate3d(0px, ${61*rounded}px, 0px)`;
          window.onmouseup = null;
        }
      }
    };

    window.onmouseup = function(e) {
      window.onmousemove = null;
    };
  }

  render()
  {
    return (
      <div className="SongList">
        {this.state.musicList.map(song =>
          <Song
            key={song.songID}
            title={song.songTitle}
            author={song.songAuthor}
            gotDrag={this.handleGotDrag}
          />)
        }
      </div>
    )
  }
}

// SongList.propTypes = {
//   gotDrag: PropTypes.func.isRequired
// }

export default SongList;