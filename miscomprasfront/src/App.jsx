import "./App.css";
import { useState } from "react";
import Categoria from "./categoria/Categoria";
import Cliente from "./cliente/Cliente";
import Compra from "./compra/Compra";
import Producto from "./producto/Producto";
import CompraProducto from "./compraproducto/CompraProducto";

function App() {
  const [vista, setVista] = useState("inicio");

  switch (vista) {
    case "categoria":
      return <Categoria />;
    case "cliente":
      return <Cliente />;
    case "compra":
      return <Compra />;
    case "producto":
      return <Producto />;
    case "compraproducto":
      return <CompraProducto />;
    default:
      break;
  }

  return (
    <>
      <div className="container">
        {vista === "inicio" ? (
          <>
            <h1 className="title">MIS COMPRAS APP</h1>
            <button className="inicio" onClick={() => setVista("crud")}>
              Iniciar
            </button>
          </>
        ) : (
          <div className="container-btns">
            <h1 className="title-crud">CRUD</h1>
            <button className="btn" onClick={() => setVista("categoria")}>
              Crud Categorias
            </button>
            <button className="btn" onClick={() => setVista("cliente")}>
              Crud Cliente
            </button>
            <button className="btn" onClick={() => setVista("compra")}>
              Crud Compras
            </button>
            <button className="btn" onClick={() => setVista("producto")}>
              Crud Productos
            </button>
            <button className="btn" onClick={() => setVista("compraproducto")}>
              Crud Compras Productos
            </button>
            <button className="btn" onClick={() => setVista("inicio")}>
              Salir
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
