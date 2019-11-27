import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-center p-0 m-0"><b>Revista Construcción y Tecnología en Concreto</b></p>
          <p className="text-center"><Link to="#">Instituto Mexicano del Cemento y del Concreto A.C.</Link><br/>@ 1959 - 2019 | Todos Los Derechos Reservados.</p>
          <ul className="social_footer_ul">
            <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
            <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
          </ul>
        </div>
      </footer>
    );
  }
}
 
export default Footer;