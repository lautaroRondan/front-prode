import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apuestas from '../pages/Apuestas'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import PartidosAdmin from '../pages/PartidosAdmin'
import Posiciones from '../pages/Posiciones'
import { HeaderNav } from '../layout/HeaderNav'
import PrivateRoute from './PrivateRoute'
import { AuthContextProvider } from '../components/context/AuthContext'
import PublicRoute from './PublicRoute'

const Rutas = () => {
  return (
    <div className="layout">

      <AuthContextProvider>
        <BrowserRouter>
        <HeaderNav />

          <Routes>
            <Route path='/' element={<PublicRoute/>}>
            <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route path="/" element={<Inicio />} />
            
            <Route path='/prode' element={<PrivateRoute/>}>
            
              <Route path="/prode/inicio" element={<Inicio />} />
              <Route path="/prode/apuestas" element={<Apuestas />} />
              <Route path="/prode/posiciones" element={<Posiciones />} />
              <Route path='/prode/partidos-admin' element={<PartidosAdmin />} />
            </Route>

            <Route path="*" element={
              <div className="jumbo">
                <h1>Error 404</h1>
              </div>
            } />

          </Routes>


        </BrowserRouter>
      </AuthContextProvider>


    </div>
  )
}

export default Rutas
