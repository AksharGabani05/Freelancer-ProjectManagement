import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/projects', label: 'Projects', icon: '📁' },
    { path: '/payments', label: 'Payments', icon: '💰' },
    { path: '/calendar', label: 'Calendar', icon: '📅' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile Navbar */}
      <div className="bg-gray-900 text-gray-200 flex justify-between items-center px-6 py-4 lg:hidden">
        <h1 className="text-2xl font-bold text-teal-400"></h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 focus:outline-none text-2xl"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-gray-200 w-64 h-full p-6 shadow-lg fixed lg:static transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 lg:flex lg:flex-col`}
      >
        {/* Logo Section */}
        <div className="mb-10 hidden lg:block">
          <h1 className="text-3xl font-bold text-center text-teal-400 tracking-wide">
            Freelance Hub
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-grow space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                location.pathname === item.path
                  ? 'bg-teal-700 text-white shadow-lg'
                  : 'hover:bg-gray-800 hover:text-teal-300'
              }`}
              onClick={() => setIsOpen(false)} // Close sidebar on click (mobile)
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="mt-auto">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-400">Logged in as</p>
            <p className="text-lg font-semibold text-gray-200 mt-1">{user.username}</p>
            <button
              onClick={logout}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
