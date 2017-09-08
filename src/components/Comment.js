import React, { Component } from 'react';
import '../qpaweb.css'

class Comment extends Component {
  render(){
    return(
      <div id="content__news-comment" className="content__news-comment">
        <div className="content__news-title">
          <h2>{this.data.user_name}</h2>
        </div>
        <div className="content__news-text">
          <h4>{this.data.comment}</h4>
        </div>
      </div>
    );
  }
}

export default Comment;
