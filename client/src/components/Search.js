import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      moused: false
    }
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);

  }

  mouseOut() {
    this.setState({ moused: false });
  }

  mouseOver() {
    this.setState({ moused: true });
  }

  render() {
    return (
      <span className="search-container">
        <span onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
          {this.state.moused ? <img src={'./HoverSearch.png'}></img> : <img src={'./Search.png'}></img>}
        </span>
        <span>
          <form action="/action_page.php">
            <input type="text" placeholder="search" className="search"></input>
          </form>
        </span>
      </span>
    )
  }
}