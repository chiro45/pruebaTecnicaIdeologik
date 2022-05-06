import Swal from "sweetalert2"
import { types } from "../types/types"
import { clearLogout } from "./product"

//se llama desde el login y es el que maneja el envio del formulario
export const startLogin =  (user,passwd)=>{
    return (dispatch)=>{
        //le decimos que si es exactamente igual a estos datos que realice el logout => simulacion
        if(user === "usuarioPrueba" && passwd === 'contrasena'){
            Swal.fire('Ingreso Exitoso',"","success")
            dispatch(login(user, passwd))
            
          }else{
            Swal.fire('Error',"usuario o contraseña incorrecto","error")
          }
        
    }
}
//realiza el login del usuario en la store
export const login = (user)=>({
    type: types.login,
    payload: {user: user}
})


export const StartLogout =()=>{
    return async(dispatch)=>{
        dispatch(logout())
        dispatch(clearLogout())
    }
}


//se llama desde el navbar
//realiza el logout en el store de la app
export const logout = ()=>({
    type: types.logout

})