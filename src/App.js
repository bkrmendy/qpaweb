import React, { Component } from 'react';
import MenuBar from './MenuBar.js'
import NewsFeed from './NewsFeed.js'
import styles from './qpaweb.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <canvas id="background" width="1920" height="1080" className={styles.a}>
            this aint workin buddy
          </canvas>
        </div>
        <MenuBar />
        <NewsFeed />
      </div>
      );
  }
}

export default App;
