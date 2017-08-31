import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import image from './image.png'
import './qpaweb.css'

class MenuBar extends Component {
  render(){
    return(
      <div id="menu" className="menu">
        <MenuItem title="Hírek" src={image} />
        <MenuItem title="Csapatok" src={image} />
        <MenuItem title="Mérés" src={image} />
        <MenuItem title="Infó" src={image} />
        <MenuItem title="Achievementek" src={image} />
        <MenuItem title="Riddles" src={image} />
        <MenuItem title="Swarm" src={image} />
      </div>
    );
  }
}

export default MenuBar;
