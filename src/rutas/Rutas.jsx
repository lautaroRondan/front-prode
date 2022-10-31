import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apuestas from '../pages/Apuestas'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import PartidosAdmin from '../pages/PartidosAdmin'
import Posiciones from '../pages/Posiciones'
import { HeaderNav } from '../layout/HeaderNav'
import PrivateRoute from '../components/PrivateRoute'

const Rutas = () => {
  return (
    <div className="layout">
    <BrowserRouter>
    <HeaderNav/>

    
    <Routes>
    <Route  path="/" element={<Login/>}/>
    <Route  path='/login' element={<Login/>}/>
    {/* <Route  path="/inicio" element={<Inicio/>}/> */}
    {/* <Route  path="/apuestas" element={<Apuestas/>}/> */}
    {/* <Route  path="/Posiciones" element={<Posiciones/>}/> */}
    {/* <Route  path='/partidos-admin' element={<PartidosAdmin/>}/> */}
     <PrivateRoute  path="/inicio" element={<Inicio/>}/>
    {/* <RutasPrivadas  path="/apuestas" element={<Apuestas/>}/> */}
    {/* <RutasPrivadas  path="/Posiciones" element={<Posiciones/>}/> */}
    {/* <RutasPrivadas  path='/partidos-admin' element={<PartidosAdmin/>}/>  */}


    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>
                    }/>

    </Routes>
    
    
    </BrowserRouter>
    </div>
  )
}

export default Rutas
