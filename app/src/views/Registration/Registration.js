import './Registration.css'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const apiURI = process.env.REACT_APP_LOCALHOST_URL;

    const fetchUsers = async () => {
      return axios.get(`${apiURI}/show_users`)
      .then(res => {
          console.log(res)
          setUsers(res.data.Data.Users)
      })
      .catch(err => {
          console.log(err)
      })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          if (users.includes(email)) {
            alert("This user already exists, use a different email.")
          }
          if (checkPassword === password) { // check to see if the user typed password correctly
            const response = await axios.post(`${apiURI}/create_user`, {'username': email, 'password': password, 'email': email, 'first_name': firstName, 'last_name': lastName, 'cart': {}});
            navigate('/login');  // Redirect to login page
          }
          else {
            alert("Please verify the password is typed correctly.")
          }
        } catch (error) {
          alert("There was an error registering your account. Please verify the email is unique and you type the same password.")
          console.error(error);
        }
      };

      useEffect(() => {
        fetchUsers();
      }, [])

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