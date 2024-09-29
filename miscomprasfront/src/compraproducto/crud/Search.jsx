import { useEffect, useState } from "react";
import CompraProducto from "../CompraProducto";

function Search() {
  const [compraproductos, setCompraProductos] = useState([]);
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const searchCompraProductos = async () => {
      try {
        const response = await fetch("/api/comprasproductos");
        const data = await response.json();
        setCompraProductos(data);
      } catch (error) {
        console.error("Error buscando: ", error);
      }
    };
    searchCompraProductos();
  }, []);

  if (vista === "back") {
    return <CompraProducto />;
  }

  const deleteCompraProducto = async (idcompra, idproducto, event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/comprasproductos/${idcompra}/${idproducto}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      const newCompraProductos = [];
      for (const compraproducto of compraproductos) {
        if (
          compraproducto.id.idcompra !== idcompra &&
          compraproducto.id.idproducto !== idproducto
        ) {
          newCompraProductos.push(compraproducto);
        }
      }
      setCompraProductos(newCompraProductos);
    } catch (error) {
      console.error("Error: ", error);
      alert("Error: El compraproducto esta en uso");
    }
  };

  return (
    <div className="container">
      <h1>SEARCH ALL</h1>
      <ul className="container-cat">
        {compraproductos.map((compraproducto) => (
          <li className="cat" key={compraproducto.id.idcompra}>
            Id Compra: {compraproducto.id.idcompra} <br />
            Id Producto: {compraproducto.id.idproducto} <br />
            Cantidad: {compraproducto.cantidad} <br />
            Total: {compraproducto.total} <br />
            Estado: {compraproducto.estado}
            <button
              type="button"
              className="delete"
              onClick={(event) =>
                deleteCompraProducto(
                  compraproducto.id.idcompra,
                  compraproducto.id.idproducto,
                  event
                )
              }
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
