import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import MenuBar from './MenuBar.js';
import NewsFeed from './NewsFeed.js';
import LoginPage from './LoginWrapper.js'

import './qpaweb.css';

const Csapatok = () => (<p>Csapatok</p>)
const Meres = () => (<p>Meres</p>)
const Info = () => (<p>Info</p>)
const Achievementek = () => (<p>Achievementek</p>)
const Riddles = () => (<p>Riddles</p>)
const Swarm = () => (<p>Swarm</p>)

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
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
