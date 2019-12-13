import React, { Component } from 'react';
import axios from 'axios';
import Ticker from 'react-ticker';
import './TickerNews.css';

class TickerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      titulos: []
    }
  }
  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=construction&from=2019-12-11&to=2019-12-11&sortBy=popularity&apiKey=d6e94ae6348c44ab9b20c475613aae01`)
      .then(response => {
        console.log(response);
        const noticias = response.data.articles;
        this.setState({ noticias });
        this.state.noticias.map(noticia => {
          this.setState({
            titulos: noticia.title
          })
        });
      })
  }

  GetRatesFromAPI = () => {
    const titulo = [];
    this.state.noticias.map(noticia => titulo.push(noticia.title));
    return <p style={{ whiteSpace: "nowrap" }}>{titulo.join(" - ")}</p>
    //return <h1>Hola</h1>;
  }
  render(){
    return (
      <Ticker>
        {({ tikitext }) => (
            <>
                <p>This is the Headline of element #{tikitext}!</p>
            </>
        )}
      </Ticker>
    )
  }
};

export default TickerNews;