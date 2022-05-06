import Swal from "sweetalert2";
import { types } from "../types/types";




//carga los prod al store
const cargarProductos = (productos)=>({
    type: types.loadProduct,
    //los prod vienen en json
    payload: productos
    
})
//trae todos los prducts
//lo realice de esta manera ya que lo tenia resuelto anteriormente con la importacion, lo correcto seria que el parametro de la fn sea lo que vaya directamente en la url
export const traerProductos = (prod = "")=>{
let API_URL = "https://prueba-tecnica-be.herokuapp.com/simulators/";
        (prod === "WEB 360")
            ? API_URL = `${API_URL}web360` 
            : API_URL = `${API_URL}vr` 
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