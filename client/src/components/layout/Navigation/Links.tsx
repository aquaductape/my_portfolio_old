import React from "react";
import { Link, animateScroll as Scroll } from "react-scroll";

interface ILinksProps {
  hamburgerMenuEl: React.RefObject<HTMLButtonElement>;
  aboutMeLinkEl: React.MutableRefObject<any>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Links({
  hamburgerMenuEl,
  setSettings,
  setMenu,
  aboutMeLinkEl
}: ILinksProps) {
  // const aboutMeLinkEl = useRef<any>(null);

  const onLink = () => {
    const hamburgerMenu = hamburgerMenuEl.current;
    if (hamburgerMenu) {
      hamburgerMenu.classList.remove("active");
    }

    setSettings(() => false);
    setMenu(() => false);
  };
  return (
    <>
      <li className="nav-list">
        <Link
          className="nav-list-link nav-list-link__about-me"
          activeClass="active"
          href="#about-me"
          to="about-me"
          spy={true}
          ref={aboutMeLinkEl}
          onClick={() => {
            Scroll.scrollToTop();
            onLink();
          }}
        >
          About Me
        </Link>
      </li>
      <li className="nav-list">
        <Link
          className="nav-list-link"
          activeClass="active"
          href="#skills"
          to="skills"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={-60}
          onClick={onLink}
        >
          Skills
        </Link>
      </li>
      <li className="nav-list">
        <Link
          className="nav-list-link"
          activeClass="active"
          href="#projects"
          to="projects"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={500}
          offset={-60}
          onClick={onLink}
        >
          Projects
        </Link>
      </li>
    </>
  );
}
