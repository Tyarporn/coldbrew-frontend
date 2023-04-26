import "./App.css";
import React, { useState, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Discover from "./views/Discover/Discover";
import NavBar from "./components/NavigationBar/NavBar"
import Brewmeister from "./views/Brewmeister/Brewmeister"
import Brewbot from "./views/Brewbot/Brewbot";
import CricSco from "./views/CricSco/CricSco";
import Stonkster from "./views/Stonkster/Stonkster";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Registration from "./views/Registration/Registration";
import Settings from "./views/Settings/Settings";

const myImage = 'new_bb_logo.png';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  
  return (
    <div>
      {loggedIn && <NavBar />}
      <center><img src={myImage} alt="BrewBots Logo" style={{ width: '20%', height: 'auto', }} /></center>
      <Router>
        <Routes>
        <Route exact path="/" element={loggedIn ? <Navigate to={Home}/> : <Navigate to={Login}/>} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path='/brewmeister' element={<Brewmeister />} />
        <Route path='/brewbot' element={<Brewbot />} />
        <Route path='/cricsco' element={<CricSco />} />
        <Route path='/stonkster' element={<Stonkster />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/logout' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
