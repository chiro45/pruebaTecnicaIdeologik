
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";


//combinamos todos los reducers, en este caso solo tenemos uno pero en un futuro deberia crecer 
export const RootReducers = combineReducers({
    authReducer: authReducer,
    productReducer: productReducer
})