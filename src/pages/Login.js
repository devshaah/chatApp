import React, { useState } from 'react'
import "./Login.scss"
import { useNavigate,Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };


  return (
<div className='form-container'>
        <div className='form-wrapper'>
            <span className='head'>We Chat</span>
            <span>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='your email..'/>
                <input type='password' placeholder='your password..'/>

                <button>Sign Up</button>               
            </form>
            <p> Don't have an Account ? <Link to='/register' style={{cursor:"pointer"}}>Register Now</Link></p>
        </div>
    </div>
  )
}

export default Login
