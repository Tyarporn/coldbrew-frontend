import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";
import NavBar from "./components/NavigationBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>ColdBrew Coders</h1>
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
