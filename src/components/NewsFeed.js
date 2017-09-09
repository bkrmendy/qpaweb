import React, { Component } from 'react';

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

  onClick = (id) => {
    this.props.history.push('/post/'+id);
  }

  render(){
    var postItems = []
    if (this.state.posts) {
      for (var i = 0; i<this.state.posts.length; i++){
        postItems.push(
          <Post
          key={i}
          id={this.state.posts[i].id}
          title={this.state.posts[i].title}
          text={this.state.posts[i].summary}
          onClick={this.onClick} /> )
      }
    }
    return (
      <div id="content" className="content">
        {postItems}
      </div>
    );
  }
}

const Post = (props) => {
  return(
    <div id="content__element" className="content__post" onClick={() => props.onClick(props.id)}>
      <div className="content__post-title">
        <h2>{props.title}</h2>
      </div>
      <div className="content__post-text">
        <h4>{props.text}</h4>
      </div>
      <div className="content__post-fade" />
    </div>
  );
}

export default NewsFeed;
