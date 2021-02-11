import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/autenticacion/authContext';

const Login = (props) => {

    const [error, setError] = useState(false);

    const history = useHistory();

    const authContext = useContext(AuthContext);
    const { autenticado, iniciarSesion } = authContext;

     //en caos de que el password o usuario no exista
     useEffect(() => {
        if (autenticado) {
            history.push('/');
        }
    }, [ autenticado, props.history]);


    //state para iniciar sesión 
    const [usuario, guardarUsuario] = useState({
        id: '',
        password: ''
    });

    //extraer de usuario

    const {id, password} = usuario;

    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        //validar que no haya campos vacios
        if (id.trim() === '' || password.trim() === '') {
            setError(true);
        }
        //pasarlo al action
        iniciarSesion({id, password});
    }

    return ( 
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card my-3">
                        <div className="card-header text-center">Ingreso a la Biblioteca Virtual</div>

                        <div className="card-body">
                            <form onSubmit={onSubmit} >
                                <div className="form-group row">
                                    <label htmlFor="id" className="col-md-4 col-form-label text-md-right">Código : </label>

                                    <div className="col-md-6">
                                        <input 
                                            id="id" 
                                            type="text" 
                                            className="form-control" 
                                            name="id" 
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">DNI : </label>

                                    <div className="col-md-6">
                                        <input 
                                            id="password" 
                                            type="password" 
                                            className="form-control"
                                            name="password" 
                                            required  
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                
                               {error ? 
                                <div className=" row ">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right"> </label>
                                    <div className="col-md-6 my-3 mx-0 py-2  px-0 border border-danger">
                                        <h5 className="text-center text-danger">Datos Incorrectos</h5>
                                    </div>
                                </div>
                                
                                : null}

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-success btn-lg ">
                                            Acceder
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Login;