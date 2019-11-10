import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
import ticTacToeImg from '../assets/tic-tac-toe.png';
import facifyImg from '../assets/facify.png';

export default function Projects() {
  return (
    <section className="projects">
      <Element name="projects">
        <h2>Projects</h2>
      </Element>

      <div className="card-container">
        <div className="card">
          <h3>Tic Tac Toe</h3>
          <img
            className="card-img"
            src={ticTacToeImg}
            alt="screenshot of tic-tac-toe game"
          />
          <p>
            A tic-tac-toe game where it involved no frameworks, no JQuery,
            everything vanilla. Animations were done using glorious SVG.
          </p>
          <div>
            <div>
              <a href="https://aquaductape.github.io/3n-row/" target="blank">
                <FontAwesomeIcon icon={faLink} /> Website
              </a>
            </div>
            <div>
              <a href="https://github.com/aquaductape/3n-row" target="blank">
                <FontAwesomeIcon icon={faCode} /> Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Facify</h3>
          <img
            className="card-img"
            src={facifyImg}
            alt="screenshot of facify application"
          />
          <p>
            Locate human faces by sending an image from your local files, URL,
            WebCam(browser), or mobile camera.
          </p>
          <div>
            <div>
              <a href="https://aquaductape.github.io/facify/" target="blank">
                <FontAwesomeIcon icon={faLink} /> Website
              </a>
            </div>
            <div>
              <a href="https://github.com/aquaductape/facify" target="blank">
                <FontAwesomeIcon icon={faCode} /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
