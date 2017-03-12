import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
  super();
  this.onUrgentClick = this.onUrgentClick.bind(this);
}
  onUrgentClick(event){
    this.props.dispatch({type: 'TOGGLE_URGENT', isUrgent: event.target.value});
  }
  render() {
    var image;
    //create custom progress bar by rendering different images based on how much is in 'jar'
    if (this.props.swearCount === 0){
      image = 'jar-0.jpeg';
    }
    else if (this.props.swearCount > 0 && this.props.swearCount <= 5){
      image = 'jar-25.jpeg';
    }
    else if (this.props.swearCount > 5 && this.props.swearCount <= 10){
      image = 'jar-50.jpeg';
    }
    else if (this.props.swearCount > 10 && this.props.swearCount <= 15){
      image = 'jar-75.jpeg';
    }
    else {
      image = 'jar-100.jpeg';
    }
    return (
      <div>
        <div id="cussCount">Cuss Count: ${this.props.swearCount}</div>
        <img src={image} width='200' />
        <button id="payUp">Pay Up $$$</button><br />
        {this.props.isUrgent === 'false' ?
        (<button onClick={this.onUrgentClick} value="true" id="urgent">It's F*#%ing Urgent!</button>)
        : (<button onClick={this.onUrgentClick} value="false" id="notUrgent">I'm Ready To Behave</button>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    swearCount: state.swearCount,
    isUrgent: state.isUrgent
  };
};

export default connect(mapStateToProps)(App);
