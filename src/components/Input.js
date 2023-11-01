import React from 'react'
import { FaFile  } from "react-icons/fa6";
import { BsImage  } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";


const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Enter your message'/>
      <div className='send'>
        <input type='file' style={{display:"none"}} id='file'/>
        <label htmlFor='file' style={{display:"flex",gap:"10px"}}>
          <FaFile style={{color:"gray" , fontSize:"30px" , cursor:"pointer"}}/>
          <BsImage style={{color:"gray" , fontSize:"30px" , cursor:"pointer"}}/>
        </label>
          <button><VscSend style={{color:"gray" , fontSize:"30px" , cursor:"pointer"}}/></button>

      </div>
    </div>
  )
}

export default Input
