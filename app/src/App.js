import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";
import NavBar from "./components/NavigationBar/NavBar"
import Brewmeister from "./views/Brewmeister/Brewmeister"
import Brewbot from "./views/Brewbot/Brewbot";
import CricSco from "./views/CricSco/CricSco";
import Stonkster from "./views/Stonkster/Stonkster";
import Contact from "./views/Contact/Contact"
import Login from "./views/Login/Login"

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
          <Route path='/brewmeister' element={<Brewmeister />} />
          <Route path='/brewbot' element={<Brewbot />} />
          <Route path='/cricsco' element={<CricSco />} />
          <Route path='/stonkster' element={<Stonkster />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
