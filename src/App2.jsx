import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

//import './styles.scss';

import SongList from "./Components/SongList/SongList";
import SongPlayer from "./Components/SongPlayer/SongPlayer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      musicList: [],
      playingSong: {}
    };

    this.handleGotDrag = this.handleGotDrag.bind(this);
    this.handlePlaySong = this.handlePlaySong.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3000/api/list')
      .then(response => response.data)
      .then(musicList => this.setState({ musicList }))
      .catch(error => console.error(error.message));
  }

  handlePlaySong(songID) {
    let songList = this,
        musicList = songList.state.musicList,
        songFullTitle;

    musicList.filter((song) => {
      if (song.songID === songID) {
        this.setState({ playingSong: song});
      }
    });
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
      songIndexAfterMove = songIndex,
      songList = this,
      moved, rounded, prevRounded = 0,
      musicList = songList.state.musicList,
      ch = false;

    //Fixing floating title, author etc
    if (song.className.indexOf('song-block') === -1) {
      let parent = obj.target;

      while (parent.className.indexOf('song-block') !== 0) {
        parent = parent.parentNode;
      }

      song = parent;
    }

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

      moved = (y - startY) / 61;
      rounded = Math.round(moved);

      if (rounded !== prevRounded) {
        ch = false;
      }

      //Moving other songs
      if (y > startY-35) {
        if (rounded > 0) {
          document.getElementsByClassName('song-block')[rounded+songIndex].style.transform = `translate3d(0px, -61px, 0px)`;

          if (ch === false) {
            //Changing position in state array
            [musicList[songIndexAfterMove], musicList[songIndexAfterMove + 1]] = [musicList[songIndexAfterMove + 1], musicList[songIndexAfterMove]];

            prevRounded = rounded;
            songIndexAfterMove++;
            ch = true;
          }
        }
      }
      if (y < startY+35) {
        if (rounded < 0) {
          document.getElementsByClassName('song-block')[rounded+songIndex].style.transform = `translate3d(0px, 61px, 0px)`;
          if (ch === false) {
            //Changing position in state array
            [musicList[songIndexAfterMove], musicList[songIndexAfterMove - 1]] = [musicList[songIndexAfterMove - 1], musicList[songIndexAfterMove]];

            prevRounded = rounded;
            songIndexAfterMove--;
            ch = true;
          }
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

          songList.setState({musicList});
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
      <main>
        <SongPlayer
          playingSong={this.state.playingSong}
        />
        <SongList
          musicList={this.state.musicList}
          playSong={this.handlePlaySong}
          gotDrag={this.handleGotDrag}
        />
      </main>
    )
  }
}

export default App;
//ReactDom.render(<App />, document.getElementById("root"));