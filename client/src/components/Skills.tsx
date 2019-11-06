import React from 'react';
import { ReactComponent as CssIcon } from '../assets/icons/css.svg';
import { ReactComponent as HtmlIcon } from '../assets/icons/html.svg';
import { ReactComponent as JSIcon } from '../assets/icons/javascript.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/node.svg';
import { ReactComponent as NpmIcon } from '../assets/icons/npm.svg';
import { ReactComponent as MysqlIcon } from '../assets/icons/mysql.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/reactjs.svg';
import { ReactComponent as TSIcon } from '../assets/icons/typescript.svg';
import { ReactComponent as MongoIcon } from '../assets/icons/mongo.svg';
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg';

const foo = '<button>Submit</button>';
export default function Skills() {
  return (
    <section className="skills">
      <h2 id="skills">Skills</h2>
      <div>
        <ul className="skills-group">
          <li className="skills-item">
            <HtmlIcon></HtmlIcon>
            <p>HTML</p>
          </li>
          <li className="skills-item">
            <CssIcon></CssIcon>
            <p>CSS</p>
          </li>
          <li className="skills-item">
            <SassIcon></SassIcon>
            <p>Sass</p>
          </li>
          <li className="skills-item">
            <JSIcon></JSIcon>
            <p>JavaScript</p>
          </li>
          <li className="skills-item">
            <TSIcon></TSIcon>
            <p>TypeScript</p>
          </li>
          <li className="skills-item">
            <GitIcon></GitIcon>
            <p>Git</p>
          </li>
          <li className="skills-item">
            <NpmIcon></NpmIcon>
            <p>NPM</p>
          </li>
          <li className="skills-item">
            <NodeIcon></NodeIcon>
            <p>NodeJS</p>
          </li>
          <li className="skills-item">
            <ReactIcon></ReactIcon>
            <p>ReactJS</p>
          </li>
          <li className="skills-item">
            <MongoIcon></MongoIcon>
            <p>MongoDB</p>
          </li>
          <li className="skills-item">
            <MysqlIcon></MysqlIcon>
            <p>MySQL</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
