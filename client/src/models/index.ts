export type WakaData = [string, string, number];

export type WakaSchema = [
  {
    name: "Project";
    type: "string";
  },
  {
    name: "Time";
    type: "date";
    format: "%-m/%-d/%Y";
  },
  {
    name: "Total";
    type: "number";
  }
];

export type theme = {
  headerColor: /* dark */ "#fff" | "#fff";
  navTxtColor: /* dark */ "#bbb" | "#ffffffad";
  navBgColor: /* dark */ "#25385b" | "#011daa";
  primaryTxtColor: /* dark */ "#fff" | "#011daa";
  secondaryTxtColor: /* dark */ "#bbb" | "#ccc";
  primaryBg: /* dark */ "#030f27" | "#fff";
  cardBg: /* dark */ "#142546" | "#fff";
  cardTxt: /* dark */ "#ccc" | "#888";
  btnTxt: /* dark */ "#5396f0" | "#fff";
  btnBG: /* dark */ "#00000000" | "#011daa";
  btnBorder: /* dark */ "#5396f0" | "#fff";
  btnBgFocus: /* dark */ "#5396f0" | "#000";
  btnTxtFocus: /* dark */ "#030f27" | "#fff";
  heroImgColor1: /* dark */ "#bbb" | "#fff";
  heroImgColor2: /* dark */ "#25385b" | "#011daa";
  heroImgColor3: /* dark */ "#6c6c6c" | "#336aed";
  heroImgColor4: /* dark */ "#030f27" | "#1145c1";
  iconColor: /* dark */ "#bbb" | "#011daa";
};

export interface ISettings {
  darkMode: boolean;
  hideHeader: boolean;
  headerTop: boolean;
  darkTheme: theme;
  lightTheme: theme;
}

export interface ISettingsReactComponent {
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
  toggleSettings: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: boolean;
  hamburgerMenuEl: React.RefObject<HTMLButtonElement>;
}
