import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";
import NavBar from "./components/NavigationBar/NavBar"
import Brewmeister from "./views/Brewmeister/Brewmeister"
import Brewbot from "./views/Brewbot/Brewbot";
import Crisco from "./views/Crisco/Crisco";
import Stonkster from "./views/Stonkster/Stonkster";

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
          <Route path='/brewmeister' element
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
