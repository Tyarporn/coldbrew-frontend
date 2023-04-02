import './Stonkster.css'
import React from "react";
import Card from '../../components/Card/Card'
import {useState, useEffect} from 'react';
import axios from "axios"


function Stonkster() {

    const [botName, setBotName] = useState([])
    const [botID, setBotID] = useState([])
    const [botDescription, setBotDescription] = useState([])
    const images = ['brewmeister.png', 'brew_bot_logo.png', 'crisCo_logo.jpeg', 'stonkster_logo.png']

    const fetchBotNames = async () => {
        return axios.get("http://127.0.0.1:8080/listbots")
        .then(res => {
            console.log(res)
            setBotName(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      const fetchBotID = async () => {
        return axios.get("http://127.0.0.1:8080/show_bot_ids")
        .then(res => {
            console.log(res)
            setBotID(res.data.Data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      const fetchBotDescription = async () => {
        return axios.get("http://127.0.0.1:8080/show_bot_details")
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
            <Card image={images[3]} name={botName[3]} botDesc={botDescription[botName[3]]} botID={botID[botName[3]]}></Card>
        </div>
    );
}

export default Stonkster;