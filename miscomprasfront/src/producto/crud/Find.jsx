import { useState } from "react";
import Producto from "../Producto";

function Find() {
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    codigo_barras: "",
    precio_venta: "",
    cantidad_stock: "",
    estado: "",
    categoria: {
      id: "",
    },
  });

  const [id, setId] = useState("");
  const [vista, setVista] = useState("find");

  const findProductos = async () => {
    try {
      const response = await fetch(`/api/productos/${id}`);
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
      const data = await response.json();
      setProducto(data);
      setId("");
    } catch (error) {
      alert("Error");
      console.error("Error buscando: ", error);
    }
  };

  if (vista === "back") {
    return <Producto />;
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
        <button className="btn-form find" onClick={findProductos}>
          Find
        </button>
      </div>
      <ul className="container-cat-byid">
        <li className="cat">
          Id: {producto.id} <br />
          Nombre: {producto.nombre} <br />
          Cod Barras: {producto.codigo_barras} <br />
          Precio: {producto.precio_venta} <br />
          Stock: {producto.cantidad_stock} <br />
          Estado: {producto.estado} <br />
          ID Categoria: {producto.categoria.id}
        </li>
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Find;
