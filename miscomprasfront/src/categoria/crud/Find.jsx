import "../categoria.css";
import { useState } from "react";
import Categoria from "../Categoria";

function Find() {
  const [categoria, setCategoria] = useState({
    id: null,
    descripcion: "",
    estado: null,
  });

  const [id, setId] = useState("");
  const [vista, setVista] = useState("find");

  const findCategorias = async () => {
    try {
      const response = await fetch(`/api/categorias/${id}`);
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
      const data = await response.json();
      setCategoria(data);
      setId("");
    } catch (error) {
      alert("Error");
      console.error("Error buscando: ", error);
    }
  };

  if (vista === "back") {
    return <Categoria />;
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
        <button className="btn-form find" onClick={findCategorias}>
          Find
        </button>
      </div>
      <ul className="container-cat-byid">
        <li className="cat">
          Id: {categoria.id} <br />
          Desc: {categoria.descripcion} <br />
          Estado: {categoria.estado}
        </li>
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Find;
