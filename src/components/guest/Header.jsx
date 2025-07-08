// src/components/guest/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        
        <Link to="/">
          <img
            src="/logo.png" 
            alt="AssetNest Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu di tengah */}
        <nav className="flex-1 flex justify-center space-x-10 text-lg font-semibold tracking-wide">
          <Link to="/" className="hover:underline !text-white">HOME</Link>
          <Link to="/about" className="hover:underline !text-white">ABOUT</Link>
          <Link to="/faq" className="hover:underline !text-white">FAQ</Link>
          <Link to="/contact" className="hover:underline !text-white">CONTACT</Link>
          <Link to="/articles" className="hover:underline !text-white">ARTICLE</Link>
        </nav>

        {/* Tombol Login di kanan */}
        <Link
          to="/login"
          className="px-5 py-2 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
