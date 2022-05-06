import Swal from "sweetalert2";
import { types } from "../types/types";




//carga los eventos al store
const cargarProductos = (productos)=>({
    type: types.loadProduct,
    //los eventos vienen en forma de arreglo de la bd
    payload: productos
    
})
//trae todos los eventos de la base de datos
export const traerProductos = (prod = "")=>{
let API_URL;
        (prod === "WEB 360")
            ?API_URL = "https://prueba-tecnica-be.herokuapp.com/simulators/web360 "
            : API_URL = "https://prueba-tecnica-be.herokuapp.com/simulators/vr "
        return async(dispatch)=>{
    try {
       await fetch(`${API_URL}`)
            .then(response => response.json())
            .then( (productos) => dispatch(cargarProductos(productos))) 
            //trae todas las ordenes de la bd
        
            
    } catch (error) {
        console.error(error)
        Swal.fire('error','se produjo un error intente nuevamente', 'error')
    }

    }
}

export const clearLogout =()=>({
    type: types.productLogoutCleaning,
    payload: []
})