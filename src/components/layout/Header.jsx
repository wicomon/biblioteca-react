import React from 'react';
import logo from '../../ceprevi-logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm" style={{backgroundColor: "#ff7504e5"}}>
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} className="img-fluid" width="200px" alt="Logo Ceprevi" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link h3" href="login.php">Acceder</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h3" href="registro.php">Registro</a>
                            </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;