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
    <section
      id="tech"
      className="skills container animate__animated animate__zoomInDown"
    >
      <h2>Tecnologías y herramientas</h2>
      <div className="skills-content">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={node} alt="node" />
        <img src={express} alt="express" />
        <img src={sequelize} alt="sequelize" />
        <img src={postgre} alt="postgre" />
        <img src={github} alt="github" />
        <img src={slack} alt="slack" />
        <img src={dc} alt="dc" />
      </div>
    </section>
  );
};

export default Skills;
