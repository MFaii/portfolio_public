import React from "react";
import CV from "/Maximiliano Failla CV.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="menu container animate__animated animate__fadeInDownBig">
        <a href="#" className="logo" id="home">
          {`{MF}`}
        </a>
        <input type="checkbox" id="menu" />
        <label for="menu">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/392/001/non_2x/app-menu-icon-sign-symbol-design-free-png.png"
            className="menu-icono"
            alt="menu"
          />
        </label>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#tech">Tecnologías</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-content container">
        <div className="header-txt">
          <span className="animate__animated animate__bounceInDown">Soy</span>
          <h1 className="animate__animated animate__bounceInLeft">
            Desarrollador Web Full Stack
          </h1>
          <div className="butons animate__animated animate__fadeInBottomRight">
            <a href={CV} className="btn-1" download target="_blank">
              CV - Descargar
            </a>
            <a href={CV} className="btn-1" target="_blank">
              CV - Ver online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
