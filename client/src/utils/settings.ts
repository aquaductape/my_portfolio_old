import cssVars from "css-vars-ponyfill";
import { theme, ISettings } from "../models/index";

const settingsConfig: ISettings = {
  darkMode: false,
  hideHeader: true,
  headerTop: false,
  //  AVOID hex alpha values for older browsers!!! use rgba instead
  darkTheme: {
    headerColor: "#fff",
    navTxtColor: "#bbb",
    navBgColor: "#25385b",
    primaryTxtColor: "#fff",
    secondaryTxtColor: "#bbb",
    primaryBg: "#030f27",
    cardBg: "#142546",
    cardTxt: "#ccc",
    btnTxt: "#5396f0",
    btnBG: "rgba(0, 0, 0, 0)",
    btnBorder: "#5396f0",
    btnBgFocus: "#5396f0",
    btnTxtFocus: "#fff",
    graphColor: "#bbb",
    iconColor: "#bbb",
    heroColor: "rgba(25, 43, 76, 0.7)",
  },
  // AVOID hex alpha values for older browsers(IE and Edge Legacy)!!!
  // use rgba instead
  lightTheme: {
    headerColor: "#fff",
    navTxtColor: "#bbc2e3",
    navBgColor: "#2d42a8",
    primaryTxtColor: "#2d42a8",
    secondaryTxtColor: "#ccc",
    primaryBg: "#fff",
    cardBg: "#fff",
    cardTxt: "#888",
    btnTxt: "#fff",
    btnBG: "#011daa",
    btnBorder: "rgba(0, 0, 0, 0)",
    btnBgFocus: "#000",
    btnTxtFocus: "#fff",
    graphColor: "#2d42a8",
    iconColor: "#2d42a8",
    heroColor: "rgba(28, 46, 136, 0.68)",
  },
};

export const setTheme = (theme: string) => {
  const { darkTheme, lightTheme } = settingsConfig;
  try {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      changeTheme(darkTheme);
    } else {
      localStorage.setItem("theme", "light");
      changeTheme(lightTheme);
    }
  } catch (err) {
    console.log(err);
  }
};

export const isNavVisible = (): boolean => {
  try {
    const item = localStorage.getItem("navVisible") || "true";
    return item === "true";
  } catch (err) {
    console.log(err);
  }
  return true;
};

export const isNavTop = (): boolean => {
  try {
    const item = localStorage.getItem("navRelative") || "false";

    return item === "true";
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const setNavRelative = (isRelative: boolean): void => {
  try {
    localStorage.setItem("navRelative", isRelative.toString());
  } catch (err) {
    console.log(err);
  }
};

export const setNavVisible = (isVisible: boolean): void => {
  try {
    localStorage.setItem("navVisible", isVisible.toString());
  } catch (err) {
    console.log(err);
  }
};

const changeTheme = (theme: theme): void => {
  changeMetaTagTileColor(theme);
  changeCSSVars(theme);
};

const changeMetaTagTileColor = (theme: theme): void => {
  const themeColor = document.getElementById("theme-color");
  if (themeColor) {
    themeColor.setAttribute("content", theme.navBgColor);
  }
};

const changeCSSVars = (theme: theme): void => {
  document.documentElement.style.setProperty(
    "--header-color",
    theme.headerColor
  );
  document.documentElement.style.setProperty(
    "--primary-txt-color",
    theme.primaryTxtColor
  );
  document.documentElement.style.setProperty(
    "--nav-txt-color",
    theme.navTxtColor
  );
  document.documentElement.style.setProperty(
    "--nav-bg-color",
    theme.navBgColor
  );
  document.documentElement.style.setProperty(
    "--secondary-txt-color",
    theme.secondaryTxtColor
  );
  document.documentElement.style.setProperty(
    "--header-color",
    theme.headerColor
  );
  document.documentElement.style.setProperty("--primary-bg", theme.primaryBg);
  document.documentElement.style.setProperty("--card-bg", theme.cardBg);
  document.documentElement.style.setProperty("--card-txt", theme.cardTxt);
  document.documentElement.style.setProperty("--btn-txt", theme.btnTxt);
  document.documentElement.style.setProperty("--btn-bg", theme.btnBG);
  document.documentElement.style.setProperty("--btn-border", theme.btnBorder);
  document.documentElement.style.setProperty(
    "--btn-txt-focus",
    theme.btnTxtFocus
  );
  document.documentElement.style.setProperty(
    "--btn-bg-focus",
    theme.btnBgFocus
  );
  document.documentElement.style.setProperty("--graph-color", theme.graphColor);
  document.documentElement.style.setProperty("--icon-color", theme.iconColor);
  document.documentElement.style.setProperty("--hero-color", theme.heroColor);

  // IE11 lacks css :root, this ponyfill is initialized in main file in order to be used
  cssVars({
    onlyLegacy: true,
    watch: true,
    variables: {
      "--nav-txt-color": theme.navTxtColor,
      "--nav-bg-color": theme.navBgColor,
      "--primary-txt-color": theme.primaryTxtColor,
      "--secondary-txt-color": theme.secondaryTxtColor,
      "--primary-bg": theme.primaryBg,
      "--card-bg": theme.cardBg,
      "--card-txt": theme.cardTxt,
      "--btn-txt": theme.btnTxt,
      "--btn-bg": theme.btnBG,
      "--btn-border": theme.btnBorder,
      "--btn-txt-focus": theme.btnTxtFocus,
      "--btn-bg-focus": theme.btnBgFocus,
      "--graph-color": theme.graphColor,
      "--icon-color": theme.iconColor,
      "--hero-color": theme.heroColor,
    },
  });
};
