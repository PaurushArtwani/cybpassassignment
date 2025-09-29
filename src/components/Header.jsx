import React, { useState, useEffect } from 'react';
import '../App.css'; // Optional, for custom styling
import { FaRegCalendarAlt, FaBell, FaUserCircle } from 'react-icons/fa';


const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className=" custom-header app-header d-flex justify-content-between align-items-center px-4 py-3  text-white">
     
      <div className="d-flex align-items-center gap-3">
        <div className="logo d-flex align-items-center">
          <img
            src="../../public/vite.svg" // Replace with your actual logo path
            alt="Logo"
            className="logo-icon me-2"
            style={{ height: '30px' }}
          />
          <span className="logo-text">
            <span style={{ color: '#FFFFFF' }}>CYB</span>
            <span style={{ color: '#00AEEF' }}>PASS</span>
          </span>
        </div>
      </div>

      {/* RIGHT SIDE - TIME + ICONS */}
      <div className="d-flex align-items-center gap-4">
        {/* Time & Date */}
        <div className="text-end text-muted small">
          <div>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div>{now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
        </div>

        {/* Icons */}
        <FaRegCalendarAlt size={18} color="#ccc" />
        <FaBell size={18} color="#ccc" />
        <FaUserCircle size={22} color="#ccc" />
      </div>
    </header>
  );
};

export default Header;
