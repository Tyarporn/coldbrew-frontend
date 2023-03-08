import './NavBar.css'
import React from 'react'

function NavBar() {
    return (
        <div className="container">
            <div className="header-area">
            <ul class="links">
                <li><a class="active" href='/'>Home</a></li>
                <li><a href='/discover'>Discover</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;