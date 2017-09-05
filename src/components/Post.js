import React, { Component } from 'react';
import '../qpaweb.css'

class Post extends Component {
  render(){
    return(
      <div id="content__element" className="content__element">
        <div className="content__element-title">
          {this.props.title}
        </div>
        <div className="content__element-text">
          {this.props.text}
        </div>
        <div className="content__element-fade" />
      </div>
    );
  }
}

export default Post;
