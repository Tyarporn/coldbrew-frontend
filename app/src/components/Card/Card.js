import './Card.css'
import React, { Component } from "react";
import Brewbot from '../../views/Brewbot/Brewbot';
import Brewmeister from '../../views/Brewmeister/Brewmeister'
import Stonkster from '../../views/Stonkster/Stonkster'
import Crisco from '../../views/Crisco/Crisco'

function Card({image, name, botDesc, botID}) {
    return (
        <div className='card'>

            <div className='row product'>
                <div className="middle-area">
                    <button onClick={name} type='button' className='btn'>{name}</button>
                    <br></br>
                    <img src={image} alt="Sample Image" height="170" width="250"/>
                    <h2>{name}#{botID}</h2>
                    <p>{botDesc}</p>
                    </div>
                </div>
        </div>
    );
}


export default Card;