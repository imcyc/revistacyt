import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/"><Logo style={{width: '10em'}} /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end buscador">

          <Form inline>
            <FormControl type="text" placeholder="BUSCAR CONTENIDOS" className="mr-sm-2" />
            <Button variant="outline-dark">BUSCAR</Button>
          </Form>

        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fecha">
          <h3 className="fechahora">Volumen 9 • Número 4 • Enero 2020</h3>
          <p className="fechahora">{formatDate(new Date())}</p>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default Header;