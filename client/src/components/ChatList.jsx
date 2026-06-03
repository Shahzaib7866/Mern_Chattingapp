import React from 'react'
import logochat from '../assets/logochat.png'


const ChatList = () => {
  return (
    <div>
          {/* Chat items */}
        <div className='chat-item mt-2 group cursor-pointer hover:bg-gray-100 transition-colors duration-200 px-1 py-2 flex items-center gap-2 rounded-xl'>
          
          {/* Avatar Section */}
          <div className="relative">
            <img 
              src={logochat} 
              alt="User" 
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            
            {/* Optional: Online status indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        
          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
              <h4 className="font-semibold text-gray-900 truncate">Chat Name</h4>
              <span className="text-xs text-gray-400">12:30 PM</span>
            </div>
            <p className="text-sm text-gray-500 truncate mt-0.5">
              This is the last message sent in this conversation...
            </p>
          </div>
        
          {/* Optional: Unread Badge */}
          <div className="flex flex-col items-end">
            <div className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              2
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChatList