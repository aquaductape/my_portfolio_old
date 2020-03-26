import React, { Fragment, Suspense } from "react";
import Navigation from "./components/layout/Navigation/Navigation";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Graph from "./components/Graph";
import SVGDefs from "./components/SVG/SVGDefs";
import { setTheme } from "./utils/settings";

const Skills = React.lazy(() =>
  import(/* webpackChunkName: "skills" */ "./components/Skills/Skills")
);

const theme = localStorage.getItem("theme");
if (theme) setTheme(theme);
const navVisible = localStorage.getItem("navVisible");
if (!navVisible) localStorage.setItem("navVisible", "true");

const App: React.FC = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <AboutMe></AboutMe>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills></Skills>
      </Suspense>
      <Projects></Projects>
      <Graph></Graph>
      <SVGDefs></SVGDefs>
    </Fragment>
  );
};

export default App;
