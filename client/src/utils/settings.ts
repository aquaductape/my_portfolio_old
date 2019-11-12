import cssVars from "css-vars-ponyfill";
import { theme } from "../models/index";

const settingsConfig = {
  darkMode: false,
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
};

export const setTheme = (theme: string) => {
  const { darkTheme, lightTheme } = settingsConfig;
  if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    changeCSSVars(darkTheme);
  } else {
    localStorage.setItem("theme", "light");
    changeCSSVars(lightTheme);
  }
};

const changeCSSVars = (theme: theme) => {
  document.documentElement.style.setProperty(
    "--primary-color",
    theme.primaryColor
  );
  document.documentElement.style.setProperty("--text-color", theme.textColor);
  document.documentElement.style.setProperty("--primary-bg", theme.primaryBg);

  // IE11 lacks css :root, this ponyfill is initialized in main file in order to be used
  cssVars({
    variables: {
      "--primary-color": theme.primaryColor,
      "--text-color": theme.textColor,
      "--primary-bg": theme.primaryBg
    }
  });
};
