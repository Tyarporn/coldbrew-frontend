import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";
import Contact from "./views/Contact/Contact"
import NavBar from "./components/NavigationBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>BrewBots</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
