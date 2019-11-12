import React, { useState } from "react";
import { ISettings } from "../models";
import { setTheme } from "../utils/settings";

export default function Settings() {
  const isChecked = (): boolean => {
    const item = localStorage.getItem("theme");
    if (!item) return true;

    return item === "dark" ? true : false;
  };
  const [settings] = useState<ISettings>({
    darkMode: isChecked(),
    hideHeader: true,
    headerTop: false,
    darkTheme: {
      primaryColor: "#5396f0",
      textColor: "#ccc",
      primaryBg: "#030f27"
    },
    lightTheme: {
      primaryColor: "#011daa",
      textColor: "#ccc",
      primaryBg: "#fff"
    }
  });

  const onInputDarkMode = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { darkTheme, lightTheme } = settings;
    if (e.currentTarget.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="toggle-btn-area">
      <label htmlFor="cb1">Dark Mode</label>
      <input
        className="tgl tgl-light"
        id="cb1"
        type="checkbox"
        defaultChecked={settings.darkMode}
        onClick={onInputDarkMode}
      />
      <label className="tgl-btn" htmlFor="cb1"></label>
    </div>
  );
}
