import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import LangList from "../../Langs/LangList";

import Search from "../../Components/Search/Search";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    return (
      <div>
        {console.log(this.props.store.user)}
        {this.props.store.user.login ?
          <div>sda</div>
          :
          <NotLogged>
            <p>{LangList.En.MainDesc}</p>
            <Search />
          </NotLogged>
        }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(MainPage);