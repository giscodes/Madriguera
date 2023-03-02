import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";
import { Link } from "react-router-dom";
export const Navbar = ({ nombre }) => {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className ="nav-brand">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              <button className="brand">{nombre}</button>
            </Link>
          </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Secciones />
              <Categorias />
            </ul>
            <CartWidget cantCarrito={10} />
          </div>
        </div>
      </nav>
    </div>
  );
};