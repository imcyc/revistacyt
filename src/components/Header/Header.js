import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { ReactComponent as Logo } from '../../images/logo.svg';
import './Header.css';

const Header = (props) => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Logo style={{width: '10em'}} />
        </Navbar.Brand>
        {/*
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end buscador">
          <Form inline>
            <FormControl type="text" placeholder="BUSCAR CONTENIDOS" className="mr-sm-2" />
            <Button variant="outline-dark">BUSCAR</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><i class="lni-user"></i> Perfil de Usuario</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><i class="lni-exit-down"></i> Salir</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        */}
      </Navbar>
    );
}
 
export default Header;