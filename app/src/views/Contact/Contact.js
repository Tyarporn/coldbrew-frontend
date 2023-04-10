import './Contact.css'
import React from "react";


function Contact() {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <text>
                <h3>The information of each member of the Coldbrew Coders team is listed below</h3>
                <p> For issues with backend development, contact                 
                    <a href="https://github.com/Tyarporn"> Ty Arpornsuksant </a> and
                    <a href="https://github.com/Shashanka-Sharma"> Shashanka Sharma </a> <br /></p>

                <p> For issues with frontend development, contact
                    <a href="https://github.com/cameronvong"> Cameron Vong </a> and
                    <a href="https://github.com/chowdhurytahmeed "> Tahmeed Chowdhury </a> <br /></p>

            </text>
        </div>
    );
}

export default Contact;