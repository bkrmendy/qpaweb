import React, { Component } from 'react';
import Comment from './Comment.js';
import '../qpaweb.css';

class NewsItem extends Component {
  render(){
    return(
      <div id="content__news" className="content__news">
        <div className="content__news-title">
          {this.props.title}
        </div>
        <div className="content__news-text">
          {this.props.text}
        </div>
        /* <Comment className="content__post-fade" /> */
      </div>
    );
  }
}

export default NewsItem;
