import "../categoria.css";
import { useState } from "react";
import Categoria from "../Categoria";

function Crear() {
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");
  const [vista, setVista] = useState("update");

  if (vista === "back") {
    return <Categoria />;
  }

  const updateCategoria = async (event) => {
    event.preventDefault();

    const categoria = {
      id,
      descripcion,
      estado: parseInt(estado),
    };

    try {
      const response = await fetch(`/api/categorias/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria),
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("Categoria actualizada con exito");
      setDescripcion("");
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
      <div className="contenido">
        <div className="container-btns-up">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button
            className="btn-form send"
            type="button"
            onClick={updateCategoria}
          >
            Save
          </button>
          <button className="btn-form send" onClick={() => setVista("back")}>
            Back
          </button>
        </div>
        <form className="formulario">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default Crear;
