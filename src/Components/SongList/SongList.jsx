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
    let startX = obj.pageX || obj.originalEvent.touches[0].pageX,
        currentPos = obj.target.style.transform,
        x = 0;

    console.log(obj.target);

    currentPos ? currentPos = parseInt(currentPos.replace(/[^-0-9]/g,'')) : currentPos = 0;

    window.onmousemove = function(e)
    {
      x = e.pageX || e.originalEvent.touches[0].pageX;
      console.log(obj.target);
      // obj.target.style.transform = `translateX(${currentPos-(startX-x)}px)`;

      //document.getElementById("slide-list").style.transition = "0s";
      //document.getElementById("slide-list").style.transform = `translateX(${currentPos-(startX-x)}px)`;

      // window.onmouseup = function(e)
      // {
      //   window.onmousemove = null;
      //   document.getElementById("slide-list").style.transition = "0.5s";
      //
      //   if (startX-20 > x)
      //   {
      //     props.changeSlide("next")
      //     window.onmouseup = null;
      //   } else if (startX < x-20)
      //   {
      //     props.changeSlide("prev")
      //     window.onmouseup = null;
      //   }
      //   else
      //   {
      //     props.changeSlide(props.activeSlide+1)
      //     window.onmouseup = null;
      //   }
      // }
    };

    window.onmouseup = function(e)
    {
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