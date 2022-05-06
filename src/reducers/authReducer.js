import { types } from "../types/types"



const initialState = {
    user:"",
    checking: true
}


export const authReducer = (state = initialState, action )=>{

    switch (action.type) {
        case types.login:
            return({
                ...state,
                ...action.payload,
                checking: false
            })

        case types.logout:
        return {

            cheking: true
        }
    
        default:
            return  state;
    }




}