import React, { Component } from 'react';
import MenuBar from './MenuBar.js'
import NewsFeed from './NewsFeed.js'
import './qpaweb.css'

class App extends Component {
  render() {
    return (
      <div class="background">
        <canvas id="background" width="1920" height="1080" class="a">
          this aint workin buddy
        </canvas>
      </div>
      <MenuBar>
      <NewsFeed>
    );
  }
}

export default App;
