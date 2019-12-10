import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from './Carousel/Carousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
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
        <Link to="/panel"><h1>(Ithra),</h1></Link>
        <Link to="/panel"><h2>Centro Rey Abdulaziz para la Cultura Mundial</h2></Link>
        <Link to="/panel"><h3>ENERO 2020</h3></Link>
        <ItemCarousel />
      </div>
    );
  }
}
 
export default Home;