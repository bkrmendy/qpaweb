import React, { Component } from 'react';
import Post from './Post.js'

import { getNewsItems } from '../api.js';

import '../qpaweb.css'

class NewsFeed extends Component {
  constructor(){
    super();
    this.state = {
      posts: null,
    }
    this.update = this.update.bind(this);
  }

  update(json){
    this.setState({posts: json.data});
  }

  componentDidMount(){
    getNewsItems(this.update);
  }

  render(){
    var postItems = []
    if (this.state.posts) {
      for (var i = 0; i<this.state.posts.length; i++){
        postItems.push(<Post key={i} id={this.state.posts[i].id} title={this.state.posts[i].title} text={this.state.posts[i].summary} /> )
      }
    }
    return (
      <div id="content" className="content">
        {postItems}
      </div>
    );
  }
}

export default NewsFeed;
