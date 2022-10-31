export const Peticion = async (url, metodo, datosGuardar = "", archivos) => {
  let cargando = true;

  let opciones = {
    method: "GET",
  };

  if (metodo == "GET" || metodo == "DELETE") {
    opciones = {
      method: metodo,
    };
  }

  if (metodo == "POST" || metodo == "PUT") {
    opciones = {
      method: metodo,
      body: JSON.stringify(datosGuardar),
      headers: {
        "Content-Type": "application/json",
      },
    };



  }
  console.log(opciones)
  const peticion = await fetch(url, opciones);

  const datos = await peticion.json();
  console.log(datos);
  cargando = false;

  return {
    datos,
    cargando
  };
};
