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
    const [mainMenuF, setMainMenuF] = useState([])
 
    const fetchHATEOAS = async () => {
        return axios.get("http://127.0.0.1:8080/main_menu")
        .then(res => {
            console.log("res.data",res.data.Choices["b"])
            setMainMenuA(res.data.Choices.a)
            setMainMenuB(res.data.Choices.b)
            setMainMenuC(res.data.Choices.c)
            setMainMenuD(res.data.Choices.d)
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
                <li><a href={'http://localhost:3000/login'}>Logout</a></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;