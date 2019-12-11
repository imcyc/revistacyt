import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center"><Link to="#">Instituto Mexicano del Cemento y del Concreto A.C.</Link><br/>@ 1959 - 2020 | Todos Los Derechos Reservados.</p>
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

export default withRouter(Footer);