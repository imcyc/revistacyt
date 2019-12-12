import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../images/logo.svg';
import './Header.css';

const Header = (props) => {
    function formatDate(date) {
      var monthNames = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"];
      var horas = date.getHours();
      var minutos = date.getMinutes();
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return `${horas}:${minutos} | ${day} de ${monthNames[monthIndex]} de ${year}`;
    }
    const laUra = props.location.pathname;
    const panel = laUra.indexOf("panel");
    console.log(panel);
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/"><Logo style={{width: '10em'}} /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end buscador">
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fecha">
          <h3 className="fechahora" style={{color: props.location.pathname === "/panel/" ? "#999" : '#fff'}}>Volumen 9 • Número 4 • Enero 2020</h3>
          <p className="fechahora" style={{color: props.location.pathname === "/panel/" ? "#dedede" : '#fff'}}>{formatDate(new Date())}</p>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default withRouter(Header);