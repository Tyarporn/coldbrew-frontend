import './NavBar.css'
import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"

function NavBar() {

    const [mainMenu, setMainMenu] = useState([])
    const fetchHATEOAS = async () => {
        return axios.get("http://127.0.0.1:8080/main_menu")
        .then(res => {
            console.log(res)
            setBotName(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }
    
      useEffect(() => {
        fetchHATEOAS()
      }, [])

    return (
        <div className="container">
            <div className="header-area">
            <ul class="links">
                <li><a class="active" href='/'>Home</a></li>
                <li><a href='/discover'>Discover</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li className='last_button'><a href="/login">Login</a></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;