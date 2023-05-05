import React from 'react'
import Login from './Login'
import Sidebar from '../components/Sidebar'
import "./style.scss"
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
        </div>

      
    </div>
  )
}

export default Home
