import React from "react";
import "../style/navbar.css";
import logo from "../image/Logo1.png";

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <header className="header">
          <div className="logo-area">
            <img src={logo} alt="Logo" />
            <div className="Nombre">
              <h2>SEGURILABS</h2>
              <span>Seguridad y salud laboral</span>
            </div>
          </div>

          <nav className="menu">
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Servicios</a>
            <a href="#" className="cta">
              Contacto
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
