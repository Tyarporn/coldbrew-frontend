import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Home from "./Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";

const App = () => {
  return (
    <div>
      <h1>BrewBots</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/discover">Discover</a>
      </nav>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
