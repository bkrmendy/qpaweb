import React, { Component } from 'react';
import './qpaweb.css'

class Post extends Component {
  render(){
    return(
      <div class="content__element-fade"></div>
      </div>
      <div id="content__element2" class="content__element">
      <div class="content__element-title">{this.props.title}</div>
      <div class="content__element-text">{this.props.text}</div>
    )
  }
}
