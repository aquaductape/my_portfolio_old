import React from "react";
import { Element } from "react-scroll";
import gsap from "gsap";

import npmSVG from "../assets/icons/npm.svg";
import jsSVG from "../assets/icons/js.svg";
import typescriptSVG from "../assets/icons/typescript.svg";
import sassSVG from "../assets/icons/sass.svg";
import gitSVG from "../assets/icons/git.svg";
import reactjsSVG from "../assets/icons/reactjs.svg";
import mysqlSVG from "../assets/icons/mysql.svg";
import nodeSVG from "../assets/icons/node.svg";
import cssSVG from "../assets/icons/css.svg";
import htmlSVG from "../assets/icons/html.svg";
import mongoSVG from "../assets/icons/mongo.svg";

import SVGClipIcon from "./SVGClipIcon";

export default function Skills() {
  const icons = [
    [htmlSVG, "HTML"],
    [cssSVG, "CSS"],
    [sassSVG, "Sass"],
    [jsSVG, "JavaScript"],
    [typescriptSVG, "Typescript"],
    [reactjsSVG, "ReactJS"],
    [gitSVG, "Git"],
    [npmSVG, "NPM"],
    [nodeSVG, "NodeJS"],
    [mongoSVG, "MongoDB"],
    [mysqlSVG, "MySQL"]
  ];
  gsap.defaults({ overwrite: "auto" });

  const skillItems = icons.map(([icon, title], i) => {
    const svgId = `skill-icon-${title}`;
    const circleId = `.${svgId}__clipPath-circle`;
    const animateIconEnter = () => {
      gsap.fromTo(
        circleId,
        {
          attr: {
            r: 1
          },
          transformOrigin: "center"
        },
        {
          scale: 20,
          transformOrigin: "center",
          ease: "power1.in",
          duration: 1
        }
      );
    };

    const animateIconLeave = () => {
      gsap.to(circleId, {
        scale: 0,
        duration: 0.5
      });
    };
    return (
      <li
        key={i}
        className="skills-item"
        onMouseEnter={animateIconEnter}
        onMouseLeave={animateIconLeave}
      >
        <SVGClipIcon svgId={svgId} icon={icon}></SVGClipIcon>
        <p>{title}</p>
      </li>
    );
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
