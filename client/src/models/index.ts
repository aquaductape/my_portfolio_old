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
  primaryColor: string;
  textColor: string;
  primaryBg: string;
};

export interface ISettings {
  darkMode: boolean;
  hideHeader: boolean;
  headerTop: boolean;
  darkTheme: theme;
  lightTheme: theme;
}
