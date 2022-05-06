import { types } from "../types/types";

const initialState = {
    products:[]
}



export const productReducer = (state = initialState, action )=>{

    switch (action.type) {
                //carga las comandas
                case types.loadProduct:
                    return{
                    ...state,
                    products: [...action.payload]
                    }

                //limpia todas las ordenes al salir
                case types.productLogoutCleaning:
                    return {
                        ...initialState 
                }
        default:
            return  state;
    }




}