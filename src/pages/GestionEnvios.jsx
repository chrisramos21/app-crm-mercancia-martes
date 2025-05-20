import { useEffect, useState } from "react";
let apiEnvios = "https://back-json-server-martes.onrender.com/envios";

function GestionEnvios() {
  const [envios, setEnvios] = useState([]);
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  function getEnvios() {
    fetch(apiEnvios)
      .then((response) => response.json())
      .then((data) => setEnvios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getEnvios();
}, []);

  function filtrarEnviosUsuario() {
    let enviosFiltrados = envios.filter((item) => item.usuarioId == usuarioLogueado.id);
    console.log(enviosFiltrados);
    return enviosFiltrados;
  }

  let enviosFiltrados = filtrarEnviosUsuario();
  return(
    <div className="cards">
        {
            enviosFiltrados.map((item) =>(
                <div className="card">
                    <p>Id Envío: {item.idEnvio}</p>
                    <p>Nombre cliente: {usuarioLogueado.nombre}</p>
                    <p>Producto: {item.producto} </p>
                    <p>Destino: {item.destino}</p>
                    <div>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </div>

                </div>
            ))
        }
    </div>
  )
  
}

export default GestionEnvios;
