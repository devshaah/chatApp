import React from 'react'
import Video from '../assets/video.png'
import Add from '../assets/add.png'
import More from '../assets/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span className='logo'>Jane Doe</span>
        <div className='chatIcons'>
           <img src={Video}/>
           <img src={Add}/>
           <img src={More}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
