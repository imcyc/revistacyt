import React, { Component } from 'react';
import { Route, Switch, withRouter, useParams } from "react-router-dom";
import Carousel from '../Carousel/Carousel';
import Container from 'react-bootstrap/Container';
import Introduccion from './Secciones/Introduccion';
import Tutorial from './Secciones/Tutorial';
import Proceso from './Secciones/Proceso';
import SideMenu from './SideMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Panel.css';

const imagesHome = [
  `${process.env.PUBLIC_URL}/images/bkg.jpg`,
  `${process.env.PUBLIC_URL}/images/bkg1.jpg`,
  `${process.env.PUBLIC_URL}/images/bkg2.jpg`,
  `${process.env.PUBLIC_URL}/images/bkg3.jpg`,
  `${process.env.PUBLIC_URL}/images/bkg4.jpg`
];

const Panel = () => {
    let { seccion } = useParams();
    return (
      <div className="elPanel">
        <Carousel imagesHome={imagesHome} />
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={12}>
              <SideMenu />
              <h1>{seccion}</h1>
              <div className="contenido">
                <Switch>
                  <Route 
                    exact 
                    path="/panel/introduccion" 
                    component={(props) => <Introduccion 
                      {...props} 
                    />}
                  />
                  <Route 
                    exact 
                    path="/panel/tutorial" 
                    component={(props) => <Tutorial 
                      {...props} 
                    />}
                  />
                  <Route 
                    exact 
                    path="/panel/proceso" 
                    component={(props) => <Proceso 
                      {...props} 
                    />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default withRouter(Panel);