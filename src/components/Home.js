import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from './Carousel/Carousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Home.css';
const imagesHome = [
  '/images/bkg.jpg',
  '/images/bkg1.jpg',
  '/images/bkg2.jpg',
  '/images/bkg3.jpg',
  '/images/bkg4.jpg'
];
const seccionTotal = [
  {
    seccion: "portada",
    intro: "Centro Rey Abdulaziz para la Cultura Mundial (Ithra), un potencial cultural del Golfo."
  },
  {
    seccion: "editorial",
    intro: "Cinco 'rocas' unidas internamente para formar un solo edificio."
  },
  {
    seccion: "buzón",
    intro: "Nuevos Comentarios realizados por nuestro público lector."
  },
  {
    seccion: "noticias",
    intro: "Propuesta para simplificar y homologar permisos de construcción."
  },
  {
    seccion: "posibilidades del concreto",
    intro: "Controles de calidad en la construcción en obras."
  },
  {
    seccion: "internacional",
    intro: "Torre Generali, un elemento futurista retorcido."
  },
  {
    seccion: "estados",
    intro: "Centro de BioIngeniería, construyendo para el futuro."
  }
]
class Home extends Component {
  render() {
    return ( 
      <div className="App-header">
        <Carousel imagesHome={imagesHome} />
        <Link to="/panel/portada"><h1>Ithra</h1></Link>
        <Link to="/panel/portada"><h2>Centro Rey Abdulaziz para la Cultura Mundial</h2></Link>
        <Link to="/panel/portada"><h3>ENERO 2020</h3></Link>
        <ItemCarousel seccionTotal={seccionTotal} />
      </div>
    );
  }
}
 
export default Home;