import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as Scroll } from "react-scroll";
import Collapse from "@kunukn/react-collapse";
import { ReactComponent as LogoSimple } from "../../assets/logo_monochrome.svg";
import Settings from "../Settings";
import { isNavVisible, isNavTop } from "../../utils/settings";

export default function Navigation() {
  const hamburgerMenuEl = useRef<HTMLButtonElement>(null);
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  const [toggleHeaderShadow, setHeaderShadow] = useState(false);
  const [toggleSettings, setSettings] = useState(false);
  const [navSettings, setNavSettings] = useState({
    navVisible: isNavVisible(),
    navTop: isNavTop()
  });

  useEffect(() => {
    // window.pageYOffset is IE9+ browser compatible
    let prev = window.scrollY || window.pageYOffset;

    const handleHeader = () => {
      const windowScrollY = window.scrollY || window.pageYOffset;

      if (windowScrollY <= 15) {
        setHeaderShadow(() => false);
      } else {
        setHeaderShadow(() => true);
      }
      if (windowScrollY < 55) return setHeader(() => false);
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

    // sometime when reloading the page scroll event runs twice
    // timeout prevents that
    // setTimeout(() => {
    window.addEventListener("scroll", handleHeader);
    // }, 1000);
  }, []);

  const hideHeaderCss = () => {
    if (!navSettings.navVisible) return "";
    if (navSettings.navTop) return "";
    if (toggleMenu) return "";

    return toggleHeader ? "hide" : "";
  };

  const shadowHeaderCss = () => {
    // Since menu slides under from header, it's shadow
    // covers the menu as the header is transitioning out.
    // In order to make menu appear as extension rather than seperate,
    // this new class adds a new transition where the shadow leaves
    // immediately
    if (toggleMenu) return "shadow-onleave";
    if (toggleHeaderShadow && !navSettings.navVisible) return "shadow";
    if (navSettings.navTop) return "";
    if (toggleHeader) return "";

    return toggleHeaderShadow ? "shadow" : "";
  };

  const hideNavLinksCss = () => {
    return !toggleMenu ? "hide" : "";
  };

  const chevronDownCss = () => {
    return toggleSettings ? "up" : "";
  };

  const navTopCss = () => {
    return navSettings.navTop ? "top" : "sticky";
  };
  const onToggleSettings = () => {
    setSettings(() => !toggleSettings);
  };

  const onToggleMenu = () => {
    const hamburgerMenu = hamburgerMenuEl.current;
    if (hamburgerMenu) {
      if (toggleMenu) {
        hamburgerMenu.classList.remove("active");
      } else {
        hamburgerMenu.classList.add("active");
      }
    }
    setSettings(() => false);
    setMenu(() => !toggleMenu);
  };

  const onLink = () => {
    const hamburgerMenu = hamburgerMenuEl.current;
    if (hamburgerMenu) {
      hamburgerMenu.classList.remove("active");
    }

    setSettings(() => false);
    setMenu(() => false);
  };

  return (
    <header>
      <div
        className={`${shadowHeaderCss()} ${hideHeaderCss()} ${navTopCss()} header-bar`}
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
          // using classList to add class because it removes focus visible class
          // which is added dynamically
          // className={`nav-btn hambuger-menu ${toggleMenu ? "active" : ""}`}
          className="nav-btn hambuger-menu"
          aria-pressed={toggleMenu}
          aria-label={toggleMenu ? "close mobile nav" : "open mobile nav"}
          onClick={onToggleMenu}
          ref={hamburgerMenuEl}
        >
          <div className="menu-line"></div>
        </button>
      </div>
      <div className={`${hideNavLinksCss()} ${navTopCss()} nav-mobile`}>
        <nav>
          <ul className="nav-mobile-group">
            <li className="nav-list">
              <a
                className="nav-list-link"
                href="#about-me"
                onClick={() => {
                  Scroll.scrollToTop();
                  // setMenu(!toggleMenu);
                  onLink();
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
                onClick={onLink}
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
                onClick={onLink}
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
                Settings
                <span className={`settings-chevron ${chevronDownCss()}`}>
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </span>
              </button>
            </li>
            <Collapse isOpen={toggleSettings}>
              {/*
              In this case it's overkill to remove content
              but there will be many cases where dynamic content
              is added and there needs to be a solution
              toggleSettings ? <Settings></Settings> : null
              */}
              <Settings
                navSettings={navSettings}
                setNavSettings={setNavSettings}
                setSettings={setSettings}
                toggleSettings={toggleSettings}
                toggleMenu={toggleMenu}
                setMenu={setMenu}
                hamburgerMenuEl={hamburgerMenuEl}
              ></Settings>
            </Collapse>
          </ul>
        </nav>
      </div>
    </header>
  );
}
