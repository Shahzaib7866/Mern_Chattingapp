import React from 'react'
import '../assets/sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import logochat from '../assets/logochat.png'


const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
    <div className='top-icons'>
        <img src={logochat} alt="Logo" />
      <ChatIcon />
        <LocalPhoneIcon />
        <GroupIcon />

        </div>
        <div className='bottom-icons'>
        <SettingsIcon />
        <PersonIcon />
</div>

        </div>
    </>
  )
}


export default Sidebar



