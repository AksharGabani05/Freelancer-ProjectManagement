import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="bg-gradient-to-r from-stone-300 to-stone-300 shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-dark">Freelance Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-dark hover:text-dark-200 transition-colors duration-200">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="h-8 w-8 text-dark" />
              <span className="text-gray-700"> {user.username}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;