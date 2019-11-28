import React, { useState, useEffect, useRef, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as Scroll } from "react-scroll";
import { ReactComponent as LogoSimple } from "../../../assets/logo_monochrome.svg";
import Settings from "./Settings";
import { isNavVisible, isNavTop } from "../../../utils/settings";
import Links from "./Links";

const Collapse = React.lazy(() =>
  import(/* webpackChunkName: "collapse" */ "@kunukn/react-collapse")
);

export default function Navigation() {
  const hamburgerMenuEl = useRef<HTMLButtonElement>(null);
  const aboutMeLinkEl = useRef<any>(null);
  const navEl = useRef<HTMLElement>(null);
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  const [toggleHeaderShadow, setHeaderShadow] = useState(false);
  const [toggleSettings, setSettings] = useState(false);
  const [toggleSettingsMobile, setSettingsMobile] = useState(
    window.innerWidth < 600
  );
  const [navSettings, setNavSettings] = useState({
    navVisible: isNavVisible(),
    navTop: isNavTop()
  });

  useEffect(() => {
    // window.pageYOffset is IE9+ browser compatible
    const windowScrollY = window.scrollY || window.pageYOffset;
    let prev = windowScrollY;

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

    const handleResize = () => {
      const windowInnerWidth = window.innerWidth;

      if (windowInnerWidth < 600) {
        setSettingsMobile(() => true);
      } else {
        setSettingsMobile(() => false);
      }
    };

    // sometimes when reloading the page scroll event runs twice
    // timeout prevents that
    // setTimeout(() => {
    window.addEventListener("scroll", handleHeader);
    window.addEventListener("resize", handleResize);
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
    const nav = navEl.current;
    if (!hamburgerMenu || !nav) return;
    if (toggleMenu) {
      hamburgerMenu.classList.remove("active");
    } else {
      hamburgerMenu.classList.add("active");
      nav.setAttribute("style", "");
    }
    setSettings(() => false);
    setMenu(() => !toggleMenu);
  };

  const onTransitionEnd = () => {
    const nav = navEl.current;
    if (!nav) return;
    if (!toggleMenu) {
      nav.setAttribute("style", "visibility: hidden");
    }
  };

  return (
    <header>
      <div
        className={`${shadowHeaderCss()} ${hideHeaderCss()} ${navTopCss()} header-bar`}
      >
        <div className="header-bar-inner">
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

          <div className="nav-desktop">
            <ul className="nav-desktop-group">
              <Links
                aboutMeLinkEl={aboutMeLinkEl}
                hamburgerMenuEl={hamburgerMenuEl}
                setSettings={setSettings}
                setMenu={setMenu}
              ></Links>
            </ul>
          </div>

          <button
            // using classList to add class because it removes focus visible class
            // which is added dynamically
            // className={`nav-btn hambuger-menu ${toggleMenu ? "active" : ""}`}
            className="nav-btn hambuger-menu"
            aria-expanded={toggleMenu}
            aria-label={toggleMenu ? "close mobile nav" : "open mobile nav"}
            onClick={onToggleMenu}
            ref={hamburgerMenuEl}
            onTransitionEnd={onTransitionEnd}
          >
            <span
              // removes IE button click effect
              className="btn-no-effect"
            >
              <div className="menu-line"></div>
            </span>
          </button>
        </div>
      </div>

      <div className={`${hideNavLinksCss()} ${navTopCss()} nav-mobile`}>
        <nav style={{ visibility: "hidden" }} ref={navEl}>
          <ul className="nav-mobile-group">
            <Links
              aboutMeLinkEl={aboutMeLinkEl}
              hamburgerMenuEl={hamburgerMenuEl}
              setSettings={setSettings}
              setMenu={setMenu}
            ></Links>
            <li className="nav-list">
              <button
                className="nav-list-link nav-list-btn"
                aria-expanded={toggleSettings}
                aria-label={toggleSettings ? "close settings" : "open settings"}
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
              <Collapse isOpen={!toggleSettingsMobile || toggleSettings}>
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
