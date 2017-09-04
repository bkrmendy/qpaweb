import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import MenuBar from './MenuBar.js';
import NewsFeed from './NewsFeed.js';
import LoginPage from './LoginWrapper.js'
import Csapatok from './Csapatok.js'
import Meres from './Meres.js'
import Info from './Info.js'
import Achievementek from './Achievementek.js'
import Riddles from './Riddles.js'
import Swarm from './Swarm.js'

import { createStore } from 'redux'

import './qpaweb.css';

//let store = createStore(App);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }
  render(){
    return(
      <Router>
      <div>
      <div className="background">
      <canvas id="background" width="1920" height="1080" className="a">
      this aint workin buddy
      </canvas>
      </div>
      <MenuBar />

      <Route exact path="/" component={NewsFeed} />
      <Route path="/news" component={NewsFeed} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/csapatok" component={Csapatok} />
      <PrivateRoute path="/meres" component={Meres} />
      <PrivateRoute path="/info" component={Info} />
      <PrivateRoute path="/achievements" component={Achievementek} />
      <PrivateRoute path="/riddles" component={Riddles} />
      <PrivateRoute path="/swarm" component={Swarm} />
      </div>
      </Router>
    );
  }
}

export default App;
