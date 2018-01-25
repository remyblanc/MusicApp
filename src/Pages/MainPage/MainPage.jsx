import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import LangList from "../../Langs/LangList";

import AnimatedRouter from "../../Components/AnimatedRouter/AnimatedRouter";
import Search from "../../Components/Search/Search";
import Playlist from "../../Components/Playlist/Playlist";

const NotLogged = styled.div`
  text-align:center;
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  width: 690px;
  transition: 0.3s;
  
  p {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.store.user.activePlaylist.musicList.length > 0) {
      document.getElementsByClassName('not-logged')[0].style.opacity = 0;
    } else {
      document.getElementsByClassName('not-logged')[0].style.opacity = 1;
    }
  }

  render() {
    return (
      <AnimatedRouter>
        <Playlist />
        {/*{this.props.store.user.activePlaylist.musicList.length > 0 ?*/}
          {/*<div />*/}
          {/*:*/}
          <NotLogged className="not-logged">
            <p>{LangList.En.MainDesc}</p>
            <Search />
          </NotLogged>
        // }
      </AnimatedRouter>
    );
  }

}

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(MainPage);