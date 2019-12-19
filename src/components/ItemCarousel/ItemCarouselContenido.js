import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';
import './ItemCarouselContenido.css';

class ItemCarouselContenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      setActiveItemIndex: 0,
      noticias: []
    }
  }
  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=construction&from=2019-12-11&to=2019-12-11&sortBy=popularity&apiKey=d6e94ae6348c44ab9b20c475613aae01`)
      .then(response => {
        const noticias = response.data.articles;
        console.log(response.data.articles);
        this.setState({ noticias });
      })
  }
  render() {
    return (
      <div className="wrapsecciones contenidos">
        <ItemsCarousel
          infiniteLoop={false}
          gutter={12}
          activePosition={'center'}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={1}
          slidesToScroll={1}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value => this.setState({ activeItemIndex: value })}
          rightChevron={<i className="lni-angle-double-right"></i>}
          leftChevron={<i className="lni-angle-double-left"></i>}
        >
          {this.state.noticias.map(item => (
            <Link to={`/panel/noticias`}
              key={item.author}
              className="secciones"
            >
              <div style={{marginBottom: '10px'}}>
                <img src={item.urlToImage} alt="" title="" style={{width: '96%', margin: '5px'}} />
              </div>
              <div>
                <h2 style={{marginBottom: '7px', overflow: 'hidden'}}>{item.title}</h2>
                <p><small>{item.publishedAt}</small></p>
                <hr/>
                <h3>{item.description}</h3>
                <hr/>
                <p>{item.description}</p>
                <Button variant="dark" className="pull-right mr-4">LEER CONTENIDO COMPLETO</Button>
              </div>
            </Link>
          ))}
        </ItemsCarousel>
      </div>
    );
  }
}
 
export default ItemCarouselContenido;