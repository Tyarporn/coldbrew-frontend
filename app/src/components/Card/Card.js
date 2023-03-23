import './Card.css'
import React, { Component } from "react";

function Card({image, name}) {
    return (
        <div className='card'>
        <div className='row product'>
            <div className="middle-area">
                <button className='btn'>{name}</button>
                {/* <button className='btn'>BrewBot</button>
                <button className='btn'>Crisco</button>
                <button className='btn'>Stonkster</button> */}
            </div>
            <div>
                
            </div>
            <div className="symbols">
                <img src={image} alt="Sample Image" height="170" width="250"/>
            </div>
        </div>
        
        </div>
    );
}


export default Card;