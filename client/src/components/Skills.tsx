import React from "react";
import { Element } from "react-scroll";

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

import SVGIcon from "./SVGIcon";

export default function Skills() {
  return (
    <section className="skills">
      <Element name="skills">
        <h2 className="section-title" id="skills">
          Skills
        </h2>
        <div>
          <ul className="skills-group">
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-html" icon={htmlSVG}></SVGIcon>
              <p>HTML</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-css" icon={cssSVG}></SVGIcon>
              <p>CSS</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-sass" icon={sassSVG}></SVGIcon>
              <p>Sass</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-js" icon={jsSVG}></SVGIcon>
              <p>JavaScript</p>
            </li>
            <li className="skills-item">
              <SVGIcon
                svgId="skill-icon-typescript"
                icon={typescriptSVG}
              ></SVGIcon>
              <p>TypeScript</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-git" icon={gitSVG}></SVGIcon>
              <p>Git</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-npm" icon={npmSVG}></SVGIcon>
              <p>NPM</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-node" icon={nodeSVG}></SVGIcon>
              <p>NodeJS</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-react" icon={reactjsSVG}></SVGIcon>
              <p>ReactJS</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-mongo" icon={mongoSVG}></SVGIcon>
              <p>MongoDB</p>
            </li>
            <li className="skills-item">
              <SVGIcon svgId="skill-icon-mysql" icon={mysqlSVG}></SVGIcon>
              <p>MySQL</p>
            </li>
          </ul>
        </div>
      </Element>
    </section>
  );
}
