import React from 'react'
import "./Login.scss"
import Register from './Register'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
    
  return (
<div className='form-container'>
        <div className='form-wrapper'>
            <span className='head'>We Chat</span>
            <span>Login</span>
            <form>
                <input type='email' placeholder='your email..'/>
                <input type='password' placeholder='your password..'/>

                <button>Sign Up</button>               
            </form>
            <p>Don't have an Account ? <a onClick={navigate("/register")}>Register Now</a></p>
        </div>
    </div>
  )
}

export default Login
