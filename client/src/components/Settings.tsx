import React, { useRef, useState } from "react";
import { setTheme, setNavRelative, setNavVisible } from "../utils/settings";
import { ISettingsReactComponent } from "../models/index";

export default function Settings({
  navSettings,
  setNavSettings,
  setSettings,
  toggleSettings,
  setMenu,
  hamburgerMenuEl
}: ISettingsReactComponent) {
  const inputToggleThemeEl = useRef<HTMLInputElement>(null);
  const inputToggleNavVisibleEl = useRef<HTMLInputElement>(null);
  const inputToggleNavTopEl = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(navSettings.navTop);

  const isDarkMode = (): boolean => {
    const item = localStorage.getItem("theme");
    if (!item) return false;

    return item === "dark";
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

  const onInputNavVisible = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (inputToggleNavTopEl.current && inputToggleNavTopEl.current.checked) {
      e.preventDefault();
      return;
    }
    const isChecked = e.currentTarget.checked;
    const newNavSettings = { ...navSettings };

    newNavSettings.navVisible = !newNavSettings.navVisible;
    setNavSettings(() => ({ ...newNavSettings }));
    setNavVisible(isChecked);
  };

  const onInputNavPosition = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const isChecked = e.currentTarget.checked;
    const newNavSettings = { ...navSettings };
    const windowScrollY = window.scrollY || window.pageYOffset;

    newNavSettings.navTop = !newNavSettings.navTop;

    setNavSettings(() => ({ ...newNavSettings }));
    setNavRelative(isChecked);
    setDisabled(() => !disabled);

    if (hamburgerMenuEl.current && isChecked && windowScrollY > 55) {
      hamburgerMenuEl.current.classList.remove("active");
      setMenu(() => false);
      setSettings(() => false);
    }
  };

  const setThemeOnKey = () => {
    const currentEl = inputToggleThemeEl.current;
    if (!currentEl) return;
    if (currentEl.checked) {
      setTheme("light");
      currentEl.checked = !currentEl.checked;
    } else {
      setTheme("dark");
      currentEl.checked = !currentEl.checked;
    }
  };

  const setNavVisibleOnKey = () => {
    const currentEl = inputToggleNavVisibleEl.current;
    if (!currentEl) return;
    const isChecked = currentEl.checked;
    const newNavSettings = { ...navSettings };
    newNavSettings.navVisible = !newNavSettings.navVisible;

    setNavSettings(() => ({ ...newNavSettings }));
    setNavVisible(isChecked);
    currentEl.checked = !isChecked;
  };

  const setNavTopOnKey = () => {
    const currentEl = inputToggleNavTopEl.current;
    if (!currentEl) return;
    const windowScrollY = window.scrollY || window.pageYOffset;
    const isChecked = currentEl.checked;
    const newNavSettings = { ...navSettings };
    newNavSettings.navTop = !newNavSettings.navTop;

    setNavSettings(() => ({ ...newNavSettings }));
    setNavRelative(isChecked);
    setDisabled(() => !disabled);
    currentEl.checked = !isChecked;
    if (hamburgerMenuEl.current && isChecked && windowScrollY > 55) {
      hamburgerMenuEl.current.classList.remove("active");
      setMenu(() => false);
      setSettings(() => false);
    }
  };

  const onLabelKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const char = e.key;
    const idFor = e.currentTarget.getAttribute("for");

    console.log("TCL: onLabelKeyDown -> idFor", idFor);
    if (char !== "Enter" && char !== " ") return;
    switch (idFor) {
      case "cb-navTop":
        setNavTopOnKey();
        break;
      case "cb-hideNav":
        setNavVisibleOnKey();
        break;
      case "cb-darkMode":
        setThemeOnKey();
        break;
      default:
        return;
    }
  };

  return (
    <ul className="toggle-area">
      <li className="toggle-area-item">
        <label className="toggle-area-item-label" htmlFor="cb-darkMode">
          Dark Mode
        </label>
        <input
          className="tgl tgl-light"
          id="cb-darkMode"
          name="cb-darkMode"
          type="checkbox"
          defaultChecked={isDarkMode()}
          onClick={onInputDarkMode}
          ref={inputToggleThemeEl}
        />
        <label
          className="tgl-btn"
          htmlFor="cb-darkMode"
          tabIndex={0}
          onKeyDown={onLabelKeyDown}
        ></label>
      </li>

      <li className={`toggle-area-item ${disabled ? "disabled" : ""}`}>
        <label className="toggle-area-item-label" htmlFor="cb-hideNav">
          Hide Navigation when Scrolling Down
        </label>
        <input
          className="tgl tgl-light"
          id="cb-hideNav"
          name="cb-hideNav"
          type="checkbox"
          defaultChecked={navSettings.navVisible}
          ref={inputToggleNavVisibleEl}
          onClick={onInputNavVisible}
        />
        <label
          className="tgl-btn"
          htmlFor="cb-hideNav"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={onLabelKeyDown}
        ></label>
      </li>
      <li className="toggle-area-item">
        <label className="toggle-area-item-label" htmlFor="cb-navTop">
          Keep Navigation at Top
        </label>
        <input
          className="tgl tgl-light"
          id="cb-navTop"
          name="cb-navTop"
          type="checkbox"
          defaultChecked={navSettings.navTop}
          ref={inputToggleNavTopEl}
          onClick={onInputNavPosition}
        />
        <label
          className="tgl-btn"
          htmlFor="cb-navTop"
          tabIndex={0}
          onKeyDown={onLabelKeyDown}
        ></label>
      </li>
    </ul>
  );
}
