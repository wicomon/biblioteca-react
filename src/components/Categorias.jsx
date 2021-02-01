import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import Categoria from './Categoria';

const Categorias = () => {

    const {id} = useParams();

    const [libros, setLibros] = useState(false);
    const [categoria, setCategoria] = useState(false);
    const [cargando, setCargando] = useState(false);

    const ConsultarAPI = async () => {
        setCargando(true);
        const url = `http://biblioteca.ceprevitest.com/backend/public/api/libros/${id}`;
        const resultado = await axios.get(url);
        
        const url2 = `http://biblioteca.ceprevitest.com/backend/public/api/categorias/${resultado.data[0].categoria_id}`;
        const resultado2 = await axios.get(url2);
        setLibros(resultado.data);
        setCategoria(resultado2.data[0]);
        setCargando(false);
    }
    useEffect( () => {
        ConsultarAPI();
        
    }, [id]);

    if(Object.keys(libros).length === 0 || cargando) {
        return <Spinner />;
    }

    return (
        <div className="container mt-3">
            <div className="container mb-0 mt-5">
                <h2 className="font-weight-bold">Lista de libros de <span className="text-warning">{categoria.nombre}</span></h2>
                <hr className="linea-libro"/>
            </div>
            <div className="row my-5 py-3">
                
                    {libros.map(libro => (
                        <Categoria 
                            key={libro.id}
                            libro={libro}
                        />
                        ))}
            </div>
        </div>
    );
}
 
export default Categorias;