import React from 'react';

class AnimatedRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementsByClassName("loader")[0].style.opacity = '1';
    this.childNode.style.opacity = 0;
    this.childNode.style.transition = '1s';
    setTimeout(()=> {
      this.childNode.style.opacity = 1;
      document.getElementsByClassName("loader")[0].style.opacity = '0';
    },100);
  }

  render() {
    return (
      <div ref={(ref) => this.childNode = ref}>
        {this.props.children}
      </div>
    )
  }
}

export default AnimatedRouter;