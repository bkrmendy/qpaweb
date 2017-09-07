import React, { Component } from 'react';
import '../qpaweb.css';
import bosch from '../img/bosch.png';
import ericsson from '../img/erics.png';
import eset from '../img/eset.png';
import national from '../img/natins.png';
import scinet from '../img/scinet.png';
import schlogo from '../img/schlogo.png';
import vikhk from '../img/vikhk.png';
import isk from '../img/isk.png';
import scis from '../img/schis.png';


export default class Sponsors extends Component {
  render(){
    return(
      <div id="sponsors" className="content">
        <div id="content__sponsors" className="content__sponsors">
          <div id="tier0" className="content__sponsors-tier big">Főtámogató</div>
          <div id="sp0" className="content__sponsors-item big"><img src={bosch} alt="sponsor-logo"/></div>
          <div id="tier1" className="content__sponsors-tier medium">Kiemelt támogatók</div>
          <div id="sp1" className="content__sponsors-item medium"><img src={ericsson} alt="sponsor-logo"/></div>
          <div id="sp2" className="content__sponsors-item medium"><img src={national} alt="sponsor-logo"/></div>
          <div id="sp3" className="content__sponsors-item medium"><img src={scis} alt="sponsor-logo"/></div>
          <div id="tier2" className="content__sponsors-tier small">Támogatók</div>
          <div id="sp5" className="content__sponsors-item small"><img src={schlogo} alt="sponsor-logo"/></div>
          <div id="sp6" className="content__sponsors-item small"><img src={vikhk} alt="sponsor-logo"/></div>
          <div id="tier2" className="content__sponsors-tier small">Partnerek</div>
          <div id="sp5" className="content__sponsors-item small"><img src={isk} alt="sponsor-logo"/></div>
          <div id="sp6" className="content__sponsors-item small"><img src={scinet} alt="sponsor-logo"/></div>
        </div>
      </div>
    );
  }
}
