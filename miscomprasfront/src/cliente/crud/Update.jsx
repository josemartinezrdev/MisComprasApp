import "../cliente.css";
import { useState } from "react";
import Categoria from "../Cliente";

function Crear() {
  const [oldid, setOldid] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo_electronico, setCorreo] = useState("");
  const [vista, setVista] = useState("update");

  if (vista === "back") {
    return <Categoria />;
  }

  const updateCliente = async (event) => {
    event.preventDefault();

    const cliente = {
      id,
      name,
      apellido,
      celular: parseFloat(celular),
      direccion,
      correo_electronico,
    };

    try {
      const response = await fetch(`/api/clientes/${oldid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });
      console.log(cliente);
      console.log(oldid);

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("Cliente actualizado con exito");
      setOldid("");
      setId("");
      setName("");
      setApellido("");
      setCelular("");
      setDireccion("");
      setCorreo("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>ACTUALIZAR</h1>
      <form className="formulario form-cli" onSubmit={updateCliente}>
        <div className="centro">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={oldid}
            onChange={(e) => setOldid(e.target.value)}
            required
          />
        </div>
        <div className="form-iz">
          <label htmlFor="id">NEW ID:</label>
          <input
            type="text"
            id="newid"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="form-der">
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
          <label htmlFor="direccion">Direccion:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <label htmlFor="correo_electronico">Correo:</label>
          <input
            type="correo_electronico"
            id="correo_electronico"
            value={correo_electronico}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <button className="btn-form send" type="submit">
          Save
        </button>
        <button className="btn-form" onClick={() => setVista("back")}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Crear;
