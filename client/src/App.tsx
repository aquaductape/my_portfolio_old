import React, { Fragment } from 'react';
import Navigation from './components/layout/Navigation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Graph from './components/Graph';
import SVGDefs from './components/SVGDefs';

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
