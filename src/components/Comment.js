import React, { Component } from 'react';
import '../qpaweb.css'

class Comment extends Component {
  render(){
    return(
      <div id="content__news-comment" className="content__news-comment">
        <div className="content__news-title">
          {this.data.user_name}
        </div>
        <div className="content__news-text">
          {this.data.comment}
        </div>
      </div>
    );
  }
}

export default Comment;
