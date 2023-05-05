import React from 'react'
import Nabvar from './Nabvar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Nabvar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar
