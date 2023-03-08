import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container">
            <div className="header-area">
            <ul class="links">
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">About</a></li>
                <li><a href="#contact">Discover</a></li>
                <li><a href="#about">Contact Us</a></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;