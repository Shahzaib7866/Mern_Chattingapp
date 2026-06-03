

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Login from './components/auth/Login';
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import '../src/assets/style.css'
import Chats from './pages/Chats';
import Groups from './pages/Groups';
import Calls from './pages/Calls';


// 1. Create a Layout component
const MainLayout = () => (
  <>
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Outlet /> 
    </div>
  </div> {/* This is where the Home/other components will render */}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />

        {/* Routes WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Chats />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/calls" element={<Calls />} />
          {/* Add more routes here that need the Navbar */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App







