import React from 'react'
// import avatar from '../assets/avatar.png'
import logochat from '../assets/logochat.png'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// components/ChatHeader.jsx
const ChatHeader = () => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
    <div className="flex items-center gap-3">
      <img src={logochat} className="w-10 h-10 rounded-full" alt="User" />
      <div>
        <h3 className="font-bold text-gray-800">John Doe</h3>
        <span className="text-xs text-green-500">Online</span>
      </div>
    </div>
    <div className="flex gap-4 text-gray-500">
      <SearchIcon />
      <MoreVertIcon />
    </div>
  </div>
);

export default ChatHeader;
