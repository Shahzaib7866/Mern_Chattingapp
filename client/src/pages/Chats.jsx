import React, { useState } from 'react'
import '../assets/style.css'
import logochat from '../assets/logochat.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useRef } from 'react'; 
import PersonIcon from '@mui/icons-material/Person';
import ChatList from '../components/ChatList';
import MessagesWindow from '../components/MessagesWindow';
// import ChatHeader from '../components/ChatHeader';

const Chats = () => {

    const [isOpen, setIsOpen] = useState(false);
    const moreVertRef = useRef(null); 

    useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if click was outside the MoreVert menu (if you keep both)
    if (moreVertRef.current && !moreVertRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []); // Only one effect needed!

  return (

<div className='home'>
  {/* Left Section: Chat List */}
<div className='chat-list p-4'>
  {/* Flex container to align heading and icon */}
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Chats</h1>

    <div className='relative' ref={moreVertRef}>
    <div className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
       <MoreVertIcon onClick={() => setIsOpen(!isOpen)} />
    </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">New Group</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Archived</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              </ul>
            </div>
          )}
          </div>

  </div>

  {/* Search Input */}
  <input 
    type="search" 
    name="search" 
    placeholder="Search messages..." 
    className='w-full pl-4 pr-4 py-2 bg-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 transition-all outline-none'
  />

<ChatList />

</div>

  {/* Middle Section: Divider */}
  <div className="divider"></div>

  {/* Right Section: Chat Window */}
  {/* <ChatHeader /> */}
<MessagesWindow />



</div>
  )
}

export default Chats

