import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Global from '../helpers/Global';
import { Peticion } from '../helpers/Peticiones';
import { useForm } from '../hooks/useForm';


const Apuestas = () => {
  const [partidos, setPartidos] = useState([]);
  const { formulario, cambiado } = useForm({});

  let nuevosresultados = formulario

  useEffect(() => {
    conseguirPartidos();
  }, []);

  const conseguirPartidos = async () => {
    const { datos, cargando } = await Peticion(Global.url + "partidos", "GET");

    if (datos.status === "success") {
      setPartidos(datos.partidos);
    }

    console.log(datos)
    console.log(setPartidos)
  };

  const guardarPronostico = async (e) => {
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


  return (

    <div className='inicio'>
      inicio
      <section className="content">

        {partidos.map((partido) => {
          return (

            <article className="partidos" key={partido.Id_Partidos} >
              <div className="fecha-grupo">
                <h4 className='grupo'>{"Grupo: " + partido.Grupo}</h4>
                <p>{partido.Fecha} <br /> {partido.Hora}</p>
              </div>

              <div className='partidos-mundial'>
                <p className='local'>{partido.Local}</p>

                {/* <p className='vs'>{partido.Gol_local != null ? partido.Gol_local + "-" + partido.Gol_Visitante : "vs"}</p> */}

                <p className="visitante">{partido.Visitante}</p>
              </div>
              
              <form className='apuestas'>
                <input type="number" />
                <label >VS</label>
                <input type="number"/>
              </form>
              <button>Guardar pronostico</button>
            </article>
          )
        })
        }
      </section>
    </div>


  )
}

export default Apuestas
