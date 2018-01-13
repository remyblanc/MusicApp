import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { theme, macbook, mobile } from './lib/theme';
import './styles.scss';

import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";

import MainPage from "./Pages/MainPage/MainPage";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

const BasicApp = ({ className }) => {
  return(
    <div {...{ className}}>
      <BrowserRouter>
        <div>
          <Menu />
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route path="/pl" component={PlaylistPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

const App = styled(BasicApp)`
  margin-left: 109px;
  min-height: 100vh;
  ${macbook(`
    color: red;
  `)}
`;

export default App;