import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../qpaweb.css'

class MenuItem extends Component {
  handleClick(e) {
    document.getElementById('menu').classList.remove('opened');
  }

  render() {
    return(
      <Link to={this.props.to}>
      <div className="menu__element-container" onClick={this.handleClick}>
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
