import { CERRAR_SESION, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR } from '../../types';

export default (state, action) => {
    switch(action.type){
        case LOGIN_EXITOSO:
            localStorage.setItem('usuario', action.payload.id);
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        
        case OBTENER_USUARIO:
            return {
                ...state,
                token: localStorage.getItem('usuario'),
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
            localStorage.removeItem('usuario');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }
            
        default:
            return state;
    }
}