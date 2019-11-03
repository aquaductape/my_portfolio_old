import React, { Fragment } from 'react';
import Navigation from './components/layout/Navigation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      {/* Graph */}
    </Fragment>
  );
};

export default App;
