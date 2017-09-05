import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../qpaweb.css'

class MenuItem extends Component {
  render() {
    return(
      <Link to={this.props.to}>
      <div className="menu__element-container">
        <div id="menu__element" className="menu__element">
          <img src={this.props.src} alt="background_image" />
          <a>{this.props.title}</a>
        </div>
      </div>
      </Link>
    );
  }
}

export default MenuItem;
