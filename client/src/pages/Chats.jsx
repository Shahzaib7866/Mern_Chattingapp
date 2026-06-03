import React from 'react'
import '../assets/style.css'
import logochat from '../assets/logochat.png'
import AddIcon from '@mui/icons-material/Add';



const Chats = () => {
  return (
<div className='home'>
  {/* Left Section: Chat List */}
  <div className='chat-list'>
<h1 className="text-2xl font-bold text-gray-800 tracking-tight">Chats</h1>
 <input 
      type="search" 
      name="search" 
      placeholder="Search messages..." 
      className='w-full pl-2 pr-4 py-2 bg-gray-100 border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none placeholder:text-gray-400'
    />

    <div className='chat-item'>
      Chat 1
      {/* <img src={logochat} alt="Logo" /> */}
    </div>
    {/* ... other chat items */}
  </div> 

  {/* Middle Section: Divider */}
  <div className="divider"></div>

  {/* Right Section: Chat Window */}
<div className='chat-window flex flex-col h-full p-4'>
  {/* Messages section */}
  <div className='messages flex-1 overflow-y-auto mb-4'>
    {/* ... messages */}
  </div>

  {/* Input Area */}
  <div className="relative flex items-center">
    <input 
      type="text" 
      placeholder="Type a message..." 
      className="w-full pl-6 pr-14 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all shadow-sm"
    />
    
    {/* Icon with Title for Tooltip */}
    <div 
      className="absolute right-3 cursor-pointer text-gray-500 hover:text-blue-600 transition-colors"
      title="Attach" 
    >
      <AddIcon fontSize="medium" />
    </div>
  </div>
</div>


</div>
  )
}

export default Chats