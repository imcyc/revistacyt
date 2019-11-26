import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import Carousel from './Carousel/Carousel';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <div className="App">
        <Carousel />
        <header className="App-header">
          <div className="wrapper fadeInDown" style={{zIndex: '10'}}>
            
          </div>
        </header>
      </div>
    );
  }
}
 
export default Home;