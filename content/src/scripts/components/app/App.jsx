import React, {Component} from 'react';
import {connect} from 'react-redux';
import urbanDictionary from './urbanDictionary';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkForSwears = this.checkForSwears.bind(this);
  }
  checkForSwears(phrase){
    phrase = phrase.toLowerCase();
    //regex to split by a space or a hyphen
    var count = 0;
    const phraseArr = phrase.split(/-|\s/g);
    phraseArr.forEach((word) => {
      if (urbanDictionary.includes(word)) {
        count++;
      }
    });
    if (count > 0){
      alert(`You swore ${count} time(s), hope it was worth it, potty-mouth`);
      this.props.dispatch({type: 'ADD_COUNT', swearCount: count});
    }
    count = 0;
  }

  componentDidMount() {

    //add event listeners to all inputs and textareas on a page so that when it loses focus, takes whats typed and checks for swears
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focusout', (event) => {
          if (event.target.value && this.props.isUrgent === 'false'){
            this.checkForSwears(event.target.value);
          }
        });
    }
    var textAreas = document.getElementsByTagName('textarea');
    for (var j = 0; j < textAreas.length; j++) {
        textAreas[j].addEventListener('focusout', (event) => {
          if (event.target.value && this.props.isUrgent === 'true'){
            this.checkForSwears(event.target.value);
          }
        });
    }

    //add donation amount if you are one of the donation pages

  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    isUrgent: state.isUrgent
  };
};

export default connect(mapStateToProps)(App);
