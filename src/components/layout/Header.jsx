import React, {useContext, useEffect} from 'react';
import logo from '../../ceprevi-logo.png';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const Header = () => {

    //extraer la informacion del usuario
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado, cerrarSesion} = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

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
                            <li className="nav-item">
                                <button 
                                    className="btn btn-outline-warning text-uppercase font-weight-bold" 
                                    onClick={() => cerrarSesion()}
                                >
                                    Cerrar Sesión
                                </button>
                            </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;