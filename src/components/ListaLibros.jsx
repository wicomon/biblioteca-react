import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Libros from './Libros';

import OwlCarousel from 'react-owl-carousel';

const ListaLibros = ({categoria}) => {

    const {id, nombre} = categoria;

    const [libros, setLibros] = useState({});

    const ConsultarAPI = async () => {
        const url = `http://biblioteca.ceprevitest.com/backend/public/api/libros/${id}`;
        const resultado = await axios.get(url);
        setLibros(resultado.data);
    }

    useEffect( () => {
        ConsultarAPI();
        // eslint-disable-next-line
    }, []);

    if(Object.keys(libros).length === 0) return null;

    return (
        <div className="row my-5 py-3 lista-libros">
            <div className="carousel-title col">
                <h2 className="text-center"> {nombre}</h2>
                <hr className="linea-libro"/>
            </div>
            
            <OwlCarousel
            autoplay
            loop
            
            responsive = {{ 
                0: {
                items: 1
                },
                550: {
                    items: 2
                },
                960: {
                    items: 3
                } ,
                1200: {
                    items: 4
                } 
            }}
            >
            {libros.map(libro => (
                <Libros 
                    key={libro.id}
                    libro={libro}
                />
                
            ))}
            </OwlCarousel>
        </div>
    );
}
 
export default ListaLibros;