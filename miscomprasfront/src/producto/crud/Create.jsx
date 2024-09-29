import { useState } from "react";
import Producto from "../Producto";

function Create() {
  const [nombre, setNombre] = useState("");
  const [codigo_barras, setCodigobarras] = useState("");
  const [precio_venta, setPrecioventa] = useState("");
  const [cantidad_stock, setCantidadstock] = useState("");
  const [estado, setEstado] = useState("");
  const [id, setId] = useState("");
  const [vista, setVista] = useState("crear");

  if (vista === "back") {
    return <Producto />;
  }

  const createProducto = async (event) => {
    event.preventDefault();

    const producto = {
      nombre,
      codigo_barras,
      precio_venta: parseFloat(precio_venta),
      cantidad_stock: parseInt(cantidad_stock),
      estado: parseInt(estado),
      categoria: {
        id,
      },
    };

    try {
      const response = await fetch("/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("Producto añadido con exito");
      setNombre("");
      setCodigobarras("");
      setPrecioventa("");
      setCantidadstock("");
      setEstado("");
      setId("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>CREAR</h1>
      <form className="formulario form-cli" onSubmit={createProducto}>
        <div className="form-iz">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="codigo_barras">Cod Barras:</label>
          <input
            type="text"
            id="codigo_barras"
            value={codigo_barras}
            onChange={(e) => setCodigobarras(e.target.value)}
            required
          />
          <label htmlFor="precio_venta">Precio Venta:</label>
          <input
            type="text"
            id="precio_venta"
            value={precio_venta}
            onChange={(e) => setPrecioventa(e.target.value)}
            required
          />
        </div>
        <div className="form-der">
          <label htmlFor="cantidad_stock">Cantidad Stock:</label>
          <input
            type="text"
            id="cantidad_stock"
            value={cantidad_stock}
            onChange={(e) => setCantidadstock(e.target.value)}
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
          <label htmlFor="id">ID Categoria:</label>
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

export default Create;
