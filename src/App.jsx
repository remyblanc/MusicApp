import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import './styles.scss';

import Song from "./Components/Song";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render()
  {
    return (
      <main>
        <Song title="River" author="Eminem"/>
        <Song title="Walk On Water" author="Eminem"/>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"));