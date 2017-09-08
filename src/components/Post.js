import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../qpaweb.css'

class Post extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  /*
  clickHandle(e) {
		if(!e.currentTarget.classList.contains("opened")){
      let classes = e.currentTarget.className.split(' ');
  		let height_of_item = parseInt(window.getComputedStyle(e.currentTarget).height, 10);
  		let text_of_item = e.currentTarget.children[1];
  		let height_of_text = parseInt(window.getComputedStyle(text_of_item).height, 10);
  		let new_height = height_of_item + height_of_text;
			e.currentTarget.classList.add("opened");
			e.currentTarget.style.maxHeight = `${new_height}px`;
		}
		else if(e.currentTarget.classList.contains("opened")){
			e.currentTarget.classList.remove("opened");
			e.currentTarget.style.maxHeight = '100px';
		}
  }
  */

  handleClick(){
    let id = this.props.id;
    this.props.history.push('/post/'+id);
  }

  render(){
    return(
      <div id="content__element" className="content__post" onClick={this.handleClick}>
        <div className="content__post-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="content__post-text">
          <h4>{this.props.text}</h4>
        </div>
        <div className="content__post-fade" />
      </div>
    );
  }
}

export default withRouter(Post);
