import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <main>

      </main>
    )
  }
}

App.PropTypes = {};

ReactDom.render(<App />, document.getElementById("root"));