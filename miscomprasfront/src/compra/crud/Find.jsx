import { useState } from "react";
import Compra from "../Compra";

function Find() {
  const [compra, setCompra] = useState({
    id: "",
    fecha: "",
    medio_pago: "",
    comentario: "",
    estado: "",
    cliente: {
      id: "",
    },
  });

  const [id, setId] = useState("");
  const [vista, setVista] = useState("find");

  const findCompras = async () => {
    try {
      const response = await fetch(`/api/compras/${id}`);
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
      const data = await response.json();
      setCompra(data);
      setId("");
    } catch (error) {
      alert("Error");
      console.error("Error buscando: ", error);
    }
  };

  if (vista === "back") {
    return <Compra />;
  }

  return (
    <div className="container-byid">
      <h1 className="title-byid">FIND BY ID</h1>
      <div className="info-div">
        <label htmlFor="">ID</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button className="btn-form find" onClick={findCompras}>
          Find
        </button>
      </div>
      <ul className="container-cat-byid">
        <li className="cat">
          Id: {compra.id} <br />
          Fecha: {compra.fecha} <br />
          Medio Pago: {compra.medio_pago} <br />
          Comentario: {compra.comentario} <br />
          Estado: {compra.estado} <br />
          Cliente: {compra.cliente.id}
        </li>
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Find;
