import { useState } from "react";
import CompraProducto from "../CompraProducto";

function Create() {
  const [idcompra, setIdcompra] = useState("");
  const [idproducto, setIdproducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [total, setTotal] = useState("");
  const [estado, setEstado] = useState("");
  const [vista, setVista] = useState("crear");

  if (vista === "back") {
    return <CompraProducto />;
  }

  const createCompraProducto = async (event) => {
    event.preventDefault();

    const compraproducto = {
      id: {
        idcompra,
        idproducto,
      },
      cantidad: parseInt(cantidad),
      total: parseFloat(total),
      estado: parseInt(estado),
    };

    try {
      const response = await fetch("/api/comprasproductos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compraproducto),
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      alert("CompraProducto añadido con exito");
      setIdcompra("");
      setIdproducto("");
      setCantidad("");
      setTotal("");
      setEstado("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>CREAR</h1>
      <form className="formulario form-cli" onSubmit={createCompraProducto}>
        <div className="form-iz">
          <label htmlFor="idcompra">ID Compra:</label>
          <input
            type="text"
            id="idcompra"
            value={idcompra}
            onChange={(e) => setIdcompra(e.target.value)}
            required
          />
          <label htmlFor="codigo_barras">ID Producto:</label>
          <input
            type="text"
            id="idproducto"
            value={idproducto}
            onChange={(e) => setIdproducto(e.target.value)}
            required
          />
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="text"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <div className="form-der">
          <label htmlFor="total">Total:</label>
          <input
            type="text"
            id="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
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
