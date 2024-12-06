import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/projects', label: 'Projects', icon: '📁' },
    { path: '/payments', label: 'Payments', icon: '💰' },
    { path: '/calendar', label: 'Calendar', icon: '📅' },
  ];

  return (
    <header className="bg-teal-600 text-white">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        <div className="text-xl font-bold">
          <Link to="/">MyApp</Link>
        </div>

        
        <nav className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 text-lg font-medium transition-all ${
                location.pathname === item.path
                  ? 'text-teal-200 underline'
                  : 'hover:text-teal-300'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

       
        <div className="hidden lg:flex items-center space-x-4">
          <p className="text-teal-200 text-sm">Logged in as {user.username}</p>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      
      {isMenuOpen && (
        <nav className="lg:hidden bg-teal-500">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 text-lg font-medium ${
                    location.pathname === item.path
                      ? 'text-teal-200 underline'
                      : 'hover:text-teal-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)} 
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
