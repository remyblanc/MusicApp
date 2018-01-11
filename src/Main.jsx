import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { theme, macbook, mobile } from '../lib/theme';
import './styles.scss';

import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import { Link } from 'react-router-dom';

import MainPage from "./Pages/MainPage/MainPage";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";

const App = ({ className }) => {
  return(
    <div {...{ className}}>
      <Menu/>
      <Header />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route path="/pl" component={PlaylistPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

const StyledApp = styled(App)`
  margin-left: 109px;
  background: rgba(1,1,1,0.3);
  ${macbook(`
    color: red;
  `)}
`;

App.propTypes = {
  className: PropTypes.string,
};

ReactDom.render(<StyledApp />, document.getElementById("root"));