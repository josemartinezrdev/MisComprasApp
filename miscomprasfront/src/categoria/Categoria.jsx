import App from "../App";
import "./categoria.css";
import { useState } from "react";
import Create from "./crud/Create";
import Update from "./crud/Update";
import Search from "./crud/Search";
import Find from "./crud/Find";

function Categoria() {
  const [vista, setVista] = useState("form");

  switch (vista) {
    case "inicio":
      return <App />;
    case "crear":
      return <Create />;
    case "update":
      return <Update />;
    case "search":
      return <Search />;
    case "find":
      return <Find />;
    default:
      break;
  }

  return (
    <>
      <div className="container">
        <div className="container-btns">
          <h1 className="title-crud">CRUD CATEGORIA</h1>
          <button className="btn" onClick={() => setVista("crear")}>
            Crear
          </button>
          <button className="btn" onClick={() => setVista("update")}>
            Actualizar
          </button>
          <button className="btn" onClick={() => setVista("search")}>
            Buscar
          </button>
          <button className="btn" onClick={() => setVista("find")}>
            Buscar Id
          </button>
          <button className="btn btn-exit" onClick={() => setVista("inicio")}>
            Salir
          </button>
        </div>
      </div>
    </>
  );
}

export default Categoria;
