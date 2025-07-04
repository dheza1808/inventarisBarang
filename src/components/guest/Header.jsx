import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo di kiri (pakai gambar) */}
        <a href="/">
          <img
            src="/public/logo.png" // Ganti dengan path gambar logomu
            alt="AssetNest Logo"
            className="h-10 w-auto" // Atur ukuran sesuai kebutuhan
          />
        </a>

        {/* Menu di tengah */}
        <nav className="flex-1 flex justify-center space-x-10 text-lg font-semibold tracking-wide">
          <a href="/guest" className="hover:underline text-white">HOME</a>
          <a href="/guest/about" className="hover:underline text-white font-bold">ABOUT</a>
          <a href="/guest/faq" className="hover:underline text-white">FAQ</a>
          <a href="/guest/contact" className="hover:underline text-white">CONTACT</a>
          <a href="/guest/articles" className="hover:underline text-white">ARTICLE</a>
        </nav>

        {/* Tombol Login di kanan */}
        <a
          href="/login"
          className="px-5 py-2 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition"
        >
          Login
        </a>
      </div>
    </header>
  );
}
