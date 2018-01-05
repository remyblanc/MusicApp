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
    //Finding out touched index
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
        songs = [...document.getElementsByClassName('song-block')],
        song = obj.target,
        songIndex = indexInParent(song),
        songList = this;

    //Parsing current transform keys
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

      song.style.transform = `translate3d(${currentPos[0] - (startX - x)}px, ${currentPos[1] - (startY - y)}px, 0px)`;

      let moved = (y - startY) / 60;
      let rounded = Math.round(moved);
      //Moving other songs
      if (y > startY-35) {
        if (rounded > 0) {
          document.getElementsByClassName('song-block')[rounded+songIndex].style.transform = `translate3d(0px, ${-(Math.sign(rounded)) * 61}px, 0px)`;
        }
      }
      if (y < startY+35) {
        if (rounded < 0) {
          document.getElementsByClassName('song-block')[rounded+songIndex].style.transform = `translate3d(0px, 61px, 0px)`;
        }
      }


      window.onmouseup = function(e) {
        window.onmousemove = null;

        song.style.zIndex = 0;
        //Setting all songs to zero transform
        songs.map((song) => {
          song.style.transform = `translate3d(0px, 0px, 0px)`;
        });

        if (!(y > startY-20 && y < startY+20)) {

          window.onmouseup = null;

          let changeMusicList = () => {
            //Getting state
            let musicList = songList.state.musicList;

            //Changing position in state array
            [musicList[songIndex], musicList[rounded+songIndex]] = [musicList[rounded+songIndex], musicList[songIndex]];
            //[...musicList] = chElems.map((ch) => musicList[ch]);

            //Updating state
            songList.setState({musicList});
            console.log(musicList);
          };

          changeMusicList();
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