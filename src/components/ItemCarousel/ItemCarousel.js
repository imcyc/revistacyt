import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';
import './ItemCarousel.css';

class ItemCarousel extends Component {
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
  fecha = (fec) => {
    console.log('La fecha: ' + fec);
    var mydate = new Date(fec);
    return mydate.toDateString();
  }
  render() {
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
          {this.state.noticias.map(item => (
            <Link to={`/panel/noticias`}
              key={item.author}
              className="secciones"
            >
              <div>
                <div className="cajaimagen">
                  <img src={item.urlToImage} alt={item.title} title={item.title} />
                </div>
              </div>
              <div>
              <p style={{fontSize: '0.5em', padding: '0', margin: '0', paddingLeft:'5px'}}>{this.fecha(item.publishedAt)}</p>
                <h2 style={{maxHeight: '45px', marginBottom: '7px', overflow: 'hidden'}}>{item.title}</h2>
              </div>
            </Link>
          ))}
        </ItemsCarousel>
      </div>
    );
  }
}
 
export default ItemCarousel;