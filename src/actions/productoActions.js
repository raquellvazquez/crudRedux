import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
 } from '../types';
 
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

/**
 * Crear nuevos productos
 */

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
          //insertar en la API
          // es lo que se le pasa a la API
          await clienteAxios.post('/productos', producto)

          // Se actualiza el state
          dispatch(agregarProductoExito(producto));

          //modal de exito
          Swal.fire(
              'Correcto',
              'El producto se agrego correctamente',
              'success'
          )
        } catch (error) {
        console.log(error)
        // si hay error se cambia el state
          dispatch(agregarProductoError(true));

          // alerta de error

          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Hubo un error, intenta de nuevo'
          })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: true
});

/**
 * Funcion que descarga los productos de la base de datos
 */

export function obtenerProductosAction() {
    return async (dispatch) =>{
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})