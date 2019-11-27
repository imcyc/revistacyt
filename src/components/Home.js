import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <div className="App-header">
        <Carousel />
        <h1>CONSTRUCCIÓN Y TECNOLOGÍA EN CONCRETO</h1>
        <h3>Instituto Mexicano del Cemento y del Concreto A.C.</h3>
      </div>
    );
  }
}
 
export default Home;