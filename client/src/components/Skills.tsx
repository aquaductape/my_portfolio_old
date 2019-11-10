import React from 'react';
import { Element } from 'react-scroll';

import npmSVG from '../assets/icons/npm.svg';
import jsSVG from '../assets/icons/js.svg';
import typescriptSVG from '../assets/icons/typescript.svg';
import sassSVG from '../assets/icons/sass.svg';
import gitSVG from '../assets/icons/git.svg';
import reactjsSVG from '../assets/icons/reactjs.svg';
import webpackSVG from '../assets/icons/webpack.svg';
import mysqlSVG from '../assets/icons/mysql.svg';
import nodeSVG from '../assets/icons/node.svg';
import cssSVG from '../assets/icons/css.svg';
import htmlSVG from '../assets/icons/html.svg';
import mongoSVG from '../assets/icons/mongo.svg';

import SVGIcon from './SVGIcon';
import clipPath from '../assets/svgModifiers/clipPath.svg';

export default function Skills() {
  return (
    <section className="skills">
      <Element name="skills">
        <h2 id="skills">Skills</h2>
      </Element>
      <div>
        <ul className="skills-group">
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-html"
              content={htmlSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>HTML</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-css"
              content={cssSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>CSS</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-sass"
              content={sassSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>Sass</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-js"
              content={jsSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>JavaScript</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-typescript"
              content={typescriptSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>TypeScript</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-git"
              content={gitSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>Git</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-npm"
              content={npmSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>NPM</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-node"
              content={nodeSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>NodeJS</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-react"
              content={reactjsSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>ReactJS</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-mongo"
              content={mongoSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>MongoDB</p>
          </li>
          <li className="skills-item">
            <SVGIcon
              svgId="skill-icon-mysql"
              content={mysqlSVG}
              clipPathEl={clipPath}
            ></SVGIcon>
            <p>MySQL</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
