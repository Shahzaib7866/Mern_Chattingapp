import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import '../assets/sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import logochat from '../assets/logochat.png';

const SidebarIcon = ({ icon: Icon, to }) => (
  <Link to={to} className="icon-wrapper">
    <Icon className="sidebar-svg" />
  </Link>
);

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top-icons'>
        <img src={logochat} alt="Logo" className="logo" />
        <SidebarIcon icon={ChatIcon} to="/chats" />
        <SidebarIcon icon={LocalPhoneIcon} to="/calls" />
        <SidebarIcon icon={GroupIcon} to="/groups" />
      </div>
      <div className='bottom-icons'>
        <SidebarIcon icon={SettingsIcon} to="/settings" />
        <SidebarIcon icon={PersonIcon} to="/profile" />
      </div>
    </div>
  );
};

export default Sidebar;