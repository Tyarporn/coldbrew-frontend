import './Card.css'
import React from "react";

function Card({image, name, botDesc, botID}) {
    // const apiURI = process.env.REACT_APP_LOCALHOST_URL;
    const apiURI = process.env.REACT_APP_FRONTEND_URL;
    return (
        <div className='card'>

            <div className='row product'>
                <div className="middle-area">
                    <a href={apiURI + name} >
                        <button onClick type='button' className='btn'>{name}</button>
                    </a>
                    <br></br>
                    <img src={image} alt="Sample" height="170" width="250"/>
                    <h2>{name}#{botID}</h2>
                    <p>{botDesc}</p>
                    </div>
                </div>
        </div>
    );
}


export default Card;