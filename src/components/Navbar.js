import React from 'react'
import Image from "../assets/download.jpeg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>We Chat</span>
        <div className='user'>
            <img src={Image}/>
            <span>John</span>
            <button>Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
