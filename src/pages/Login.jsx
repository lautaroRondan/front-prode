import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import Global from '../helpers/Global';
import { Peticion } from '../helpers/Peticiones';


const Login = () => {
  const { formulario, cambiado } = useForm({});

// console.log(formulario)

const iniciarSesion = async (e) => {
  e.preventDefault();
  
  let datosLogin=formulario

  const { datos } = await Peticion(Global.url + "login", "POST", datosLogin);

  if (datos.status === "success") {
    console.log("se ingreso")
    // console.log(datos)
    if(datos.usuario[0].Tipo_Usuario == "admin"){
      console.log("ingreso de admin")
    }else{
      if(datos.usuario[0].Pago == "si"){
        console.log("ingreso usuario")
      }else{
        console.log("primero se necesita el pago")
      }
    }
   
  } else {
    console.log("error al ingresa")
  }

}

  return (
    <div className="containerPrincipal">
    <div className="containerLogin">
      <div className="form-group">
        <label>Email: </label>
        <br />
        <input
          type="text"
          className="form-control"
          name="Email"
          onChange={cambiado}
        />
        <br />
        <label>Contraseña: </label>
        <br />
        <input
          type="password"
          className="form-control"
          name="Contraseña"
          onChange={cambiado}
        />
        <br />
        <button className="btn btn-primary" onClick={iniciarSesion}>Iniciar Sesión</button>
      </div>
    </div>
  </div>
);
  
}

export default Login
