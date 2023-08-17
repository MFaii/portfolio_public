import React from "react";
import ecosun from "/imgs/ecosun.png";
import pokeapp from "/imgs/pokeapp.png";
import videogames from "/imgs/videogames.png";
import webchat from "/imgs/webchat.png";

const Projects = () => {
  return (
    <main className="portfolio container" id="projects">
      <h2 className="animate__animated animate__zoomIn">Proyectos</h2>

      <div className="portfolio-content animate__animated animate__lightSpeedInRight">
        <div className="portfolio-1">
          <div className="portfolio-txt">
            <span>Desarrollador Full Stack</span>
            <h3>Pokemon App - Proyecto individual</h3>
            <p>
              Diseñar y desarrollar una App de Pokemon,consumiendo la API de
              pokeapi.co, realizado con las siguientes tecnologías: <br />
              ●Back: NodeJs, Express. <br />
              ●Front: React, Redux, CSS. <br />
              ●Base de datos: PostgreSQL. <br />
              ●ORM: Sequelize.
            </p>
            <a
              href="https://github.com/MFaii/PI-Pokemon"
              target="_blank"
              className="btn-1"
            >
              Repositorio
            </a>
          </div>
          <div className="portfolio-img">
            <img src={pokeapp} alt="Pokemon App" />
          </div>
        </div>
        <div className="portfolio-1">
          <div className="portfolio-img">
            <img src={ecosun} alt="EcoSun E-commerce" />
          </div>
          <div className="portfolio-txt">
            <span>Desarrollador back-end</span>
            <h3>EcoSun E-commerce</h3>
            <p>
              Proyecto en grupo que consiste en la creación de un E-commerce de
              Paneles Solares y sus respectivos accesorios, realizado con las
              siguientes tecnologías:
              <br />
              ●Back: NodeJs, Express, JWT. <br />
              ●Front: React, Redux Toolkit, CSS. <br />
              ●Base de datos: PostgreSQL. <br />
              ●ORM: Sequelize.
            </p>
            <a href="#" className="btn-1">
              Repositorio no disponible
            </a>
          </div>
        </div>
        <div className="portfolio-1">
          <div className="portfolio-txt">
            <span>Desarrollador Full Stack</span>
            <h3>Videogames App</h3>
            <p>
              Diseñar y desarrollar una App de Videojuegos, consumiendo la API
              de rawg.io, realizado con las siguientes tecnologías: <br />
              ●Back: NodeJs, Express. <br />
              ●Front: React, Redux, CSS. <br />
              ●Base de datos: PostgreSQL. <br />
              ●ORM: Sequelize.
            </p>
            <a
              href="https://github.com/MFaii/PI-Videogames"
              target="_blank"
              className="btn-1"
            >
              Repositorio
            </a>
          </div>
          <div className="portfolio-img">
            <img src={videogames} alt="Videogames App" />
          </div>
        </div>
        <div className="portfolio-1">
          <div className="portfolio-img">
            <img src={webchat} alt="WebChat" />
          </div>
          <div className="portfolio-txt">
            <span>Desarrollador back-end</span>
            <h3>WebSocket Chat</h3>
            <p>
              Proyecto en grupo que consiste en la creación de un chat en tiempo
              real usando socket.io, realizado con las siguientes tecnologías:
              <br />
              ●Back: NodeJs, Express, JWT. <br />
              ●Front: React, Redux, CSS, Bootstrap. <br />
              ●Base de datos: PostgreSQL. <br />
              ●ORM: Sequelize.
            </p>
            <a
              href="https://github.com/Nikire/WebSocketChat"
              className="btn-1"
              target="_blank"
            >
              Repositorio back-end
            </a>
            <a
              href="https://github.com/Nikire/WebSocketChatFE"
              className="btn-1"
              target="_blank"
            >
              Repositorio front-end
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
