import React, { useState } from "react";

import { ISettingsReactComponent } from "../../../models/index";
import Checkbox from "./Checkbox";

export default function Settings({
  navSettings,
  setNavSettings,
  menuEscapeHatchRef
}: ISettingsReactComponent) {
  const [disabled, setDisabled] = useState(navSettings.navTop);

  const isDarkMode = (): boolean => {
    const item = localStorage.getItem("theme");
    if (!item) return false;

    return item === "dark";
  };

  const checkboxList = [
    {
      id: "cb-darkMode",
      label: "Dark Mode",
      defaultChecked: isDarkMode(),
      allowDisable: false
    },
    {
      id: "cb-hideNav",
      label: "Hide Navigation when Scrolling Down",
      defaultChecked: navSettings.navVisible,
      allowDisable: true
    },
    {
      id: "cb-navTop",
      label: "Keep Navigation at Top",
      defaultChecked: navSettings.navTop,
      allowDisable: false
    }
  ];

  const renderCheckboxes = checkboxList.map(
    ({ id, label, defaultChecked, allowDisable = false }, idx) => {
      const defaultClassName = allowDisable
        ? { className: `toggle-area-item ${disabled ? "disabled" : ""}` }
        : { className: "toggle-area-item" };
      return (
        <li {...defaultClassName} key={idx}>
          <Checkbox
            id={id}
            labelTextContent={label}
            defaultChecked={defaultChecked}
            navSettings={navSettings}
            setNavSettings={setNavSettings}
            allowDisable={allowDisable}
            disabled={disabled}
            setDisabled={setDisabled}
            menuEscapeHatchRef={menuEscapeHatchRef}
          ></Checkbox>
        </li>
      );
    }
  );

  return <ul className="toggle-area">{renderCheckboxes}</ul>;
}
