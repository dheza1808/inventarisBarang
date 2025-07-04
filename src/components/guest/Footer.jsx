import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-sm">

        {/* Kiri - Deskripsi */}
        <div>
          <h2 className="text-xl font-semibold mb-2">AssetNest</h2>
          <p className="text-gray-300">
            Platform inventaris barang untuk kebutuhan kantor, mendukung pelacakan, peminjaman, dan pengelolaan aset secara efisien.
          </p>
        </div>

        {/* Tengah - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">admin@majubersama.com</p>
          <p className="text-gray-300">Jl. Raya Example No.123, Pekanbaru</p>
          <p className="text-gray-300">(021) 123-4567</p>
        </div>

        {/* Kanan - Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p className="text-gray-300 mb-2">Yes, we are social</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} PT Maju Bersama. All rights reserved.
      </div>
    </footer>
  );
}
