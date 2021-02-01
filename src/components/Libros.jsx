import React from 'react';
import {Link} from 'react-router-dom';

const Libros = ({libro}) => {
    const { id,titulo, autor, imagen} = libro;
    return (  
 
            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12 mt-1">
                <div className="card shadow mt-1" style={{width: "16rem"}}>
                <img src={`http://biblioteca.ceprevitest.com/backend/public/upload/images/${imagen}`} alt="libro" className="card-img-top carta" />
                <div className="card-body">
                    <h3 className="card-title" style={{whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis"}}>{titulo}</h3>
                
                    <div className="meta-receta d-flex justify-content-between">
                        <p className="text-danger font-weight-bold">
                            Autor : 
                        </p><p>{autor}</p>
                    </div>
                    <Link to={`/libro/${id}`} className="btn btn-danger d-block btn-receta">
                    VER LIBRO
                    </Link>
                </div>
                </div>
            </div>
        
    );
}
 
export default Libros;