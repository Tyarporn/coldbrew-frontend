import './Registration.css'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
          if (checkPassword === password) { // check to see if the user typed password correctly
            const response = await axios.post('http://127.0.0.1:8080/create_user', {'username': email, 'password': password, 'email': email, 'first_name': firstName, 'last_name': lastName, 'cart': {}});
            navigate('/login');  // Redirect to login page
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className='sign-up-form'>
            <h1>Register Now</h1>
            <form onSubmit={handleSubmit}>
                <label>Please Enter Your Email</label>
                <input type="email" className="input-box" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Please enter your first name</label>
                <input type="first_name" className="input-box" placeholder="Your First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                <label>Please enter your last name</label>
                <input type="last_name" className="input-box" placeholder="Your Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                <label>Please Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}></input>
                <label>Please Re-Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password" onChange={(e) => setCheckPassword(e.target.value)}></input>
                <button type="submit" className="signup-btn">Create Account</button>
                <hr/>
                <p>Already Have an Account?</p>
                <a href={'http://localhost:3000/login'} >
                        <button onClick type='button' className='signup-btn'>Login</button>
                </a>
            </form>
        </div>
    )
}

export default Registration;