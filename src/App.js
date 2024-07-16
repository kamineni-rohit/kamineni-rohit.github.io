import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router, Route, and Switch components from react-router-dom
import Header from './components/Header'; // Import Header component
import About from './components/About'; // Import About component
import Projects from './components/Projects'; // Import Projects component
import Contact from './components/Contact'; // Import Contact component

// App component definition
const App = () => {
  return (
    <Router>
      <Header /> {/* Render Header component */}
      <Switch>
        {/* Define routes */}
        <Route exact path="/" component={About} /> {/* Home route */}
        <Route path="/about" component={About} /> {/* About route */}
        <Route path="/projects" component={Projects} /> {/* Projects route */}
        <Route path="/contact" component={Contact} /> {/* Contact route */}
      </Switch>
    </Router>
  );
};

export default App; // Export the App component
