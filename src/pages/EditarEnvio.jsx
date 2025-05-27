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

  function editarEnvio() {}

  return (
    <form className="form">
      Sign Up
      <input value={envio} type="text" className="input" placeholder="Id envio" />
      <input value={producto} type="text" className="input" placeholder="Producto" />
      <input value={destino} type="text" className="input" placeholder="Destino" />
      <button type="button">Submit</button>
    </form>
  );
};

export default EditarEnvio;
