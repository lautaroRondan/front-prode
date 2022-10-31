import React from 'react'
import { useForm } from '../hooks/useForm';
import Global from '../helpers/Global';
import { Peticion } from '../helpers/Peticiones';
import { useState } from 'react';

const PartidosAdmin = () => {

  const { formulario, cambiado } = useForm({});
  const [resultados, setResultados] = useState([]);

  let nuevosresultados = formulario

  
  const resultadoPartido = async (e) => {
    e.preventDefault();
    console.log(formulario.idPartidos)

    const { datos } = await Peticion(Global.url + "actualizar-partidos", "PUT", nuevosresultados);

    if (datos.status === "success") {
      console.log("se actualizo el partido")
      conseguirPartidos();
      // comparacionPartidos()
    } else {
      console.log("error actualizar")
    }

  }


  const conseguirPartidos = async () => {
    let i = 3

    do {
      const { datos } = await Peticion(Global.url + "comparacion/" + i + "/" + formulario.idPartidos, "GET");
      if (datos.status === "success") {
        // console.log(i)
        comparacionPartidos(datos.comparacion[0].apuestaLocal, datos.comparacion[0].apuestaVisitante, i)
      } else {
        console.log("error")
      }
      i = i + 1
    } while (i < 6)
    

  };


  const comparacionPartidos = (datosLocal, datosVisitante, idusuario) => {
    if (formulario.golLocal == formulario.golVisitante) {
      console.log("empate")
      if (datosLocal == datosVisitante) {
        if (formulario.golLocal == datosLocal && formulario.golVisitante == datosVisitante) {
          console.log("empate 3pts")
          actualizarPuntos(idusuario, 3)
        } else {
          console.log("empate 2pts")
          actualizarPuntos(idusuario, 2)
        }
      } else {
        console.log("empate 0pts")
      }

    } else if (formulario.golLocal > formulario.golVisitante) {
      console.log("local")
      if (datosLocal > datosVisitante) {
        if (formulario.golLocal == datosLocal && formulario.golVisitante == datosVisitante) {
          console.log("local 3pts")
          actualizarPuntos(idusuario, 3)
        } else {
          console.log("local 2pts")
          actualizarPuntos(idusuario, 2)
        }
      } else {
        console.log("local 0pts")
      }
    } else {
      console.log("visitante")
      if (datosLocal < datosVisitante) {
        if (formulario.golLocal == datosLocal && formulario.golVisitante == datosVisitante) {
          console.log("visitante 3pts")
          actualizarPuntos(idusuario, 3)
        } else {
          console.log("visitante 2pts")
          actualizarPuntos(idusuario, 2)
        }
      } else {
        console.log("visitante 0pts")
      }
    }

  }

  const actualizarPuntos = async(id_usuario, puntos) =>{

   let puntosUsuario={
      puntos,
      id_usuario
    }

    const { datos } = await Peticion(Global.url + "sumar-puntos", "PUT", puntosUsuario);

    if (datos.status === "success") {
      console.log("se actualizo el puntuaje")
      console.log(id_usuario)
    } else {
      console.log("error actualizar")
    }
  }


  return (
    <div className='inicio' >
      <form>
        <input type="text" name='golLocal' onChange={cambiado}></input>
        <input type="text" name='golVisitante' onChange={cambiado}></input>
        <input type="text" name='idPartidos' onChange={cambiado}></input>
        <button onClick={resultadoPartido} >aaaaa</button>
      </form>
    </div>

  )
}

export default PartidosAdmin
