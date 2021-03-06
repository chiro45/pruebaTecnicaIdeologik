import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    //instanciamos el useState para el cambio del imput
    const [values, setValues] = useState(initialState); //el initialstate se pasa por parametro

    //tomamos el target en la funcion
    const handleInputChange = ({ target }) => {
     //el setValue lo que hace es retornar todos los valores
     //y el target.name va a tener el varlor del target.value
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    //retornamos los valores la funcion de change 
    return [ values, handleInputChange ];

}