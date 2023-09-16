import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <Link to="/">
            <span className="text-xl font-semibold">Basic Academy</span>
          </Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/courses" className="hover:text-blue-500">Courses</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
