import React from "react";
import html from "/imgs/icons/html.png";
import css from "/imgs/icons/css.png";
import js from "/imgs/icons/js.png";
import react from "/imgs/icons/react.png";
import redux from "/imgs/icons/redux.png";
import node from "/imgs/icons/node.png";
import express from "/imgs/icons/express.png";
import sequelize from "/imgs/icons/sequelize.png";
import postgre from "/imgs/icons/postgre.png";
import github from "/imgs/icons/github.png";
import slack from "/imgs/icons/slack.png";
import dc from "/imgs/icons/dc.png";

const Skills = () => {
  return (
    <section id="tech" className="skills container">
      <h2>Tecnologías y herramientas</h2>
      <div className="skills-content">
        <img src={html} alt="html" />
        <img src={css} />
        <img src={js} />
        <img src={react} />
        <img src={redux} />
        <img src={node} />
        <img src={express} />
        <img src={sequelize} />
        <img src={postgre} />
        <img src={github} />
        <img src={slack} />
        <img src={dc} />
      </div>
    </section>
  );
};

export default Skills;
