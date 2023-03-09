import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo( () => {
  let categorias = [
    {
      nombre: "Calderos",
      id: 1
    },
    {
      nombre: "Grimorios",
      id: 2
    },
    {
      nombre: "Objetos",
      id: 3
    }

  ]
  return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"href="#"role="button"data-bs-toggle="dropdown"aria-expanded="false">
          Qué encontrarás?
        </a>
        <ul className="dropdown-menu">
        {
          categorias.map((el) => {
            return (
              <li key={el.id}>
                <Link className="dropdown-item" to={`/category/${el.nombre}`}>{el.nombre}</Link>
              </li>
            )
          })
        }
        </ul>
      </li>    
  );
});

