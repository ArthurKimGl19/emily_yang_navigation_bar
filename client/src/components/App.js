import React, { Component } from 'react';
import PromoHeader from './PromoHeader.js';
import SiteHeader from './SiteHeader.js';
import MainNavigation from './MainNavigation.js';
import '../../dist/style.css';
// import '../../dist/styleSearch.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }

  }
  render() {
    return (
      <div>
        <div id="body">
          <PromoHeader />
          <div id="full-topbar">
            <SiteHeader />
            <br></br>
            <MainNavigation />
          </div>
          <br></br>
        </div>
        <div>
          {/* <img src={'./HoverSearch.png'}> </img> */}
        </div>
      </div>
    )
  }
}
