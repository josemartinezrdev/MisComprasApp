import "../cliente.css";
import { useEffect, useState } from "react";
import Cliente from "../Cliente";

function Search() {
  const [clientes, setClientes] = useState([]);
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const searchClientes = async () => {
      try {
        const response = await fetch("/api/clientes");
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Error buscando: ", error);
      }
    };
    searchClientes();
  }, []);

  if (vista === "back") {
    return <Cliente />;
  }

  const deleteCliente = async (id, event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/clientes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }

      const newClientes = [];
      for (const cliente of clientes) {
        if (cliente.id !== id) {
          newClientes.push(cliente);
        }
      }
      setClientes(newClientes);
    } catch (error) {
      console.error("Error: ", error);
      alert("Error: La cliente esta en uso");
    }
  };

  return (
    <div className="container">
      <h1>SEARCH ALL</h1>
      <ul className="container-cat">
        {clientes.map((cliente) => (
          <li className="cat" key={cliente.id}>
            Id: {cliente.id} <br />
            Name: {cliente.name} <br />
            Apellido: {cliente.apellido} <br />
            Celular: {cliente.celular} <br />
            Direccion: {cliente.direccion} <br />
            Correo: {cliente.correo_electronico}
            <button
              type="button"
              className="delete"
              onClick={(event) => deleteCliente(cliente.id, event)}
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
