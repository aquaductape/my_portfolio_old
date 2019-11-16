import React from "react";
import { setTheme } from "../utils/settings";

export default function Settings() {
  const isDarkMode = (): boolean => {
    const item = localStorage.getItem("theme");
    if (!item) return true;

    return item === "dark" ? true : false;
  };

  const onInputDarkMode = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (e.currentTarget.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ul className="toggle-area">
      <li className="toggle-area-item">
        <label htmlFor="cb-darkMode">Dark Mode</label>
        <input
          className="tgl tgl-light"
          id="cb-darkMode"
          type="checkbox"
          defaultChecked={isDarkMode()}
          onClick={onInputDarkMode}
        />
        <label className="tgl-btn" htmlFor="cb-darkMode"></label>
      </li>

      <li className="toggle-area-item">
        <label htmlFor="cb-hideNav">Hide Navigation when Scrolling Down</label>
        <input
          className="tgl tgl-light"
          id="cb-hideNav"
          type="checkbox"
          defaultChecked={isDarkMode()}
          onClick={() => {}}
        />
        <label className="tgl-btn" htmlFor="cb-hideNav"></label>
      </li>
      <li className="toggle-area-item">
        <label htmlFor="cb-navTop">Keep Navigation at Top</label>
        <input
          className="tgl tgl-light"
          id="cb-navTop"
          type="checkbox"
          defaultChecked={isDarkMode()}
          onClick={() => {}}
        />
        <label className="tgl-btn" htmlFor="cb-navTop"></label>
      </li>
    </ul>
  );
}
