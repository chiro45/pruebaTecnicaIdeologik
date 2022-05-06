 import React from 'react';
 import { Navigate } from 'react-router-dom';
 import { useSelector } from 'react-redux';





 
 export const PrivateRoute = ({children}) => {  
    const {user} = useSelector(state => state.authReducer)
   
    
    //si el user existe => te deja acceder a la aplicaicon sino te retorna al login
     return (
        (!!user)
         ?   children  
         :  <Navigate to="/" />
     )              
 }
 
 
