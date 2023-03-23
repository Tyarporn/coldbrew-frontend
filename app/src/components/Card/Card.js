import './Card.css'
import React, { Component } from "react";

function Card({image, name, botDesc, botID}) {
    return (
        <div className='card'>

            <div className='row product'>
                <div className="middle-area">
                    <a href={'http://localhost:3000/' + name} >
                        <button onClick type='button' className='btn'>{name}</button>
                    </a>
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