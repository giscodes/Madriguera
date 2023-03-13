import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo( () => {
  return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"href="#"role="button"data-bs-toggle="dropdown"aria-expanded="false">
          Qué encontrarás?
        </a>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/Calderos'}>Calderos</Link></li>
            <li><Link className="dropdown-item" to={'/category/Grimorios'}>Grimorios</Link></li>
            <li><Link className="dropdown-item" to={'/category/Objetos'}>Objetos</Link></li>
        </ul>
      </li>    
  );
});
