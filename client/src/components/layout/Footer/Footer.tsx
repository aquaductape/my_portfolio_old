import React from "react";
import resumePDF from "../../../assets/pdf/Caleb_Taylor_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="pfooter">
      <div className="pfooter-contact">
        <div className="pfooter-contact-item pfooter-email">
          <a href="mailto:name@email.com">caleb1taylor2@gmail.com</a>
        </div>
        <div className="pfooter-contact-item">
          <a
            aria-label="Download PDF Resume"
            href={resumePDF}
            download="Caleb_Taylor_Resume.pdf"
          >
            Download my Resume
          </a>
        </div>
      </div>
      <div className="pfooter-social">
        <div className="pfooter-social-item">
          <a
            className="pfooter-social-item-link"
            aria-label="Github"
            href="https://github.com/aquaductape"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="pfooter-social-item">
          <a
            className="pfooter-social-item-link"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/caleb1taylor2/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="pfooter-social-item">
          <a
            className="pfooter-social-item-link"
            aria-label="Facebook"
            href="https://www.facebook.com/caleb.taylor.923171"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}
