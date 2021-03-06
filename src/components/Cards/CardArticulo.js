import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardArticulo.css';

const CardArticulo = (props) => {
  return(
    <Card>
      <Card.Img style={{maxHeight: '100px', borderRadius: '0'}} variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="secondary" style={{width: '100%'}}>LEER ARTÍCULO</Button>
      </Card.Body>
    </Card>
  );
};

export default CardArticulo;