import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div>
        <div id="cussCount">Cuss Count: {this.props.swearCount}</div>
        <button id="payUp">Pay Up $$$</button><br />
        <button id="urgent">It's F*#%ing Urgent!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    swearCount: state.swearCount
  };
};

export default connect(mapStateToProps)(App);
