import './CricSco.css'
import React from "react";
import Card from '../../components/Card/Card'
import {useState, useEffect} from 'react';
import axios from "axios"


function CricSco() {

    const [botName, setBotName] = useState([])
    const [botID, setBotID] = useState([])
    const [botDescription, setBotDescription] = useState([])
    const images = ['brewmeister.png', 'brew_bot_logo.png', 'crisCo_logo.jpeg', 'stonkster_logo.png']

    // const apiURI = process.env.REACT_APP_LOCALHOST_URL;
    const apiURI = process.env.REACT_APP_BACKEND_URL;

    const fetchBotNames = async () => {
        return axios.get(`${apiURI}/listbots`)
        .then(res => {
            console.log(res)
            setBotName(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      const fetchBotID = async () => {
        return axios.get(`${apiURI}/show_bot_ids`)
        .then(res => {
            console.log(res)
            setBotID(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      const fetchBotDescription = async () => {
        return axios.get(`${apiURI}/show_bot_details`)
        .then(res => {
            console.log(res)
            setBotDescription(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      useEffect(() => {
        fetchBotNames()
        fetchBotDescription()
        fetchBotID()
      }, [])

    return (
        <div>
            <Card image={images[2]} name={botName[2]} botDesc={botDescription[botName[2]]} botID={botID[botName[2]]}></Card>
            <a href="https://discord.com/oauth2/authorize?client_id=1029079767443591220&scope=bot" >
                <button onClick type='button' className='signup-btn'>Download Now!</button>
            </a>
        </div>
    );
}

export default CricSco;