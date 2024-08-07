import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
