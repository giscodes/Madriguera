import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";
import { Link } from "react-router-dom";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode"

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";
export const Navbar = ({ nombre }) => {
const {darkMode} = useDarkModeContext()

  return (
    <div className="navContainer">
     <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-primary" : "bg-light"}`}>
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
            <BotonDarkMode/>
          </div>
        </div>
      </nav>
    </div>
  );
};