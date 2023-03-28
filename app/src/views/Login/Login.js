import './Login.css'
import React from 'react'


function Login() {
    return (
        <div className='sign-up-form'>
            <h1>Login</h1>
            <form>
                <label>Please Enter Your Email</label>
                <input type="email" className="input-box" placeholder="Your Email"></input>
                <label>Please Enter Your Password</label>
                <input type="password" className="input-box" placeholder="Your Password"></input>
                <button type="button" className="signup-btn">Login</button>
                <hr/>
                <p>Don't Have an Account? Register Now!</p>
                <a href={'http://localhost:3000/register'} >
                        <button onClick type='button' className='signup-btn'>Register</button>
                    </a>
            </form>
        </div>
    )
}

export default Login;