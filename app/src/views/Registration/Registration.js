import './Registration.css'
import React from 'react'


function Registration() {
    return (
        <div className='sign-up-form'>
            <h1>Register Now</h1>
            <form>
                <label>Please Enter Your Email</label>
                <input type="email" className="input-box" placeholder="Your Email"></input>
                <label>Please Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password"></input>
                <label>Please Re-Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password"></input>
                <button type="button" className="signup-btn">Create Account</button>
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