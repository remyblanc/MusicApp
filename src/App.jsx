import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import './styles.scss';

import SongList from "./Components/SongList/SongList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
    }
  }

  render()
  {
    return (
      <main>
        <SongList/>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"));