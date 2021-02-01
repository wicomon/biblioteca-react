import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <>
    <div className="footer-dark">
            <div className="col">
                <div className="title text-center mb-3">
                    <h4>Siguenos en Nuestras Redes Sociales  </h4>
                </div>
                <div className="row">
                    <div className="col item social">
                        <Link to={{pathname: `https://www.facebook.com/ceprevioficial`}} target="_blank"><i className="fab fa-facebook"></i></Link>
                        <Link to={{pathname: `https://www.facebook.com/ceprevioficial`}} target="_blank"><i className="fab fa-instagram"></i></Link>
                        <Link to={{pathname: `https://www.youtube.com/channel/UCp109vbbqXrEa7Oo4FmJ6nA`}} target="_blank"><i className="fab fa-youtube"></i></Link>
                        <Link to={{pathname: `http://www.unfv.edu.pe/ceprevi/`}} target="_blank"><i className="fas fa-globe-americas"></i></Link>
                    </div>
                </div>
            </div> 
        <p className="copyright">CEPREVI © 2021</p>
    </div>
        </>
    );
}
 
export default Footer;