import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {

  render() {

    return (
      <div>
        <div>Cuss Count: </div>
        <div>Pay Up $$$</div>
        <div>It's F*#%ing Urgent!</div>
      </div>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
