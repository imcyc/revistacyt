import React, { Component } from 'react';
import axios from 'axios';
import Noticias from './Noticias';
import Ticker from 'react-ticker';
import './TickerNews.css';

class TickerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      titulos: this.props.title
    }
  }
  
  render(){
    return (
      <Ticker>
        {() => <Noticias titulo={this.props.title} />}
      </Ticker>
    )
  }
};

export default TickerNews;