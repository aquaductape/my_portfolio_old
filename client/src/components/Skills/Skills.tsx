import React from "react";

import {
  html,
  css,
  sass,
  js,
  typescript,
  react,
  git,
  npm,
  nodejs,
  mongodb,
  mysql
} from "../SVG/icons";

import Skill from "./Skill";

export default function Skills() {
  const icons: [JSX.Element, string][] = [
    [html, "HTML"],
    [css, "CSS"],
    [sass, "Sass"],
    [js, "JavaScript"],
    [typescript, "TypeScript"],
    [react, "ReactJS"],
    [git, "Git"]
    // [npm, "NPM"]
    // [nodejs, "NodeJS"],
    // [mongodb, "MongoDB"],
    // [mysql, "MySQL"]
  ];

  const skillItems = icons.map(([icon, title], i) => {
    return <Skill key={i} icon={icon} title={title}></Skill>;
  });

  return (
    <section id="skills" className="skills">
      <h2 className="section-title skills-title">Skills</h2>

      <ul className="skills-group">{skillItems}</ul>
    </section>
  );
}
