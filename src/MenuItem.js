import React, { Component } from 'react';
import './qpaweb.css'

class MenuItem extends Component {
  render() {
    return(
      <div className="menu__element-container">
        <div id="menu__element" className="menu__element">
          <img src={this.props.src} alt="background_image" />
          <a>{this.props.title}</a>
        </div>
      </div>
    );
  }
}

export default MenuItem;
