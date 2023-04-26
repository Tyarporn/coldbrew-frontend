import './Login.css'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const apiURI = process.env.REACT_APP_LOCALHOST_URL;
    const apiURI = process.env.REACT_APP_BACKEND_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post(`${apiURI}/auth`, {'username': email, 'password': password});
          const token = response.data.token;
          localStorage.setItem('token', token);
          navigate('/home');  // Redirect to the homepage
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <div className='sign-up-form'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Please Enter Your Email</label>
                <input type="email" className="input-box" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Please Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" className="signup-btn">Login</button>
                <hr/>
                <p>Don't Have an Account? Register Now!</p>
                <a href={`${process.env.REACT_APP_BACKEND_URL}/register`} >
                        <button type='button' className='signup-btn'>Register</button>
                </a>
            </form>
        </div>
    )
}

export default Login;