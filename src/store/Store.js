import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { RootReducers } from '../reducers/RootReducers'



//definimos el store para el manejo del estado de la app y definimos a thunk

export const Store = configureStore({
    reducer: RootReducers,  //definimos el root reducer que es donde tenemos todos nuestros reducers juntos
    middleware: [thunk]
  })

