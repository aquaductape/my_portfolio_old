import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Navigation() {
  const [toggleMenu, setMenu] = useState(false);
  const [toggleHeader, setHeader] = useState(false);
  let prev = window.scrollY;

  useEffect(() => {
    // when reloading the page scroll event runs twice
    // timeout prevents that
    setTimeout(() => {
      window.addEventListener('scroll', handleHeader);
    }, 1000);
  }, []);

  const handleHeader = () => {
    if (window.scrollY < 55) return;
    if (window.scrollY > prev) {
      // scrolling down
      setHeader(true);
      prev = window.scrollY;
    } else {
      // scrolling up
      setHeader(false);
      prev = window.scrollY;
    }
  };

  const hideHeader = () => {
    if (toggleMenu) return '';

    return toggleHeader ? 'hide' : '';
  };

  const hideNavLinks = () => {
    return !toggleMenu ? 'hide' : '';
  };

  return (
    <header>
      <div className={`${hideHeader()} sticky header-bar`}>
        <div className="logo">
          <a href="about-me">
            <Logo></Logo>
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
      <div className={`${hideNavLinks()} sticky nav-mobile`}>
        <nav>
          <ul className="nav-mobile-group">
            <li className="nav-list">
              <a className="nav-list-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-list-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-list-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
