import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Noticias = (props) => {
  const [rates, setRates] = useState("");
  useEffect(() => {
    async function fetchData() {
      axios.get(`https://newsapi.org/v2/everything?q=construction&from=2019-12-11&to=2019-12-11&sortBy=popularity&apiKey=d6e94ae6348c44ab9b20c475613aae01`)
      .then(response => {
        setRates(props.titulo);
      })
    }
    fetchData();
  }, []);
  return rates ? (
    <p style={{ whiteSpace: "nowrap" }}>{rates + " - "}</p>
  ) : (
    <p style={{ visibility: "hidden" }}>Placeholder</p>
  );
};

export default Noticias;