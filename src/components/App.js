import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MenuBar from './MenuBar.js';
import MenuOpener from './MenuOpener.js';
import NewsFeed from './NewsFeed.js';
import LoginPage from './LoginWrapper.js'
import Csapatok from './Csapatok.js'
import Meres from './Meres.js'
import Info from './Info.js'
import Achievementek from './Achievementek.js'
import Riddles from './Riddles.js'
import Swarm from './Swarm.js'
import Sponsors from './Sponsors.js'
import NewsItem from './NewsItem.js';

import background_image from '../img/background.jpg';
import foreground_image from '../img/background_front.png';

import '../qpaweb.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: true,
    }
  }

  login(){
    this.setState({loggedIn: true});
  }

  render(){
    return(
      <Router>
      <div>
      <div className="background-img">
      <img id="background_image" src={background_image} alt="background"/>
      </div>
      <div className="background-img">
      <img id="background_front_image" src={foreground_image} alt="foreground, looks really cool"/>
      </div>
      <MenuBar />
      <MenuOpener />
      <Route exact path="/" component={NewsFeed} />
      <Route path="/news" component={NewsFeed} />
      <Route path="/post/:id" component={NewsItem} />
      <Route path="/sponsors" component={Sponsors} />
      <Route path="/login" component={()=>(<LoginPage login={() => this.login()} />)} />
      <Route path="/csapatok" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Csapatok />} />)}/>
      <Route path="/csapat/:id" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Csapatok />} />)}/>
      <Route path="/meres" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Meres />} />)}/>
      <Route path="/info" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Info />} />)}/>
      <Route path="/achievements" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Achievementek />} />)}/>
      <Route path="/riddles" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Riddles />} />)}/>
      <Route path="/swarm" component={() => (<PriveteRoute loggedIn={this.state.loggedIn} component={<Swarm />} />)}/>
      </div>
      </Router>
    );
  }
}

const PriveteRoute = (props) => {
  if (props.loggedIn === true) {
    return props.component;
  }
  return <Redirect to="/login" />;
}

export default App;
