import { useEffect, useState } from "react";
import Compra from "../Compra";

function Search() {
  const [compras, setCompras] = useState([]);
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const searchCompras = async () => {
      try {
        const response = await fetch("/api/compras");
        const data = await response.json();
        setCompras(data);
      } catch (error) {
        console.error("Error buscando: ", error);
      }
    };
    searchCompras();
  }, []);

  if (vista === "back") {
    return <Compra />;
  }

  const deleteCompra = async (id, event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/compras/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      const newCompras = [];
      for (const compra of compras) {
        if (compra.id !== id) {
          newCompras.push(compra);
        }
      }
      setCompras(newCompras);
    } catch (error) {
      console.error("Error: ", error);
      alert("Error: La compra esta en uso");
    }
  };

  return (
    <div className="container">
      <h1>SEARCH ALL</h1>
      <ul className="container-cat">
        {compras.map((compra) => (
          <li className="cat" key={compra.id}>
            Id: {compra.id} <br />
            Fecha: {compra.fecha} <br />
            Medio Pago: {compra.medio_pago} <br />
            Comentario: {compra.comentario} <br />
            Estado: {compra.estado} <br />
            Cliente: {compra.cliente.id}
            <button
              type="button"
              className="delete"
              onClick={(event) => deleteCompra(compra.id, event)}
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
