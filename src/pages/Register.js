import React from 'react';
import './style.scss'
const Register = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className='head'>We Chat</span>
            <span>Register</span>
            <form>
                <input type='text' placeholder='your name..'/>
                <input type='email' placeholder='your email..'/>
                <input type='password' placeholder='your password..'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src="https://cdn-icons-png.flaticon.com/512/16/16410.png"/>
                    <span>Add an Avatar</span>
                </label>

                <button>Sign Up</button>               
            </form>
            <p>Already have an Account ? <a>Login</a></p>
        </div>
    </div>
  )
}

export default Register
