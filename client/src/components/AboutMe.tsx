import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../assets/logo_fullname.svg";
import resumePDF from "../assets/pdf/Caleb_Taylor_Resume.pdf";

export default function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-area">
        <div className="about-me-area-content">
          <div className="about-me-contact">
            <h1 className="about-me-logo">
              <Logo></Logo>
            </h1>

            <p className="contact-item contact-city">Los Angeles, CA</p>
            <p className="contact-item contact-phone">(323)-637-1232</p>
            <a
              className="contact-item contact-email"
              href="mailto:name@email.com"
            >
              caleb1taylor2@gmail.com
            </a>
          </div>
          <p className="about-me-area-pg">
            Dedicated self-taught Front-End developer. Continuously building
            projects that are responsive, performant and accessible. Looking
            forward to collaborating and solving problems as a team.
          </p>
        </div>
      </div>
      <div className="about-me-social-links">
        <div className="social-links">
          <a
            aria-label="Github"
            href="https://github.com/aquaductape"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/caleb1taylor2/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            aria-label="Download PDF Resume"
            href={resumePDF}
            download="Caleb_Taylor_Resume.pdf"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  );
}
