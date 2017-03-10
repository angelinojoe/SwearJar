import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('input', () => {
      console.log('detected!');
    })
  }

  render() {
    return null;
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
