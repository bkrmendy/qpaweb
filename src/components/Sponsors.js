import React, { Component } from 'react';
import '../qpaweb.css';
import image from '../img/image.png';

export default class Sponsors extends Component {
  render(){
    return(
      <div id="sponsors" className="content">
        <div id="content__sponsors" className="content__sponsors">
          <div id="tier0" className="content__sponsors-tier big">Főtámogató</div>
          <div id="sp0" className="content__sponsors-item big"><img src={image}/></div>
          <div id="tier1" className="content__sponsors-tier medium">Kiemelt támogatók</div>
          <div id="sp1" className="content__sponsors-item medium"><img src="image.png"/></div>
          <div id="sp2" className="content__sponsors-item medium"><img src="image.png"/></div>
          <div id="sp3" className="content__sponsors-item medium"><img src="image.png"/></div>
          <div id="sp4" className="content__sponsors-item medium"><img src="image.png"/></div>
          <div id="tier2" className="content__sponsors-tier small">Támogatók</div>
          <div id="sp5" className="content__sponsors-item small"><img src="image.png"/></div>
          <div id="sp6" className="content__sponsors-item small"><img src="image.png"/></div>
          <div id="sp7" className="content__sponsors-item small"><img src="image.png"/></div>
          <div id="tier2" className="content__sponsors-tier small">Partnerek</div>
          <div id="sp5" className="content__sponsors-item small"><img src="image.png"/></div>
          <div id="sp6" className="content__sponsors-item small"><img src="image.png"/></div>
        </div>
      </div>
    );
  }
}
