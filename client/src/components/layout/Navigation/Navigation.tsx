import React, { useState, useEffect, useRef, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as Scroll } from "react-scroll";
import { ReactComponent as LogoSimple } from "../../../assets/logo_monochrome.svg";
import Settings from "./Settings";
import { isNavVisible, isNavTop } from "../../../utils/settings";

const Collapse = React.lazy(() =>
  import(/* webpackChunkName: "collapse" */ "@kunukn/react-collapse")
);

export default function Navigation() {
  const hamburgerMenuEl = useRef<HTMLButtonElement>(null);
  const aboutMeLinkEl = useRef<HTMLAnchorElement>(null);
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  const [toggleHeaderShadow, setHeaderShadow] = useState(false);
  const [toggleSettings, setSettings] = useState(false);
  const [navSettings, setNavSettings] = useState({
    navVisible: isNavVisible(),
    navTop: isNavTop()
  });

  useEffect(() => {
    const url = window.location.href;
    if (url.match("#about-me")) {
      const aboutMe = document.querySelector(".nav-list-link");
      if (aboutMe) {
        aboutMe.classList.add("active");
      }
    }
  }, []);

  useEffect(() => {
    // window.pageYOffset is IE9+ browser compatible
    const windowScrollY = window.scrollY || window.pageYOffset;
    let prev = windowScrollY;

    const handleHeader = () => {
      const windowScrollY = window.scrollY || window.pageYOffset;

      if (windowScrollY <= 15) {
        setHeaderShadow(() => false);
        setTimeout(() => {
          const aboutMe = document.querySelector(".nav-list-link");
          if (aboutMe) {
            aboutMe.classList.add("active");
          }
        }, 500);
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
          <span
            // removes IE button click effect
            className="btn-no-effect"
          >
            <div className="menu-line"></div>
          </span>
        </button>
      </div>
      <div className={`${hideNavLinksCss()} ${navTopCss()} nav-mobile`}>
        <nav>
          <ul className="nav-mobile-group">
            <li className="nav-list">
              <Link
                className="nav-list-link"
                href="#about-me"
                to="about-me"
                activeClass="active"
                spy={true}
                hashSpy={true}
                ref={aboutMeLinkEl}
                onClick={() => {
                  Scroll.scrollToTop();
                  // setMenu(!toggleMenu);
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
                onClick={onLink}
                offset={-60}
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
                onClick={onLink}
                offset={-60}
              >
                Projects
              </Link>
            </li>
            {/* <li className="nav-list">
              <Link
                className="nav-list-link"
                href="#education"
                to="education"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                onClick={onLink}
                offset={-60}
              >
                Education
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-list-link"
                href="#experience"
                to="experience"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                onClick={onLink}
                offset={-60}
              >
                Experience
              </Link>
            </li> */}
            <li className="nav-list">
              <button
                className="nav-list-link nav-list-btn"
                onClick={onToggleSettings}
              >
                <span
                  // removes IE button click effect
                  className="btn-no-effect"
                >
                  Settings
                  <span className={`settings-chevron ${chevronDownCss()}`}>
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                  </span>
                </span>
              </button>
            </li>
            <Suspense fallback={null}>
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
            </Suspense>
          </ul>
        </nav>
      </div>
    </header>
  );
}
