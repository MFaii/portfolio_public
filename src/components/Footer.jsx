import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="link">
          <h3>Navegar</h3>
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
          </ul>
        </div>

        <div className="link">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="mailto:faillamaximiliano@gmail.com" target="_blank">
                Mail
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maximilianofailla/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/MFaii" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://walink.co/110fc4" target="_blank">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
