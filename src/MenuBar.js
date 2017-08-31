import React, { Component } from 'react';
import './qpaweb.css'
import MenuItem from './MenuItem.js'

class MenuBar extends Component {
  render(){
    return(
      <div id="menu" class="menu">
        <MenuItem title="Hírek" src="./image.png">
        <MenuItem title="Csapatok" src="./image.png">
        <MenuItem title="Mérés" src="./image.png">
        <MenuItem title="Infó" src="./image.png">
        <MenuItem title="Achievementek" src="./image.png">
        <MenuItem title="Riddles" src="./image.png">
        <MenuItem title="Swarm" src="./image.png">
      </div>
    );
  }
}
