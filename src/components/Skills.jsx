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
  const icons = [
    {
      name: "html",
      img: html,
    },
    {
      name: "css",
      img: css,
    },
    {
      name: "js",
      img: js,
    },
    {
      name: "react",
      img: react,
    },
    {
      name: "redux",
      img: redux,
    },
    {
      name: "node",
      img: node,
    },
    {
      name: "express",
      img: express,
    },
    {
      name: "sequelize",
      img: sequelize,
    },
    {
      name: "postgresql",
      img: postgre,
    },
    {
      name: "github",
      img: github,
    },
    {
      name: "slack",
      img: slack,
    },
    {
      name: "dc",
      img: dc,
    },
  ];

  return (
    <section
      id="tech"
      className="skills container animate__animated animate__backInLeft"
    >
      <h2>Tecnologías y herramientas</h2>
      <div className="skills-content">
        {icons.map((icon) => (
          <div className="skills-icons" key={icon.name}>
            <img src={icon.img} alt={icon.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
