import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import image from '../img/image.png'
import '../qpaweb.css'

class MenuBar extends Component {
  render(){
    return(
      <center id="menu" className="menu">
        <MenuItem title="Hírek" src={image} to="/news"/>
        <MenuItem title="Csapatok" src={image} to="/csapatok"/>
        {/*
        <MenuItem title="Mérés" src={image} to="/meres"/>
        <MenuItem title="Infó" src={image} to="/info"/>
        <MenuItem title="Achievementek" src={image} to="/achievements"/>
        <MenuItem title="Riddles" src={image} to="/riddles"/>
        <MenuItem title="Swarm" src={image} to="/swarm"/>
        */}
        <MenuItem title="Login" src={image} to="/login"/>
      </center>
    );
  }
}

export default MenuBar;
