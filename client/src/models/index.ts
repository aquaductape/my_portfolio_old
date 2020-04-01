import { IAddEscapeHatchResult } from "../utils/addEscapeHatch";

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
  //  AVOID hex alpha values for older browsers!!! use rgba instead
  headerColor: /* dark */ "#fff" | "#fff";
  navTxtColor: /* dark */ "#bbb" | "#bbc2e3";
  navBgColor: /* dark */ "#25385b" | "#2d42a8";
  primaryTxtColor: /* dark */ "#fff" | "#2d42a8";
  secondaryTxtColor: /* dark */ "#bbb" | "#ccc";
  primaryBg: /* dark */ "#030f27" | "#fff";
  cardBg: /* dark */ "#142546" | "#fff";
  cardTxt: /* dark */ "#ccc" | "#888";
  btnTxt: /* dark */ "#5396f0" | "#fff";
  btnBG: /* dark */ "rgba(0, 0, 0, 0)" | "#011daa";
  btnBorder: /* dark */ "#5396f0" | "#fff";
  btnBgFocus: /* dark */ "#5396f0" | "#000";
  btnTxtFocus: /* dark */ "#030f27" | "#fff";
  graphColor: /* dark */ "#bbb" | "#2d42a8";
  iconColor: /* dark */ "#bbb" | "#2d42a8";
  heroColor: /* dark */ "rgba(25, 43, 76, 0.7)" | "rgba(28, 46, 136, 0.68)";
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
  menuEscapeHatchRef: React.MutableRefObject<IAddEscapeHatchResult>;
}
