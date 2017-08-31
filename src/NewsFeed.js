import React, { Component } from 'react';
import './qpaweb.css'
import Post from './post.js'

class NewsFeed extends Component {
  constructor(){
    super();
    this.state = {
      posts: null,
    }
  }

  componentDidMount(){
    fetch('url.to/api')
    .then(response => response.json())
    .then(json => {
        this.setState({ jsonReturnedValue });
      });
  }

  render(){
    postItems = []
    for (var i = 0; i<posts.length; i++){
      postItems.push(<Post title={posts[i].title} text={posts[i].text} )
    }
    return postItems;
  }
}
