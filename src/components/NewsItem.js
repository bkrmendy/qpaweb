import React, { Component } from 'react';
import { getCommentsForNewsItem, getNewsItem } from '../api.js';
import '../qpaweb.css';

class NewsItem extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      comment: "",
      comments: null,

    }
  }

  componentDidMount = () => {
    var id = this.props.match.params.id;
    getCommentsForNewsItem(id, this.getComments);
    getNewsItem(id, this.getData);
  }


  getData = (json) => {
    this.setState({...this.state, title: json.title, comment: json.text});
  }

  getComments = (json) => {
    this.setState({...this.state, comments: json.data});

  }

  render(){
    var comments = [];
    if (this.state.comments){
      for (var i = 0; i<this.state.comments.length; i++) {
        var name = this.state.comments[i].user_name;
        var comment = this.state.comments[i].comment;
        comments.push(<Comment className="content__post-fade" key={i} username={name} comment={comment} />);
      }
    }
    return(
      <div id="content__news" className="content">
      <div className="content__news-title">
      <h2>{this.state.title}</h2>
      </div>
      <div className="content__news-text">
      <h4>{this.state.comment}</h4>
      </div>
      <div id="comments">
      {comments}
      </div>
      </div>
    );
  }
}

const Comment = (props) => {
    return(
      <div id="content__news-comment" className="content__news-comment">
        <div className="content__news-title">
          <h2>{props.username}</h2>
        </div>
        <div className="content__news-text">
          <h4>{props.comment}</h4>
        </div>
      </div>
    );
}

export default NewsItem;
