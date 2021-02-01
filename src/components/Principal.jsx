import React, { useState, useEffect } from 'react';
import ListaLibros from './ListaLibros';
import axios from 'axios';
import Spinner from './Spinner';

const Principal = () => {

    const [categorias, setCategorias] = useState(false);

    const ConsultarAPI = async () => {
        const url = `http://biblioteca.ceprevitest.com/backend/public/api/categorias`;
        const resultado = await axios.get(url);
        setCategorias(resultado.data);
    }

    useEffect( () => {
        ConsultarAPI();
        // eslint-disable-next-line
    }, []);

    if(Object.keys(categorias).length === 0) {
        return <Spinner />;
    }
    // console.log(categorias);

    return (
        <div className="container mb-5">
        {categorias.map(categoria => (
                <ListaLibros 
                    key={categoria.id}
                    categoria={categoria}
                />
        ))}

        </div>
    );
}
 
export default Principal;