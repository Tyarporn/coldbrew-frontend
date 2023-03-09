import './Discover.css'
import React, { Component } from "react";
import Card from '../../components/Card/Card';

function Discover({image, name}) {
        return (
            <div>
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