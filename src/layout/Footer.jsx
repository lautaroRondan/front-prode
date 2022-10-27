import React from 'react'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <footer className='footer'>

      <div className="copyright">
       <p> &copy;Copyright 2022 Lautaro Rondan </p>
       {/* <img src={linkedin} />
        <img src={whatsapp} /> */}
        
      </div>
      

      <div className="redes">
      <a href="https://www.linkedin.com/in/lautaro-rondan-7453221a4/"> <img  src={linkedin} /> </a>
      <a href="https://wa.me/540236154500622"> <img  src={whatsapp} /> </a>
      </div>

    </footer>
  )
}

export default Footer
