import cssVars from "css-vars-ponyfill";
import { theme, ISettings } from "../models/index";

const settingsConfig: ISettings = {
  darkMode: false,
  hideHeader: true,
  headerTop: false,
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
    btnBG: "#00000000",
    btnBorder: "#5396f0",
    btnBgFocus: "#5396f0",
    btnTxtFocus: "#fff",
    heroImgColor1: "#bbb",
    heroImgColor2: "#25385b",
    heroImgColor3: "#6c6c6c",
    heroImgColor4: "#030f27",
    iconColor: "#bbb"
  },
  lightTheme: {
    headerColor: "#fff",
    navTxtColor: "#ffffffad",
    navBgColor: "#011daa",
    primaryTxtColor: "#011daa",
    secondaryTxtColor: "#ccc",
    primaryBg: "#fff",
    cardBg: "#fff",
    cardTxt: "#888",
    btnTxt: "#fff",
    btnBG: "#011daa",
    btnBorder: "#fff",
    btnBgFocus: "#000",
    btnTxtFocus: "#fff",
    heroImgColor1: "#fff",
    heroImgColor2: "#011daa",
    heroImgColor3: "#336aed",
    heroImgColor4: "#1145c1",
    iconColor: "#011daa"
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
  document.documentElement.style.setProperty(
    "--hero-img-color1",
    theme.heroImgColor1
  );
  document.documentElement.style.setProperty(
    "--hero-img-color2",
    theme.heroImgColor2
  );
  document.documentElement.style.setProperty(
    "--hero-img-color3",
    theme.heroImgColor3
  );
  document.documentElement.style.setProperty(
    "--hero-img-color4",
    theme.heroImgColor4
  );
  document.documentElement.style.setProperty("--icon-color", theme.iconColor);

  // IE11 lacks css :root, this ponyfill is initialized in main file in order to be used
  cssVars({
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
      "--hero-img-color1": theme.heroImgColor1,
      "--hero-img-color2": theme.heroImgColor2,
      "--hero-img-color3": theme.heroImgColor3,
      "--hero-img-color4": theme.heroImgColor4,
      "--icon-color": theme.iconColor
    }
  });
};
