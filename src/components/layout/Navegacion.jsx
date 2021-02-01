import React from 'react';
import NavegacionItem from './NavegacionItem';

const Navegacion = ({items}) => {

    if(Object.keys(items).length === 0) {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light categorias-bg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#categorias" aria-controls="categorias" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                    Categorias
                </button>
        <div className="collapse navbar-collapse " id="categorias">
                    <ul className="navbar-nav w-100 d-flex justify-content-between"> 
                        {items.map(item => (
                            <NavegacionItem 
                                key={item.id}
                                categoria={item}
                            />
                        ))}
                    </ul>
        </div>
        </div>
        </nav>
    );
}
 
export default Navegacion;