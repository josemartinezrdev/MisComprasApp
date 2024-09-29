import "../cliente.css";
import { useState } from "react";
import Cliente from "../Cliente";

function Find() {
  const [cliente, setCliente] = useState({
    id: "",
    name: "",
    apellido: "",
    celular: null,
    direccion: "",
    correo_electronico: "",
  });

  const [id, setId] = useState("");
  const [vista, setVista] = useState("find");

  const findClientes = async () => {
    try {
      const response = await fetch(`/api/clientes/${id}`);
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
      const data = await response.json();
      setCliente(data);
      setId("");
    } catch (error) {
      alert("Error");
      console.error("Error buscando: ", error);
    }
  };

  if (vista === "back") {
    return <Cliente />;
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
        <button className="btn-form find" onClick={findClientes}>
          Find
        </button>
      </div>
      <ul className="container-cat-byid">
        <li className="cat">
          Id: {cliente.id} <br />
          Name: {cliente.name} <br />
          Apellido: {cliente.apellido} <br />
          Celular: {cliente.celular} <br />
          Direccion: {cliente.direccion} <br />
          Correo: {cliente.correo_electronico}
        </li>
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Find;
