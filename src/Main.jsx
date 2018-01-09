import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.scss';

import MainPage from "./Pages/MainPage/MainPage";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";

function Main(props) {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/pl" component={PlaylistPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDom.render(<Main />, document.getElementById("root"));