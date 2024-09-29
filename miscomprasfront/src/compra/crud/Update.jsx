import { useState } from "react";
import Categoria from "../Compra";

function Crear() {
  const [oldid, setOldid] = useState("");
  const [fecha, setFecha] = useState("");
  const [medio_pago, setMediopago] = useState("");
  const [comentario, setComentario] = useState("");
  const [estado, setEstado] = useState("");
  const [id, setId] = useState("");
  const [vista, setVista] = useState("update");

  if (vista === "back") {
    return <Categoria />;
  }

  const updateCompra = async (event) => {
    event.preventDefault();

    const compra = {
      fecha,
      medio_pago,
      comentario,
      estado,
      cliente: {
        id,
      },
    };

    try {
      const response = await fetch(`/api/compras/${oldid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compra),
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("Compra actualizado con exito");
      setOldid("");
      setFecha("");
      setMediopago("");
      setComentario("");
      setEstado("");
      setId("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>ACTUALIZAR</h1>
      <form className="formulario form-cli" onSubmit={updateCompra}>
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
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="text"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <label htmlFor="medio_pago">Medio Pago:</label>
          <input
            type="text"
            id="medio_pago"
            value={medio_pago}
            onChange={(e) => setMediopago(e.target.value)}
            required
          />
          <label htmlFor="comentario">Comentario:</label>
          <input
            type="text"
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          />
        </div>
        <div className="form-der">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <label htmlFor="id">ID Cliente:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
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