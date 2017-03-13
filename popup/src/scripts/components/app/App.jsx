import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
  super();
  this.state = {
    payClicked: 'false'
  };
  this.unicef = 'https://www.unicefusa.org/donate/help-save-childrens-lives/29161?ms=ref_dig_2015_web_header_donate';
  this.aspca = 'https://secure.aspca.org/donate/donate?ms=wb_top_homepage-donate&initialms=wb_top_homepage-donate&pcode=WEBMEMBER&lpcode=WEBGUARD';
  this.onUrgentClick = this.onUrgentClick.bind(this);
  this.onPayClick = this.onPayClick.bind(this);
  this.onImageClick = this.onImageClick.bind(this);
}
  onUrgentClick(event){
    this.props.dispatch({type: 'TOGGLE_URGENT', isUrgent: event.target.value});
  }

  onPayClick(){
    this.setState({payClicked: 'true'});
  }

  onImageClick(charity){
    if (charity === 'aspca'){
      chrome.tabs.create({active: true, url: this.aspca});
    }
    else{
      chrome.tabs.create({active: true, url: this.unicef});
    }
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
        <img src={image} width="200" />
        <button onClick={this.onPayClick} id="payUp">Pay Up $$$</button><br />
        {this.state.payClicked === 'true' ?
          <div>
            <p>Select a Charity:</p>
            <img src="aspca.png" width="95" onClick={() => this.onImageClick("aspca")} />
            <img src="unicef.png" width="95" onClick={() => this.onImageClick("unicef" )} />
          </div>
        : null}
        {this.props.isUrgent === 'false' ?
        (<button onClick={this.onUrgentClick} value="true" id="urgent">It's Urgent!</button>)
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
