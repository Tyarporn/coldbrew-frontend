import './NavBar.css'
import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"
import Login from "../../views/Login/Login"

function NavBar() {
    const [mainMenuA, setMainMenuA] = useState([])
    const [mainMenuB, setMainMenuB] = useState([])
    const [mainMenuC, setMainMenuC] = useState([])
    const [mainMenuD, setMainMenuD] = useState([])
    const [mainMenuE, setMainMenuE] = useState([])
    const [mainMenuF, setMainMenuF] = useState([])

    // const apiURI = process.env.REACT_APP_LOCALHOST_URL;
    const apiURI = process.env.REACT_APP_BACKEND_URL;
 
    const fetchHATEOAS = async () => {
        return axios.get(`${apiURI}/main_menu`)
        .then(res => {
            console.log("res.data",res.data.Choices["b"])
            setMainMenuA(res.data.Choices.a)
            setMainMenuB(res.data.Choices.b)
            setMainMenuC(res.data.Choices.c)
            setMainMenuD(res.data.Choices.d)
            setMainMenuE(res.data.Choices.e)
            setMainMenuF(res.data.Choices.f)
            
        })
        .catch(err => {
            console.log(err)
        })
      }
    
      useEffect(() => {
        fetchHATEOAS()
      }, [])

    return (
        console.log("mainMenuA", mainMenuA.url),
        <div className="container">
            <div className="header-area">
            <ul class="links">
                <li><a class="active" href={mainMenuA.url}>Home</a></li>
                <li><a href={mainMenuB.url}>Discover</a></li>
                <li><a href={mainMenuC.url}>About</a></li>
                <li><a href={mainMenuD.url}>Contact Us</a></li>
                <li><a href={mainMenuF.url}>Settings</a></li>
                <li><a href={mainMenuE.url}>Logout</a></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;