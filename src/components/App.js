import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MenuBar from './MenuBar.js';
import NewsFeed from './NewsFeed.js';
import LoginPage from './LoginWrapper.js'
import Csapatok from './Csapatok.js'
import Meres from './Meres.js'
import Info from './Info.js'
import Achievementek from './Achievementek.js'
import Riddles from './Riddles.js'
import Swarm from './Swarm.js'

import background_image from '../img/background.jpg';
import foreground_image from '../img/background_front.png';

import '../qpaweb.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  login(){
    this.setState({loggedIn: true});
  }

  render(){
    return(
      <Router>
      <div>
      <div className="background">
      <img id="background_image" src={background_image} alt="background"/>
      </div>
      <div className="background">
      <img id="background_front_image" src={foreground_image} alt="foreground, looks really cool"/>
      </div>
      <MenuBar />

      <Route exact path="/" component={NewsFeed} />
      <Route path="/news" component={NewsFeed} />
      <Route path="/login" component={()=>(<LoginPage login={() => this.login()} />)} />
      <Route path="/csapatok" render={()=> {
        if (this.state.loggedIn === true) {
          return <Csapatok />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      <Route path="/meres" render={()=> {
        if (this.state.loggedIn === true) {
          return <Meres />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      <Route path="/info" render={()=> {
        if (this.state.loggedIn === true) {
          return <Info />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      <Route path="/achievements" render={()=> {
        if (this.state.loggedIn === true) {
          return <Achievementek />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      <Route path="/riddles" render={()=> {
        if (this.state.loggedIn === true) {
          return <Riddles />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      <Route path="/swarm" render={()=> {
        if (this.state.loggedIn === true) {
          return <Swarm />;
        }
        else {
          return <Redirect to="/login" />;
        }
      }}/>
      </div>
      </Router>
    );
  }
}

export default App;
