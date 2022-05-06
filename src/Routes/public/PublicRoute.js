
import {  useSelector } from 'react-redux';
 import { Navigate } from 'react-router-dom';

 export const PublicRoute = ({children}) => {
    const {user} = useSelector(state => state.authReducer)
      //si el user no existe, no te deja acceder al hijo => en este caso y te deja en el login
     return ( 
        (user)
         ? <Navigate to="/actionScreen" />
         : children       
         )      
 }
 
