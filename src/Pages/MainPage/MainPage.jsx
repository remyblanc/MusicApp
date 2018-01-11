import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
import En from "../../Langs/En";

import Search from "../../Components/Search/Search";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  render() {

    const NotLogged = styled.div`
      text-align:center;
      position:absolute;
      top: 45%;
      left: 0px;
      right: 0px;
      margin: auto;
      width:690px;
      
      p {
        font-size: 22px;
        line-height: 1.5;
        margin-bottom: 15px;
      }
    `;

    return (
      <div>
        {this.state.user ?
          <div>sda</div>
          :
          <NotLogged>
            <p>{En.MainDesc}</p>
            <Search />
          </NotLogged>
        }
      </div>
    );
  }

}

// Song.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired
// };

export default MainPage;