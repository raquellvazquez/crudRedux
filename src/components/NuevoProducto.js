import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Acciones Redux
import {crearNuevoProductoAction} from '../actions/productoActions';



const NuevoProducto = () => {

    // state del nombre
    const [nombre, guardarNombre] = useState('')

     // state del precio
     const [precio, guardarPrecio] = useState(0)

    // utlizar use dispatch y crea una funcion

   const dispatch = useDispatch();

    /**
     * Funcion que manda a llamar el action de Producto Action
     * se utiliza una funcion  que mande a llamar el action
     * importar dos hooks de react redux
     */

    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));



    /**
     * Funcion para el submit del formulario
     */

    const submitNuevoProducto = e => {
        e.preventDefault();
        //validar formulario 
        if(nombre.trim() === '' || precio <= 0) {
            return;
        }

        //errores


        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }

    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
           </div>
       </div>
     );
}
 
export default NuevoProducto;