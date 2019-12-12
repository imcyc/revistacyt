import React from 'react';
import { Route, Switch, withRouter, useParams } from "react-router-dom";
import Buscador from '../Buscador/Buscador';
import Carousel from '../Carousel/Carousel';
import Container from 'react-bootstrap/Container';
import Introduccion from './Secciones/Introduccion';
import Tutorial from './Secciones/Tutorial';
import Proceso from './Secciones/Proceso';
import SideMenu from './SideMenu';
import TickerNews from '../TickerNews/TickerNews';
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

const Panel = (props) => {
    let { seccion } = useParams();
    return (
      <div className="elPanel">
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={12}>
              <SideMenu />
              <Row>
                <Col xs={6} md={6}>
                  <h1><i className="lni-arrow-right-circle" style={{fontSize: '.75em'}}></i> {seccion}</h1>
                </Col>
                <Col xs={6} md={6}>
                  <Buscador />
                </Col>
              </Row>
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
          <TickerNews />
        </Container>
        
      </div>
    );
}
 
export default withRouter(Panel);