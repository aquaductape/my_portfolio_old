import React from "react";
import {
  setTheme,
  setNavRelative,
  setNavVisible
} from "../../../utils/settings";

interface ICheckboxProps {
  id: string;
  labelTextContent: string;
  defaultChecked: boolean;
  setNavSettings: React.Dispatch<
    React.SetStateAction<{
      navVisible: boolean;
      navTop: boolean;
    }>
  >;
  navSettings: {
    navVisible: boolean;
    navTop: boolean;
  };
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerMenuEl: React.RefObject<HTMLButtonElement>;
  allowDisable: boolean;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Checkbox({
  id,
  labelTextContent: lableName,
  defaultChecked,
  navSettings,
  setNavSettings,
  setSettings,
  setMenu,
  hamburgerMenuEl,
  allowDisable,
  disabled,
  setDisabled
}: ICheckboxProps) {
  const tabIndex = allowDisable
    ? { tabIndex: disabled ? -1 : 0 }
    : { tabIndex: 0 };
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
    if (navSettings.navTop) {
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

  const setThemeOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const setNavVisibleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(navSettings.navTop);
    if (navSettings.navTop) return;

    const isChecked = e.currentTarget.checked;
    const newNavSettings = { ...navSettings };

    if (isChecked) {
      newNavSettings.navVisible = true;
    } else {
      newNavSettings.navVisible = false;
    }

    setNavSettings(() => ({ ...newNavSettings }));
    setNavVisible(isChecked);
  };

  const setNavTopOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const windowScrollY = window.scrollY || window.pageYOffset;
    const isChecked = e.currentTarget.checked;
    const newNavSettings = { ...navSettings };
    if (isChecked) {
      newNavSettings.navTop = true;
    } else {
      newNavSettings.navTop = false;
    }

    setNavSettings(() => ({ ...newNavSettings }));
    setNavRelative(isChecked);
    setDisabled(() => isChecked);
    if (hamburgerMenuEl.current && isChecked && windowScrollY > 55) {
      hamburgerMenuEl.current.classList.remove("active");
      setMenu(() => false);
      setSettings(() => false);
    }
  };

  const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== " ") return;
    const id = e.currentTarget.getAttribute("id");
    switch (id) {
      case "cb-navTop":
        setNavTopOnKey(e);
        break;
      case "cb-hideNav":
        setNavVisibleOnKey(e);
        break;
      case "cb-darkMode":
        setThemeOnKey(e);
        break;
      default:
        return;
    }
  };

  const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
    const id = e.currentTarget.getAttribute("id");

    switch (id) {
      case "cb-navTop":
        onInputNavPosition(e);
        break;
      case "cb-hideNav":
        onInputNavVisible(e);
        break;
      case "cb-darkMode":
        onInputDarkMode(e);
        break;
      default:
        return;
    }
  };
  return (
    <>
      {/* Works with Google/Samsung Screen Reader on Android */}
      {/* NVDA with cursor won't recognize it as a checkbox, focusing on it will*/}
      {/* NVDA with IE or Edge works normal with cursor */}
      <label className="toggle-area-item-label" htmlFor={id}>
        {lableName}
      </label>
      <label className="switch" htmlFor={id}>
        <input
          id={id}
          className="custom-toggle"
          type="checkbox"
          defaultChecked={defaultChecked}
          onKeyDown={onKeyDownInput}
          onClick={onClickInput}
          {...tabIndex}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
