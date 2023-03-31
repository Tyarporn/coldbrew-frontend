import './Home.css'
import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"



function Home() {
    const [mainMenu, setMainMenu] = useState([])

    const fetchHATEOAS = async () => {
        return axios.get("http://127.0.0.1:8080/main_menu")
        .then(res => {
            console.log("res.data",res.data.Choices["2"])
            setMainMenu(res.data.Choices.a)
        })
        .catch(err => {
            console.log(err)
        })
      }
    
      useEffect(() => {
        fetchHATEOAS()
      }, [])
    return (
        console.log("return1", mainMenu.url),
        // console.log("return2", Object.values(Object.values(mainMenu)[2])),
        <div className='home'>
            {/* <div>
                {mainMenu.map(item => <div>{item}</div>)}
            </div> */}
            {/* <div>
                {mainMenu.Choices['1']['url']}
            </div> */}
            {/* <section>
                {Array.from({ length: 5 }, (_, i) => <div>{mainMenu.Choices}</div>)}
            </section> */}
            <h2>Hi there!</h2>
            <p>Welcome to BrewBots</p>
            <p>The premier place to discover and distribute Discord bots.</p>
        </div>
    );
}

export default Home;