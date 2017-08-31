import React, { Component } from 'react';
import styles from './qpaweb.css'

class MenuItem extends Component {
  render() {
    return(
      <div className="menu__element_container">
        <div id="menu__element7" className="menu__element">
          <img src={this.props.src} alt="background_image" />
          <a>{this.props.title}</a>
        </div>
      </div>
    );
  }
}

export default MenuItem;
