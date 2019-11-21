import React, { Fragment } from "react";
import Navigation from "./components/layout/Navigation";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects";
import Graph from "./components/Graph";
import SVGDefs from "./components/SVGDefs";
import { setTheme } from "./utils/settings";

const theme = localStorage.getItem("theme");
if (theme) setTheme(theme);
const navVisible = localStorage.getItem("navVisible");
if (!navVisible) localStorage.setItem("navVisible", "true");

const App: React.FC = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Graph></Graph>
      <SVGDefs></SVGDefs>
    </Fragment>
  );
};

export default App;
