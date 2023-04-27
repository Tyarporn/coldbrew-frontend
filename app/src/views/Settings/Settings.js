import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Settings.css'

function Settings() {

    const [email, setEmail] = useState('');
    const [currEmail, setCurrEmail] = useState('');
    const [currPass, setCurrPass] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const apiURI = process.env.REACT_APP_BACKEND_URL;

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

        console.log(currEmail);
        console.log(currPass);
        console.log(email);
        console.log(password);


        try {
            if (users.includes(email)) {
                alert("This user already exists, use a different email.")
            }
            if (checkPassword === password) { // check to see if the user typed password correctly
                const response = await axios.post(`${apiURI}/update_user`, { 'username': email, 'password': password});
                navigate('/login');  // Redirect to login page
            }
            else {
                alert("Please verify the password is typed correctly.")
            }
        } catch (error) {
            alert("There was an error adjusting your account. Please verify the email is unique and you type the same password.")
            console.error(error);
        }
    };
    const handleDeleteSubmit = async (event) => {
        event.preventDefault();
        try {
            if (checkPassword === password) { // check to see if the user typed password correctly
                const response = await axios.post(`${apiURI}/delete_user`);
                navigate('/login');  // Redirect to login page
            }
            else {
                alert("Please verify the password is typed correctly.")
            }
        } catch (error) {
            alert("There was an error deleting your account.")
            console.error(error);
        }
    };


    return (
        <div className='Settings'>
            <h1>Change Information</h1>
            <form onSubmit={handleSubmit}>
                <label>Please Enter Your Current Email</label>
                <input type="email" className="input-box" placeholder="Your Current Email" onChange={(e) => setCurrEmail(e.target.value)}></input>
                <label>Please Enter Your Current Password</label>
                <input type="password" className="input-box" placeholder="Your Current Password" onChange={(e) => setCurrPass(e.target.value)}></input>
                <label>Please Enter Your New Email</label>
                <input type="email" className="input-box" placeholder="Your New Email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Please Enter Your New Password</label>
                <input type="password" className="input-box" placeholder="Your New Password" onChange={(e) => setPassword(e.target.value)}></input>
                <label>Please Re-Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your New Password" onChange={(e) => setCheckPassword(e.target.value)}></input>
                <a href={`${process.env.REACT_APP_FRONTEND_URL}/settings`} >
                    <button type='submit' className='signup-btn'>Change Information</button>
                </a>
            </form>

            <h1>Delete Account</h1>
            <form onSubmit={handleDeleteSubmit}>
                <label>Please Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password" onChange={(e) => checkPassword(e.target.value)}></input>
                <a href={`${process.env.REACT_APP_FRONTEND_URL}/settings`} >
                    <button type='button' className='signup-btn'>Delete Account</button>
                </a>
            </form>

        </div>
    )
}

export default Settings;