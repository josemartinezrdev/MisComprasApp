import { useEffect, useState } from "react";
import Producto from "../Producto";

function Search() {
  const [productos, setProductos] = useState([]);
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const searchProductos = async () => {
      try {
        const response = await fetch("/api/productos");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error buscando: ", error);
      }
    };
    searchProductos();
  }, []);

  if (vista === "back") {
    return <Producto />;
  }

  const deleteProducto = async (id, event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/productos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      const newProductos = [];
      for (const producto of productos) {
        if (producto.id !== id) {
          newProductos.push(producto);
        }
      }
      setProductos(newProductos);
    } catch (error) {
      console.error("Error: ", error);
      alert("Error: El producto esta en uso");
    }
  };

  return (
    <div className="container">
      <h1>SEARCH ALL</h1>
      <ul className="container-cat">
        {productos.map((producto) => (
          <li className="cat" key={producto.id}>
            Id: {producto.id} <br />
            Nombre: {producto.nombre} <br />
            Cod Barras: {producto.codigo_barras} <br />
            Precio: {producto.precio_venta} <br />
            Stock: {producto.cantidad_stock} <br />
            Estado: {producto.estado} <br />
            ID Categoria: {producto.categoria.id}
            <button
              type="button"
              className="delete"
              onClick={(event) => deleteProducto(producto.id, event)}
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
