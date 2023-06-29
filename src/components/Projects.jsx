import React from "react";

const Projects = () => {
  return (
    <main className="portfolio container" id="projects">
      <h2>Proyectos</h2>

      <div className="portfolio-content">
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
            <a href="#" className="btn-1">
              Repositorio
            </a>
          </div>
          <div className="portfolio-img">
            <img src="" alt="Pokemon App" />
          </div>
        </div>
        <div className="portfolio-1">
          <div className="portfolio-img">
            <img src="" alt="EcoSun E-commerce" />
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
              Repositorio
            </a>
          </div>
        </div>
        <div className="portfolio-1">
          <div className="portfolio-txt">
            <span>Desarrollador Full Stack</span>
            <h3>Videogames App - En desarrollo</h3>
            <p>
              Diseñar y desarrollar una App de Videojuegos, consumiendo la API
              de rawg.io, realizado con las siguientes tecnologías: <br />
              ●Back: NodeJs, Express. <br />
              ●Front: React, Redux, CSS. <br />
              ●Base de datos: PostgreSQL. <br />
              ●ORM: Sequelize.
            </p>
            <a href="#" className="btn-1">
              Repositorio
            </a>
          </div>
          <div className="portfolio-img">
            <img src="" alt="Videogames App" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
