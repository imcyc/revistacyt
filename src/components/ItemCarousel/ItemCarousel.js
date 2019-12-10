import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';

class ItemCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      setActiveItemIndex: 0
    }
  }
  render() {
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
    return (
      <div className="wrapsecciones">
        <ItemsCarousel
          infiniteLoop={false}
          gutter={12}
          activePosition={'center'}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={4}
          slidesToScroll={1}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value => this.setState({ activeItemIndex: value })}
          rightChevron={<i className="lni-angle-double-right"></i>}
          leftChevron={<i className="lni-angle-double-left"></i>}
        >
          {seccionTotal.map((sec, index) =>
            <Link to="/panel"
              key={index}
              className="secciones"
            >
              <div>
                <img src="/images/bkg.jpg" alt="" title="" style={{width: '100px', margin: '5px'}} />
              </div>
              <div>
                <h2>{sec.seccion}</h2>
                <p>{sec.intro}</p>
              </div>
            </Link>
          )}
          {/*
          {Array.from(new Array(10)).map((_, i) =>
            <div
              key={i}
              style={{
                height: 150,
                background: 'url(https://placeimg.com/380/200/nature)'
              }}
            />
          )}
          */}
        </ItemsCarousel>
      </div>
    );
  }
}
 
export default ItemCarousel;