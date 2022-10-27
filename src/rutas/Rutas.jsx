import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apuestas from '../components/Apuestas'
import Inicio from '../components/Inicio'
import PartidosAdmin from '../components/PartidosAdmin'
import Posiciones from '../components/Posiciones'
import { HeaderNav } from '../layout/HeaderNav'

const Rutas = () => {
  return (
    <div className="layout">
    <BrowserRouter>
    <HeaderNav/>

    
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/inicio" element={<Inicio/>}/>
    <Route path="/apuestas" element={<Apuestas/>}/>
    <Route path="/Posiciones" element={<Posiciones/>}/>
    <Route path='/partidos-admin' element={<PartidosAdmin/>}/>


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
