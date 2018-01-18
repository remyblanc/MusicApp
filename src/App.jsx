import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './lib/store';
import styled from 'styled-components';

import {theme, macbook, mobile, gradient} from './lib/theme';
import './styles.scss';

import loader from "./lib/loader.svg";

import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";

import MainPage from "./Pages/MainPage/MainPage";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

const BasicApp = ({ className }) => {
  return(
    <div {...{ className}}>
      <ConnectedRouter history={history}>
        <div>
          <Menu />
          <Header />
          <img className="loader" alt="" src={loader} />
          <Route exact path="/" component={MainPage} />
          <Route path="/pl" component={PlaylistPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </ConnectedRouter>
    </div>
  );
};

const App = styled(BasicApp)`
  margin-left: 109px;
  min-height: 100vh;
  ${gradient('radial', '',theme.colors.bgColorLighter, theme.colors.bgColorDarker)}
  ${macbook(`
    color: red;
  `)}
`;

export default App;