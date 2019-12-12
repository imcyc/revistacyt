import React, { Component } from 'react';
import Ticker from 'react-ticker';
import './TickerNews.css';

class TickerNews extends Component {
  
  render(){
    return (
      <Ticker>
          {({ index }) => (
              <>
                  <p>This is the Headline of element #{index}!</p>
              </>
          )}
      </Ticker>
    )
  }
};

export default TickerNews;