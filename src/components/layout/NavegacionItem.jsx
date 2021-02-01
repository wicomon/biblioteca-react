import React from 'react';
import {Link} from 'react-router-dom';

const NavegacionItem = ({categoria}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={`/categorias/${categoria.id}`}>
                {categoria.nombre}
            </Link>
        </li>
    );
}
 
export default NavegacionItem;

