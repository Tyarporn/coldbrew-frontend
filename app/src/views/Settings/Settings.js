import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Settings.css'

function Settings() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    return (
        <div>
                <label>Please Enter Your New Email</label>
                <input type="email" className="input-box" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Please Enter Your New Password</label>
                <input type="password" className="input-box" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
    );
};

export default Settings;