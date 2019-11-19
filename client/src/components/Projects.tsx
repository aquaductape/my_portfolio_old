import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import ticTacToeImg from "../assets/tic-tac-toe.png";
import facifyImg from "../assets/facify.png";

export default function Projects() {
  return (
    <section className="projects">
      <Element name="projects">
        <h2 className="section-title">Projects</h2>
        <div className="card-container">
          <div className="flex-gap">
            <div className="card">
              <img
                className="card-img"
                src={ticTacToeImg}
                alt="screenshot of tic-tac-toe game"
              />
              <div className="card-content">
                <h3 className="card-title">Tic Tac Toe</h3>
                <p className="card-pg">
                  A tic-tac-toe game where it involved no frameworks, no JQuery,
                  everything vanilla. Animations were done using glorious SVG.
                </p>
                <div className="card-link-container">
                  <a
                    className="card-link-item"
                    href="https://aquaductape.github.io/3n-row/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faLink} /> Website
                  </a>
                  <a
                    className="card-link-item"
                    href="https://github.com/aquaductape/3n-row"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faCode} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-gap">
            <div className="card">
              <img
                className="card-img"
                src={facifyImg}
                alt="screenshot of facify application"
              />
              <div className="card-content">
                <h3 className="card-title">Facify</h3>
                <p className="card-pg">
                  Locate human faces by sending an image from your local files,
                  URL, WebCam(browser), or mobile camera.
                </p>
                <div className="card-link-container">
                  <a
                    className="card-link-item"
                    href="https://aquaductape.github.io/facify/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faLink} /> Website
                  </a>

                  <a
                    className="card-link-item"
                    href="https://github.com/aquaductape/facify"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faCode} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}
