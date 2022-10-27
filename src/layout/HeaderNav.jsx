import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <span>LR</span>
            <h3>Lautaro Rondan</h3>
        </div>
      
      <nav>
        <ul>
            <li>
                <a href='#home' >Inicio</a>
            </li>
            <li>
                <a href='#proyects'>Partidos</a>
            </li>
            <li>
                <a href='#technology'>Prode</a>
            </li>
            <li>
                <a href='#contact'>Ranking</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}


