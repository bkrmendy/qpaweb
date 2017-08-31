import React, { Component } from 'react';
import './qpaweb.css'

class MenuItem extends Component {
  render() {
    return(
      <div class="menu__element-container">
        <div id="menu__element7" class="menu__element">
          <img src={this.props.src}>
          <a>{this.props.title}</a>
        </div>
      </div>
    )
  }
}
