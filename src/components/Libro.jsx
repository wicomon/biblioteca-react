import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import AuthContext from '../context/autenticacion/authContext';
import axios from 'axios';
import Spinner from './Spinner';

const Libro = () => {
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);
    
    const {id} = useParams();

    const [libro, setLibro] = useState(false);
    const [categoria, setCategoria] = useState(false);

    const ConsultarAPI = async () => {
        const url = `http://biblioteca.ceprevitest.com/backend/public/api/libro/${id}`;
        const resultado = await axios.get(url);
        
        const url2 = `http://biblioteca.ceprevitest.com/backend/public/api/categorias/${resultado.data[0].categoria_id}`;
        const resultado2 = await axios.get(url2);
        setLibro(resultado.data[0]);
        setCategoria(resultado2.data[0]);
    }
    useEffect( () => {
        ConsultarAPI();
        // eslint-disable-next-line
    }, []);

    if(Object.keys(libro).length === 0) {
        return <Spinner />;
    }
  

    return (
        <div className="container my-3">
            <div className="row mb-3">
                <div className="col">
                    {/* <button onClick={ConsultarAPI}>Cambiar de librosky</button> */}
                <Link to={'/'}> 
                <button type="button" className="btn btn-outline-danger mr-2 text-uppercase font-weight-bold">
                <i className="icono fas fa-arrow-left"></i>
                    Volver
                </button>
                </Link>
                </div>
                
            </div>

            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={`http://biblioteca.ceprevitest.com/backend/public/upload/images/${libro.imagen}`} className="img-fluid" width="500px" alt=""/><br/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2> {libro.titulo} </h2>
                    <p>
                        <span className="font-weight-bold text-danger"> Autor : </span>
                        <span className="text-dark" >
                            {libro.autor}
                        </span>
                    </p>
                    <p>
                        <span className="font-weight-bold text-danger"> Categoria : </span>
                        <span className="text-dark" >
                            {categoria.nombre}
                        </span>
                    </p>
                    <p className="text-justify">
                        <span className="font-weight-bold text-danger"> Descripción : </span><br/>
                        
                            {libro.descripcion}
                        
                    </p>

                    <Link to={{pathname: `http://biblioteca.ceprevitest.com/backend/public/upload/docs/${libro.enlace}`}} target="_blank"> 
                        <button type="button" className="btn btn-outline-danger mr-2 text-uppercase font-weight-bold">
                        <i className="icono fas fa-book-open"></i>
                                Ver el libro
                        </button>
                    </Link>

                </div>
            </div>
        
            
            
        </div>
    );
}
 
export default Libro;