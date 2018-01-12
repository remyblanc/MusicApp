import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { theme, macbook, mobile } from './lib/theme';
import './styles.scss';

import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";

import MainPage from "./Pages/MainPage/MainPage";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";

const BasicApp = ({ className }) => {
  return(
    <div {...{ className}}>
      <Menu />
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

const App = styled(BasicApp)`
  margin-left: 109px;
  min-height: 100vh;
  ${macbook(`
    color: red;
  `)}
`;

BasicApp.propTypes = {
  className: PropTypes.string,
};

export default App;