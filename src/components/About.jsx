import React from "react";
import Henry from "/Henry Full Stack Web Developer Certificate.pdf";
import EFSET from "/EF SET Certificate.pdf";

const About = () => {
  return (
    <section className="about container">
      <div className="about-img">
        <img src="/imgs/Perfil 1.jpg" />
      </div>
      <div className="about-txt" id="about">
        <h2>Sobre mi</h2>
        <p>
          Hola, mi nombre es Maximiliano Failla. Me inicie en la programación
          realizando el curso de desarrollador Full Stack en Henry.
          <br />
          Me considero una persona organizada y responsable. Me gustan los
          desafíos y el trabajo en equipo, soy fanático de los videojuegos y la
          tecnología.
          <br />
          Trabaje 2 años como asistente de taller mecánico, sobre todo en
          atención al cliente.
        </p>
        <div className="butons">
          <a href={Henry} className="btn-1" target="_blank">
            Certificado Bootcamp
          </a>
          <a href={EFSET} className="btn-1" target="_blank">
            Certificado EFSET
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
