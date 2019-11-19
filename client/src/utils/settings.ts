import cssVars from "css-vars-ponyfill";
import { theme, ISettings } from "../models/index";

const settingsConfig: ISettings = {
  darkMode: false,
  hideHeader: true,
  headerTop: false,
  darkTheme: {
    navTxtColor: "#0303a3",
    primaryTxtColor: "#5396f0",
    secondaryTxtColor: "#0303a3",
    primaryBg: "#030f27",
    cardBg: "#231d55",
    cardTxt: "#9288dc",
    btnTxt: "#000"
  },
  lightTheme: {
    navTxtColor: "#ccc",
    primaryTxtColor: "#011daa",
    secondaryTxtColor: "#ccc",
    primaryBg: "#fff",
    cardBg: "#fff",
    cardTxt: "#888",
    btnTxt: "#fff"
  }
};

export const setTheme = (theme: string) => {
  const { darkTheme, lightTheme } = settingsConfig;
  if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    changeTheme(darkTheme);
  } else {
    localStorage.setItem("theme", "light");
    changeTheme(lightTheme);
  }
};

export const isNavVisible = (): boolean => {
  const item = localStorage.getItem("navVisible");
  if (!item) return true;

  return item === "true";
};

export const isNavTop = (): boolean => {
  const item = localStorage.getItem("navRelative");
  if (!item) return false;

  return item === "true";
};

export const setNavRelative = (isRelative: boolean): void => {
  localStorage.setItem("navRelative", isRelative.toString());
};

export const setNavVisible = (isVisible: boolean): void => {
  localStorage.setItem("navVisible", isVisible.toString());
};

const changeTheme = (theme: theme): void => {
  changeMetaTagTileColor(theme);
  changeCSSVars(theme);
};

const changeMetaTagTileColor = (theme: theme): void => {
  const themeColor = document.getElementById("theme-color");
  if (themeColor) {
    themeColor.setAttribute("content", theme.primaryTxtColor);
  }
};

const changeCSSVars = (theme: theme): void => {
  document.documentElement.style.setProperty(
    "--primary-txt-color",
    theme.primaryTxtColor
  );
  document.documentElement.style.setProperty(
    "--nav-txt-color",
    theme.navTxtColor
  );
  document.documentElement.style.setProperty(
    "--secondary-txt-color",
    theme.secondaryTxtColor
  );
  document.documentElement.style.setProperty("--primary-bg", theme.primaryBg);
  document.documentElement.style.setProperty("--card-bg", theme.cardBg);
  document.documentElement.style.setProperty("--card-txt", theme.cardTxt);
  document.documentElement.style.setProperty("--btn-txt", theme.btnTxt);

  // IE11 lacks css :root, this ponyfill is initialized in main file in order to be used
  cssVars({
    variables: {
      "--nav-txt-color": theme.navTxtColor,
      "--primary-txt-color": theme.primaryTxtColor,
      "--secondary-txt-color": theme.secondaryTxtColor,
      "--primary-bg": theme.primaryBg,
      "--card-bg": theme.cardBg,
      "--card-txt": theme.cardTxt,
      "--btn-txt": theme.btnTxt
    }
  });
};
