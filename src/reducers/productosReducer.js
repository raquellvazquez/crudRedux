/**
 * Importacion de types
 */

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// cada reducer tiene su propio state

const initialState= {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        // case value:
            
        //     break;
    
        default:
            return state;
    }
}