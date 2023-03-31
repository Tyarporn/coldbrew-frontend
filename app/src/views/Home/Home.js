import './Home.css'
import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"



function Home() {
 
    return (
        <div className='home'>
            <h2>Hi there!</h2>
            <p>Welcome to BrewBots</p>
            <p>The premier place to discover and distribute Discord bots.</p>
        </div>
    );
}

export default Home;