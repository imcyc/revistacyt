import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        <Link to="/panel"><h3>CONSTRUCCIÓN Y TECNOLOGÍA EN CONCRETO</h3></Link>
        <Link to="/panel"><h1>El Puente HKZB,<br/>Alta ingeniería en tiempos modernos</h1></Link>
        <Link to="/panel"><h3>OCTUBRE 2019</h3></Link>
      </div>
    );
  }
}
 
export default Home;