import { useState } from "react";
import CompraProducto from "../CompraProducto";

function Find() {
  const [compraproducto, setCompraProducto] = useState({
    id: {
      idcompra: "",
      idproducto: "",
    },
    cantidad: "",
    total: "",
    estado: "",
  });

  const [idCompra, setIdCompra] = useState("");
  const [idProducto, setIdProducto] = useState("");
  const [vista, setVista] = useState("find");

  const findCompraProductos = async () => {
    try {
      const response = await fetch(
        `/api/comprasproductos/${idCompra}/${idProducto}`
      );
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
      const data = await response.json();
      setCompraProducto(data);
      setIdCompra("");
      setIdProducto("");
    } catch (error) {
      alert("Error");
      console.error("Error buscando: ", error);
    }
  };

  if (vista === "back") {
    return <CompraProducto />;
  }

  return (
    <div className="container-byid">
      <h1 className="title-byid">FIND BY ID</h1>
      <div className="info-div">
        <label htmlFor="">ID Compra:</label>
        <input
          type="text"
          id="idCompra"
          value={idCompra}
          onChange={(e) => setIdCompra(e.target.value)}
          required
        />
        <label htmlFor="">ID Producto</label>
        <input
          type="text"
          id="idProducto"
          value={idProducto}
          onChange={(e) => setIdProducto(e.target.value)}
          required
        />
        <button className="btn-form find" onClick={findCompraProductos}>
          Find
        </button>
      </div>
      <ul className="container-cat-byid">
        <li className="cat">
          Id Compra: {compraproducto.id.idcompra} <br />
          Id Producto: {compraproducto.id.idproducto} <br />
          Cantidad: {compraproducto.cantidad} <br />
          Total: {compraproducto.total} <br />
          Estado: {compraproducto.estado}
        </li>
      </ul>
      <button className="btn-form btn-bot" onClick={() => setVista("back")}>
        Back
      </button>
    </div>
  );
}

export default Find;
