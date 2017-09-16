import React, { Component } from 'react';

import '../qpaweb.css';

export default class Profile extends Component {
  constructor(){
    super();
    this.state = {
      editing: false,
      name: null,
      nick: null,
    }
  }

  componentDidMount = () => {
    var userName = this.props.userInfo.name;
    var nickName = this.props.userInfo.nickName;
    this.setState({...this.state, 
      name: userName,
      nick: nickName,
    });
  }

  submitUpdate = () => {
    //SEND POST REQUEST HERE
  }

  nameChange = (event) => {
    this.setState({...this.state, name: event.value});
    event.preventDefault();
  }

  nickChange = (event) => {
    this.setState({...this.state, nick: event.value});
    event.preventDefault();
  }

  startEditing = () => {
    var prevState = this.state.editing;
    this.setState({...this.state, editing: !prevState});
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="content">
        <button value="Edit Info" onClick={this.startEditing} />
        {this.state.editing ? 
        <div>
          <h1>{this.props.userInfo.name}</h1>
          <h2>{this.props.userInfo.nickName}</h2>
        </div>
        :
        <div>
          <form submit={this.submitUpdate}>
            <label value="Név:" />
            <input type="text" value={this.props.userInfo.name} onChange={this.nameChange} />
            <label value="Nicknév:" />
            <input type="text" value={this.props.userInfo.nickName} onChange={this.nickChange} />
            <button type="submit" value="submit" />
          </form>
        </div>
      }
    </div>
  );
  }
}