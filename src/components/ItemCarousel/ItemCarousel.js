import React, { Component } from 'react';
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
    const seccion = [
      "portada",
      "editorial",
      "buzón",
      "noticias",
      "posibilidades del concreto",
      "ingeniería",
      "tecnología"
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
          {seccion.map((sec, index) =>
            <div
              key={index}
              className="secciones"
            >
              <h2>{sec}</h2>
            </div>
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