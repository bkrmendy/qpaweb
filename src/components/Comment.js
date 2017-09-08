import React, { Component } from 'react';
import '../qpaweb.css'

class Comment extends Component {
  render(){
    return(
      <div id="content__news-comment" className="content__news-comment">
        <div className="content__news-title">
          <h2>{this.props.username}</h2>
        </div>
        <div className="content__news-text">
          <h4>{this.props.comment}</h4>
        </div>
      </div>
    );
  }
}

export default Comment;
