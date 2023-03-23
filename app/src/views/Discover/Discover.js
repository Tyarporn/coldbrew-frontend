import './Discover.css'
import React, { Component } from "react";
import Card from '../../components/Card/Card';
import {useState, useEffect} from 'react';
import axios from "axios"

function Discover({image, name}) {

    const [botName, setBotName] = useState([])
    const [botID, setBotID] = useState([])
    const [botDescription, setBotDescription] = useState([])

    const fetchBotNames = async () => {
        return axios.get("http://127.0.0.1:8080/")
        .then(res => {
            console.log(res)
            setProductName(res.data.product_data)
        })
        .catch(err => {
            console.log(err)
        })
      }


    
    return (
        <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
        // <div className="container main-content">
        // <section>
        //     {Array.from({ length: 4 }, (_, i) => <Card image={image[i]} name={name[i]} />)}
        // </section>
        // </div>
    );
}

export default Discover;