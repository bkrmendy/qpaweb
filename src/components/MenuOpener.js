import React, { Component } from 'react';
import '../qpaweb.css'

class MenuOpener extends Component {
  handleClick(e) {
    document.getElementById('menu').classList.add('opened');
  }

  render() {
    return(
      <div id="menu__opener" className="menu__opener" onClick={this.handleClick}>
        <h2>MENU</h2>
      </div>
    );
  }
}

export default MenuOpener;
