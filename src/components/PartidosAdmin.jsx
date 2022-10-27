import React from 'react'
import { useForm } from '../hooks/useForm';
import Global from '../helpers/Global';
import { Peticion } from '../helpers/Peticiones';
import { useState } from 'react';

const PartidosAdmin = () => {

  const { formulario, cambiado } = useForm({});
  const [resultados, setResultados] = useState([]);

  let nuevosresultados = formulario
  let enviardatos = ({})

  const resultadoPartido = async (e) => {
    e.preventDefault();
    console.log(formulario.idPartidos)
    enviardatos = ({
      idUsuario: 3,
      idPartidos: formulario.idPartidos
    })

    const { datos } = await Peticion(Global.url + "actualizar-partidos", "PUT", nuevosresultados);

    if (datos.status === "succes") {
      console.log("se actualizo el partido")
      conseguirPartidos();
    } else {
      console.log("error")
    }

  }


  const conseguirPartidos = async () => {
    let id = 3
    console.log(enviardatos)

    const { datos } = await Peticion(Global.url + "comparacion/" + id + "/" + formulario.idPartidos, "GET");
    if (datos.status === "success") {
      setResultados(comparacion)
    }

    console.log(resultados)
  };


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
