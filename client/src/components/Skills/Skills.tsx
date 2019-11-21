import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";

// import npmSVG from "../../assets/icons/npm.svg";
// import jsSVG from "../../assets/icons/js.svg";
// import typescriptSVG from "../../assets/icons/typescript.svg";
// import sassSVG from "../../assets/icons/sass.svg";
// import gitSVG from "../../assets/icons/git.svg";
// import reactjsSVG from "../../assets/icons/reactjs.svg";
// import mysqlSVG from "../../assets/icons/mysql.svg";
// import nodeSVG from "../../assets/icons/node.svg";
// import cssSVG from "../../assets/icons/css.svg";
// import mongoSVG from "../../assets/icons/mongo.svg";
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
} from "./icons";

import SVGClipIcon from "../SVGClipIcon";
import Skill from "./Skill";

export default function Skills() {
  const icons: [JSX.Element, string][] = [
    [html, "HTML"],
    [css, "CSS"],
    [sass, "Sass"],
    [js, "JavaScript"],
    [typescript, "Typescript"],
    [react, "ReactJS"],
    [git, "Git"],
    [npm, "NPM"],
    [nodejs, "NodeJS"],
    [mongodb, "MongoDB"],
    [mysql, "MySQL"]
  ];

  const skillItems = icons.map(([icon, title], i) => {
    return <Skill key={i} icon={icon} title={title}></Skill>;
  });

  return (
    <section className="skills">
      <Element name="skills">
        <h2 className="section-title skills-title" id="skills">
          Skills
        </h2>

        <ul className="skills-group">{skillItems}</ul>
      </Element>
    </section>
  );
}
