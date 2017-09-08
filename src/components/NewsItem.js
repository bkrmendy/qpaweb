import React, { Component } from 'react';
import Comment from './Comment.js';
import '../qpaweb.css';

class NewsItem extends Component {
  render(){
    return(
      <div id="content__news" className="content__news">
        <div className="content__news-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="content__news-text">
          <h4>{this.props.text}</h4>
        </div>
        /* <Comment className="content__post-fade" /> */
      </div>
    );
  }
}

export default NewsItem;
