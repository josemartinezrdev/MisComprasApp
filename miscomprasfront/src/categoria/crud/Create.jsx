import "../categoria.css";
import { useState } from "react";
import Categoria from "../Categoria";

function Create() {
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");
  const [vista, setVista] = useState("crear");

  if (vista === "back") {
    return <Categoria />;
  }

  const createCategoria = async (event) => {
    event.preventDefault();

    const categoria = {
      descripcion,
      estado: parseInt(estado),
    };

    try {
      const response = await fetch("/api/categorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria),
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("Categoria añadida con exito");
      setDescripcion("");
      setEstado("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>CREAR</h1>
      <form className="formulario" onSubmit={createCategoria}>
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
        <button className="btn-form send" type="submit">
          Save
        </button>
        <button className="btn-form send" onClick={() => setVista("back")}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Create;
