import React, { useEffect, useState } from 'react'


const Login = () => {
  

  return (
    <div>
      <form className='contact' action='luti2296@gmail.com'>
        <input type="text" placeholder="Email" onChange={inputChange}/>
        <input type="text" placeholder="Contraseña" onChange={inputChange}/>
        <input type="submit" value="enviar" onClick={onSubmit}/>

      </form>
      
    </div>
  )
}

export default Login
