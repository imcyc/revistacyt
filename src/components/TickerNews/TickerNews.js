import React, { Component } from 'react';
import axios from 'axios';
import Ticker from 'react-ticker';
import './TickerNews.css';

class TickerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  GetRatesFromAPI = () => {
    return <p style={{ whiteSpace: "nowrap" }}>Placeholder</p>
  }
  render(){
    console.log(this.state.noticias)
    return (
      <Ticker>
          {this.GetRatesFromAPI}
      </Ticker>
    )
  }
};

export default TickerNews;