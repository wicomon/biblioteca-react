import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { CERRAR_SESION, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR } from '../../types';

import axios from 'axios';


const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('usuario'),
        autenticado: null,
        usuario: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

     //Retornar el usuaro autenticado
     const usuarioAutenticado = async() =>{
        
        const token = localStorage.getItem('usuario');
        
        if (!token) {
            dispatch({
                type: LOGIN_ERROR
            })
        }

        try {
            const respuesta = await axios.get(`http://localhost:8080/api-biblioteca/public/api/auth/${token}`);
            // console.log(respuesta.data)
            if (respuesta.data.estado === 'exito') {
                dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data.id
                });
            }else{
                dispatch({
                    type: LOGIN_ERROR
                })
            }
            
            
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //cuando un usuario inicia sesion 
    const iniciarSesion = async datos => {
        try {
            const respuesta = await axios.post('http://localhost:8080/api-biblioteca/public/api/auth', datos);
            // console.log(respuesta.data);
            if (respuesta.data.estado === 'exito') {
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: respuesta.data
                });
            }else{
                dispatch({
                    type: LOGIN_ERROR
                })
            }

            //obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    //Cerrar la sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,

                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;