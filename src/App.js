import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch for React Router v6
import Header from './components/Header'; // Import Header component
import About from './components/About'; // Import About component
import Projects from './components/Projects'; // Import Projects component
import Contact from './components/Contact'; // Import Contact component

// App component definition
const App = () => {
  return (
    // Router component wraps the entire application to enable routing
    <Router>
      <Header /> {/* Render Header component, which will be visible on all pages */}
      <Routes> {/* Use Routes to define multiple Route components */}
        {/* Each Route component defines a path and the corresponding component to render */}
        <Route path="/" element={<About />} /> {/* Home route - renders About component */}
        <Route path="/about" element={<About />} /> {/* About route - renders About component */}
        <Route path="/projects" element={<Projects />} /> {/* Projects route - renders Projects component */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route - renders Contact component */}
      </Routes>
    </Router>
  );
};

export default App; // Export the App component
