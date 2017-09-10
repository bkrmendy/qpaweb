import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../img/image.png';
import '../qpaweb.css';

class MenuBar extends Component {
  render(){

    return(
      <center id="menu" className="menu">
        <MenuItem title="Hírek" src={image} to="/news"/>
        <MenuItem title="Csapatok" src={image} to="/csapatok"/>
        <MenuItem title="Szponzorok" src={image} to="/sponsors"/>
        {/*
        <MenuItem title="Mérés" src={image} to="/meres"/>
        <MenuItem title="Infó" src={image} to="/info"/>
        <MenuItem title="Achievementek" src={image} to="/achievements"/>
        <MenuItem title="Riddles" src={image} to="/riddles"/>
        <MenuItem title="Swarm" src={image} to="/swarm"/>
        */}
        {
          (this.props.loggedIn === true) ?
          <MenuItem title="Profil" src={image} to="/me"/>
        :
          <MenuItem title="Login" src={image} to="/login"/>
        }
      </center>
    );
  }
}

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
          <h2>{this.props.title}</h2>
        </div>
      </div>
      </Link>
    );
  }
}

export default MenuBar;
