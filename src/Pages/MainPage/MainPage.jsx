import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import LangList from "../../Langs/LangList";

import AnimatedRouter from "../../Components/AnimatedRouter/AnimatedRouter";
import Search from "../../Components/Search/Search";

const NotLogged = styled.div`
  text-align:center;
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  right: 0px;
  margin: auto;
  width:690px;
  
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

  render() {


    return (
      <AnimatedRouter>
        {this.props.store.user.login ?
          <div>sda</div>
          :
          <NotLogged>
            <p>{LangList.En.MainDesc}</p>
            <Search />
          </NotLogged>
        }
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