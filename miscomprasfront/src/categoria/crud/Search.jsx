import "../categoria.css";
import { useEffect, useState } from "react";
import Categoria from "../Categoria";

function Search() {
  const [categorias, setCategorias] = useState([]);
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const searchCategorias = async () => {
      try {
        const response = await fetch("/api/categorias");
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Error buscando: ", error);
      }
    };
    searchCategorias();
  }, []);

  if (vista === "back") {
    return <Categoria />;
  }

  const deleteCategoria = async (id, event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/categorias/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      const newCategorias = [];
      for (const categoria of categorias) {
        if (categoria.id !== id) {
          newCategorias.push(categoria);
        }
      }
      setCategorias(newCategorias);
    } catch (error) {
      console.error("Error: ", error);
      alert("Error: La categoria esta en uso");
    }
  };

  return (
    <div className="container">
      <h1>SEARCH ALL</h1>
      <ul className="container-cat">
        {categorias.map((categoria) => (
          <li className="cat" key={categoria.id}>
            Id: {categoria.id} <br />
            Desc: {categoria.descripcion} <br />
            Estado: {categoria.estado}
            <button
              type="button"
              className="delete"
              onClick={(event) => deleteCategoria(categoria.id, event)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Search;
