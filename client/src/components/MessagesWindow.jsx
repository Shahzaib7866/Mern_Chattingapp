import React from 'react'
import '../assets/style.css';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useState, useEffect, useRef } from 'react';

const MessagesWindow = () => {

      const [isAttach, setIsAttach] = useState(false);
  
      const attachRef = useRef(null);
  
      useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click was outside the Attach menu and the Attach button
      if (attachRef.current && !attachRef.current.contains(event.target)) {
        setIsAttach(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='chat-window flex flex-col h-full p-4'>
  {/* Messages section */}
  <div className='messages flex-1 overflow-y-auto mb-4'>
    {/* ... messages */}
  </div>

  {/* Input Area */}
<div className="relative flex items-center bg-white w-full border border-gray-300 rounded-full shadow-sm py-2 px-4 focus-within:ring-2 focus-within:ring-sky-500/30">
  
  {/* LEFT SIDE: Emoji Icon */}
  <div className="cursor-pointer text-gray-500 hover:text-gray-700 mr-3">
    <EmojiEmotionsOutlinedIcon />
  </div>

  {/* INPUT FIELD */}
  <input 
    type="text" 
    placeholder="Type a message..." 
    className="w-full py-2 outline-none bg-transparent"
  />

  {/* RIGHT SIDE: Attachment + Voice Icons */}
  <div className="flex items-center gap-3">
    
    {/* Attachment Dropdown Wrapper */}
    <div className="relative" ref={attachRef}>
      <div 
        className="cursor-pointer text-gray-500 hover:text-blue-600 transition-colors"
        onClick={() => setIsAttach(!isAttach)}
      >
        <AddIcon />
      </div>

      {isAttach && (
        <div className="absolute bottom-full right-0 mb-3 w-44 bg-white border border-gray-100 rounded-xl shadow-xl z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3"><DescriptionIcon fontSize="small"/> Document</li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3"><AddToPhotosIcon fontSize="small"/> Camera</li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3"><PhotoLibraryIcon fontSize="small"/> Gallery</li>
          </ul>
        </div>
      )}
    </div>

    {/* Voice Icon */}
    <div className="cursor-pointer text-gray-500 hover:text-gray-700">
      <KeyboardVoiceOutlinedIcon />
    </div>
  </div>
</div>
</div>
  )
}

export default MessagesWindow