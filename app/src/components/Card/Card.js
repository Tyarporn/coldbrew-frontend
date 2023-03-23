import './Card.css'
import React, { Component } from "react";

function Card({image, name, botDesc, botID}) {
    return (
        <div className='card'>
            <div className='row product'>
                <div className="middle-area">
                    <button className='btn'>{name}</button>
                    <h2>{botID}</h2>
                    <p>{botDesc}</p>
                </div>
                
            <div className="symbols">
                <img src={image} alt="Sample Image" height="170" width="250"/>
            </div>
        </div>
        
        </div>
    );
}


export default Card;