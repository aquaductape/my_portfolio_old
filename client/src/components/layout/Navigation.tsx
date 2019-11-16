import React, { useState, useEffect } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import { ReactComponent as LogoSimple } from "../../assets/logo_monochrome.svg";
import Settings from "../Settings";

export default function Navigation() {
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  const [toggleHeaderShadow, setHeaderShadow] = useState(false);
  const [toggleSettings, setSettings] = useState(false);

  useEffect(() => {
    // window.pageYOffset is IE9+ browser compatible
    let prev = window.scrollY || window.pageYOffset;

    const handleHeader = () => {
      const windowScrollY = window.scrollY || window.pageYOffset;
      if (windowScrollY > 15) {
        setHeaderShadow(() => true);
      } else {
        setHeaderShadow(() => false);
      }
      if (windowScrollY < 55) return;
      // if the scroll repeats the same number ignore it
      if (windowScrollY === prev) return;
      if (windowScrollY > prev) {
        // scrolling down
        setHeader(() => true);
        prev = windowScrollY;
      } else {
        // scrolling up
        setHeader(() => false);
        prev = windowScrollY;
      }
    };

    // when reloading the page scroll event runs twice
    // timeout prevents that
    setTimeout(() => {
      window.addEventListener("scroll", handleHeader);
    }, 1000);
  }, []);

  const hideHeaderCss = () => {
    if (toggleMenu) return "";

    return toggleHeader ? "hide" : "";
  };

  const shadowHeaderCss = () => {
    if (toggleMenu) return "";
    if (toggleHeader) return "";

    return toggleHeaderShadow ? "shadow" : "";
  };

  const hideNavLinksCss = () => {
    return !toggleMenu ? "hide" : "";
  };

  const onToggleSettings = () => {
    setSettings(() => !toggleSettings);
  };

  const onToggleMenu = () => {
    setSettings(() => false);
    setMenu(() => !toggleMenu);
  };

  return (
    <header>
      <div
        className={`${shadowHeaderCss()} ${hideHeaderCss()} sticky header-bar`}
      >
        <div className="logo">
          <a
            href="#page-top"
            onClick={e => {
              e.preventDefault();
              Scroll.scrollToTop();
            }}
          >
            <LogoSimple></LogoSimple>
          </a>
        </div>

        <button
          className={`nav-btn hambuger-menu ${toggleMenu ? "active" : ""}`}
          aria-pressed={toggleMenu}
          aria-label={toggleMenu ? "close mobile nav" : "open mobile nav"}
          onClick={onToggleMenu}
        >
          <div className="menu-line"></div>
        </button>
      </div>
      <div className={`${hideNavLinksCss()} sticky nav-mobile`}>
        <nav>
          <ul className="nav-mobile-group">
            <li className="nav-list">
              <a
                className="nav-list-link"
                href="#about-me"
                onClick={() => {
                  Scroll.scrollToTop();
                  setMenu(!toggleMenu);
                }}
              >
                About Me
              </a>
            </li>
            <li className="nav-list">
              <Link
                className="nav-list-link"
                href="#skills-me"
                to="skills"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenu(!toggleMenu)}
                offset={-60}
              >
                Skills
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-list-link"
                href="#projects"
                to="projects"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenu(!toggleMenu)}
                offset={-60}
              >
                Projects
              </Link>
            </li>
            <li className="nav-list">
              <button
                className="nav-list-link nav-list-btn"
                onClick={onToggleSettings}
              >
                Settings V
              </button>
              {toggleSettings ? <Settings></Settings> : null}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
