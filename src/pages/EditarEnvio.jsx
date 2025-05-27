import "./EditarEnvio.css";
import { useEffect, useState } from "react";
import { alertaRedireccion, alertaGeneral } from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";
let apiEnvio = "https://back-json-server-martes.onrender.com/envios/";

const EditarEnvio = () => {
  const [envio, setEnvio] = useState("");
  const [producto, setProducto] = useState("");
  const [destino, setDestino] = useState("");
  let redireccion = useNavigate();
  let { id } = useParams(); /*Desestructuración de objetos */

  function getEnvioId() {
    fetch(apiEnvio + id)
      .then((response) => response.json())
      .then((data) => {
        setEnvio(data.idEnvio);
        setProducto(data.producto);
        setDestino(data.destino);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getEnvioId();
  }, []);

  function editarEnvio() {
    let envioEditado = {
      idEnvio: envio,
      producto: producto,
      destino: destino
    };
    fetch(apiEnvio + id, {
      method: "PATCH",
      body: JSON.stringify(envioEditado),
    })
      .then(() =>
        alertaRedireccion(
          redireccion,
          "Registro editado correctamente",
          "/home/envios"
        )
      )
      .catch(() => alertaGeneral("error", "No se pudo editar", "error"));
  }

  return (
    <form className="form">
      Sign Up
      <input
        onChange={(e) => setEnvio(e.target.value)}
        value={envio}
        type="text"
        className="input"
        placeholder="Id envio"
      />
      <input
        onChange={(e) => setProducto(e.target.value)}
        value={producto}
        type="text"
        className="input"
        placeholder="Producto"
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        value={destino}
        type="text"
        className="input"
        placeholder="Destino"
      />
      <button onClick={editarEnvio} type="button">Submit</button>
    </form>
  );
};

export default EditarEnvio;
