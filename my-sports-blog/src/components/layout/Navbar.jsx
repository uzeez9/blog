import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../shared/SearchBar';

function Navbar() {
  // Create a simple NavLink component
  const NavLink = ({ children }) => (
    <Link to="/" className="text-gray-600 hover:text-gray-900">
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Football Blog</span>
            <div className="hidden md:flex ml-10 space-x-8">
              <NavLink>Barcelona</NavLink>
              <NavLink>Real Madrid</NavLink>
              <NavLink>Arsenal</NavLink>
              <NavLink>Liverpool</NavLink>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;