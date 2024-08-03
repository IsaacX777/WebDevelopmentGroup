'use client';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/" className="hover:text-gray-400">WebDev Group</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
