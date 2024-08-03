// src/App.js

import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <Header />
      <main>
        <Home aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
      </main>
      <Footer ref={contactRef} />
    </Router>
  );
};

export default App;
