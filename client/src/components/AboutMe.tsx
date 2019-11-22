import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../assets/logo_fullname.svg";
import { ReactComponent as Creation } from "../assets/hero-img.svg";

export default function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-area">
        <div className="about-me-area-content">
          <h1>
            <Logo></Logo>
          </h1>
          <h3>(323)-637-1232</h3>
          <h3>
            <a href="mailto:name@email.com">caleb1taylor2@gmail.com</a>
          </h3>
          <p>
            Hello! I'm a self taught web developer. I love working with
            JavaScript and enjoy the process of building applications.
          </p>
        </div>
        <div className="about-me-area-img">
          <Creation></Creation>
        </div>
      </div>
      <div className="about-me-social-links">
        <div className="social-links">
          <a href="https://github.com/aquaductape" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/caleb1taylor2/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#foo" target="blank">
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  );
}
