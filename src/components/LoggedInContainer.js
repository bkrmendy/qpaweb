import React, { Component } from 'react';

export default class LoggedInContainer extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    }
  }
  render(){
    if (this.state.isLoggedIn) {
      return this.props.children;
    }
    return null;
  }
}
