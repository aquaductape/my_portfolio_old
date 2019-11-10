import React, { useState, useEffect } from 'react';
import { Link, animateScroll as Scroll } from 'react-scroll';
import { ReactComponent as LogoSimple } from '../../assets/logo_simple.svg';

export default function Navigation() {
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  // window.pageYOffset is IE9+ browser compatible
  let prev = window.scrollY || window.pageYOffset;

  useEffect(() => {
    // when reloading the page scroll event runs twice
    // timeout prevents that
    setTimeout(() => {
      window.addEventListener('scroll', handleHeader);
    }, 1000);
  }, []);

  const handleHeader = () => {
    const windowScrollY = window.scrollY || window.pageYOffset;
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

  const hideHeaderCss = () => {
    if (toggleMenu) return '';

    return toggleHeader ? 'hide' : '';
  };

  const hideNavLinksCss = () => {
    return !toggleMenu ? 'hide' : '';
  };

  return (
    <header>
      <div className={`${hideHeaderCss()} sticky header-bar`}>
        <div className="logo">
          <a onClick={Scroll.scrollToTop}>
            <LogoSimple></LogoSimple>
          </a>
        </div>

        <button
          className={`nav-btn hambuger-menu ${toggleMenu ? 'active' : ''}`}
          aria-pressed={toggleMenu}
          aria-label={toggleMenu ? 'close mobile nav' : 'open mobile nav'}
          onClick={() => setMenu(!toggleMenu)}
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
                href="#skills"
                to="skills"
                spy={true}
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
                smooth={true}
                duration={500}
                onClick={() => setMenu(!toggleMenu)}
                offset={-60}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
