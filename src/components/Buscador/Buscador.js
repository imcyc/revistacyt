import React from 'react';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Buscador.css';

const Buscador = (props) => {
  const laUra = props.location.pathname;
  const panel = laUra.indexOf("panel");
  
  const buscador = (e) => {
    e.preventDefault();
    console.log(e.target.textoBuscador.value);
  }
  return (
    <div>
      {(panel === 1) &&
        (
          <Form inline onSubmit={buscador}>
            <FormControl name="textoBuscador" type="text" placeholder="BUSCAR CONTENIDOS" className="mr-sm-0" />
            <Button type="submit" variant="outline-light">BUSCAR</Button>
          </Form>
        )
      }
    </div>
  )
}

export default withRouter(Buscador);