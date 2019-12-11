import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
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
  '/images/bkg.jpg',
  '/images/bkg1.jpg',
  '/images/bkg2.jpg',
  '/images/bkg3.jpg',
  '/images/bkg4.jpg'
];

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <Carousel imagesHome={imagesHome} />
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={12}>
              <SideMenu />
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
}
 
export default withRouter(Panel);