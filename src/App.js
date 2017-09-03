import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuBar from './MenuBar.js';
import NewsFeed from './NewsFeed.js';

import './qpaweb.css';

const Hirek = () =>  (<NewsFeed />)
const Csapatok = () => (<p>Csapatok</p>)
const Meres = () => (<p>Meres</p>)
const Info = () => (<p>Info</p>)
const Achievementek = () => (<p>Achievementek</p>)
const Riddles = () => (<p>Riddles</p>)
const Swarm = () => (<p>Swarm</p>)

const App = () => (
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
      <Route path="/csapatok" component={Csapatok} />
      <Route path="/meres" component={Meres} />
      <Route path="/info" component={Info} />
      <Route path="/achievements" component={Achievementek} />
      <Route path="/riddles" component={Riddles} />
      <Route path="/swarm" component={Swarm} />
    </div>
  </Router>
)

export default App;
