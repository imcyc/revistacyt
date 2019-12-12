import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardArticulo.css';

const CardArticulo = (props) => {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{maxHeight: '100px'}} variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="secondary">LEER ARTÍCULO</Button>
      </Card.Body>
    </Card>
  );
};

export default CardArticulo;