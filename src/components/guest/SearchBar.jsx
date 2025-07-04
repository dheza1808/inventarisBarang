import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value); // langsung kirim ke Front
  };

  return (
    <div className="flex flex-col items-center text-center px-4 mt-16">
      <h1 className="text-4xl font-semibold text-indigo-800  mb-2">Our Inventory</h1>
      <p className="text-lg text-indigo-800  font-medium mb-1">Online Public Access Catalog</p>
      <p className="italic text-indigo-800  mb-6">What do you need?</p>

      <div className="flex w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          onChange={handleChange}
          placeholder="e.g. Laptop Dell"
          className="flex-grow px-5 py-3 text-gray-900 bg-transparent placeholder-gray-800 focus:outline-none"
        />
        {/* Tombol Search bisa dihapus atau dibiarkan, tidak wajib dipakai */}
      </div>

      <div className="mt-4">
        <NavLink
          to="/advanced"
          className={({ isActive }) =>
            `flex items-center gap-2 justify-center px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-purple-600 text-white font-semibold' : 'text-purple-300 hover:bg-purple-600 hover:text-white'
            }`
          }
        >
          <span className="material-icons">search</span>
          <span>Advanced Search</span>
        </NavLink>
      </div>
    </div>
  );
}
