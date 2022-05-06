import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { NothinScreen } from '../components/nothingScreen/NothinScreen'
import { ScreenAction } from '../components/ScreenAction/ScreenAction'
import { PrivateRoute } from './private/PrivateRoute'
import { PublicRoute } from './public/PublicRoute'

export const AppRouter = () => {
  return (
    //rutas publicas
    <Routes>
        <Route exact 
        path="/"
        element={
          <PublicRoute>
                <Login/>
        </PublicRoute>
      }
      //rutas privadas es decir de la app
        />
        <Route exact 
        path="/actionScreen"
        element={
          <PrivateRoute>
            <ScreenAction/>
        </PrivateRoute>
      }
      //rutas desconocidas para la app
      />   
        <Route
            path="/*"
            element={<NothinScreen/>}
        />
    </Routes>
  )
}
