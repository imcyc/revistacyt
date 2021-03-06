import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useParams } from "react-router-dom";
import LineIcon from 'react-lineicons';
import Buscador from '../Buscador/Buscador';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Introduccion from './Secciones/Introduccion';
import Tutorial from './Secciones/Tutorial';
import Proceso from './Secciones/Proceso';
import SideMenu from './SideMenu';
import TickerNews from '../TickerNews/TickerNews';
import CardArticulo from '../Cards/CardArticulo';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import ItemCarouselContenido from '../ItemCarousel/ItemCarouselContenido';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Panel.css';

function Panel(props) {
    const [data, setData] = useState([]);
    let { seccion } = useParams();
    useEffect(() => {
      async function fetchData() {
        axios.get('https://newsapi.org/v2/everything?q=construction&from=2019-12-11&to=2019-12-11&sortBy=popularity&apiKey=d6e94ae6348c44ab9b20c475613aae01')
        .then((response) => {
          setData(response.data.articles);
        });
      }
      fetchData();
    }, []);
    
    return (
      <div className="elPanel">
        <Container fluid={true}>
          <Row>
            <Col xs={12} md={12}>
              <SideMenu />
              <Row>
                <Col xs={6} md={6}>
                  <h1><i class="lni-chevron-right" style={{fontSize: '.75em'}}></i> {seccion}</h1>
                </Col>
                <Col xs={6} md={6}>
                  <Buscador />
                </Col>
              </Row>
              <TickerNews title={data.map(item => (item.title))} />
              <div className="contenido">
                <Row className="tickerCarou">
                  <Col xs={12} md={12}>
                    <ItemCarousel/>
                  </Col>
                </Row>
                <Row style={{height: '100%', overflow: 'hidden', padding: '10px'}}>
                  <ItemCarouselContenido />
                </Row>
                {/*
                <Row style={{height: '100%', overflow: 'hidden', padding: '10px'}}>
                {data.map(item => (
                  <Col xs={12} sm={4} md={4} lg={3}>
                    <CardArticulo key={item.author} title={item.title} description={item.description} urlToImage={item.urlToImage} />
                  </Col>
                ))}
                </Row>
                */}
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