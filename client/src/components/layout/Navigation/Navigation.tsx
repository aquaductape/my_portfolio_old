import React, { useState, useEffect, useRef, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as Scroll } from "react-scroll";
import { ReactComponent as LogoSimple } from "../../../assets/logo_monochrome.svg";
import Settings from "./Settings";
import { isNavVisible, isNavTop } from "../../../utils/settings";
import Links from "./Links";
import addEscapeHatch from "../../../utils/addEscapeHatch";

const Collapse = React.lazy(() =>
  import(/* webpackChunkName: "collapse" */ "@kunukn/react-collapse")
);

export default function Navigation() {
  const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
  const aboutMeLinkRef = useRef<any>(null);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuEscapeHatchRef = useRef<any>(null);
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  const [toggleHeaderShadow, setHeaderShadow] = useState(false);
  const [toggleSettings, setSettings] = useState(false);
  const [toggleSettingsMobile, setSettingsMobile] = useState(
    window.innerWidth < 600
  );
  const [navSettings, setNavSettings] = useState({
    navVisible: isNavVisible(),
    navTop: isNavTop(),
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
    const hamburgerMenu = hamburgerMenuRef.current!;
    const nav = navRef.current!;

    menuEscapeHatchRef.current = addEscapeHatch({
      target: hamburgerMenu,
      build: () => {
        hamburgerMenu.classList.add("active");
        nav.setAttribute("style", "");
        setMenu(() => !toggleMenu);
        setSettings(() => false);
      },
      onStart: (e) => {
        const target = e.event.target as HTMLElement;
        const header = headerRef.current!;
        const navMenu = navRef.current!;

        if (header.contains(target) || navMenu.contains(target)) {
          return false;
        }

        return true;
      },
      onExit: () => {
        hamburgerMenu.classList.remove("active");
        // don't use toggleMenu closure since it will reference an outdated value
        // either use the argument in setState function or save variable in useRef
        // or use regular value instead of banging it
        setMenu(() => false);
        setSettings(() => false);
      },
    });
  };

  const onTransitionEnd = () => {
    const nav = navRef.current;
    if (!nav) return;
    if (!toggleMenu) {
      nav.setAttribute("style", "visibility: hidden");
    }
  };

  return (
    <header>
      <div
        className={`${shadowHeaderCss()} ${hideHeaderCss()} ${navTopCss()} header-bar`}
        ref={headerRef}
      >
        <div className="header-bar-inner">
          <div className="logo">
            <a
              href="#page-top"
              onClick={(e) => {
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
                aboutMeLinkEl={aboutMeLinkRef}
                hamburgerMenuEl={hamburgerMenuRef}
                menuEscapeHatchRef={menuEscapeHatchRef}
              ></Links>
            </ul>
          </div>

          <button
            // using classList to add class because it removes focus visible class
            // which is added dynamically
            // className={`nav-btn hambuger-menu ${toggleMenu ? "active" : ""}`}
            className="nav-btn hamburger-menu"
            aria-expanded={toggleMenu}
            aria-label={toggleMenu ? "close mobile nav" : "open mobile nav"}
            onClick={onToggleMenu}
            ref={hamburgerMenuRef}
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
        <nav style={{ visibility: "hidden" }} ref={navRef}>
          <ul className="nav-mobile-group">
            <Links
              aboutMeLinkEl={aboutMeLinkRef}
              hamburgerMenuEl={hamburgerMenuRef}
              menuEscapeHatchRef={menuEscapeHatchRef}
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
                  menuEscapeHatchRef={menuEscapeHatchRef}
                ></Settings>
              </Collapse>
            </Suspense>
          </ul>
        </nav>
      </div>
    </header>
  );
}
