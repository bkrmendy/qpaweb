import React, { Component } from 'react';
import '../qpaweb.css'

class Post extends Component {
  render(){
    return(
      <div id="content__element" className="content__post">
        <div className="content__post-title">
          {this.props.title}
        </div>
        <div className="content__post-text">
          {this.props.text}
        </div>
        <div className="content__post-fade" />
      </div>
    );
  }
}

export default Post;
