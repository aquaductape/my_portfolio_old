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
  navTxtColor: "#0303a3" | "#ccc";
  primaryTxtColor: "#5396f0" | "#011daa";
  secondaryTxtColor: "#0303a3" | "#ccc";
  primaryBg: "#030f27" | "#fff";
  cardBg: "#231d55" | "#fff";
  cardTxt: "#9288dc" | "#888";
  btnTxt: "#000" | "#fff";
};

export interface ISettings {
  darkMode: boolean;
  hideHeader: boolean;
  headerTop: boolean;
  darkTheme: theme;
  lightTheme: theme;
}
