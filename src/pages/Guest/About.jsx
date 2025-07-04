import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-800">About Us</h1>
      <p className="text-lg text-gray-700 mb-10">
        Selamat datang di Sistem Inventaris Barang PT Maju Bersama! Kami bertujuan untuk mempermudah proses pencatatan, pelacakan, dan peminjaman barang inventaris di lingkungan kerja.
      </p>

      {/* Hero Section */}
      <div className="bg-indigo-50 rounded-3xl mx-6 md:mx-auto max-w-6xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-gray-800">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Tentang Perusahaan</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              PT Maju Bersama adalah perusahaan yang bergerak di bidang layanan teknologi dan pengelolaan aset...
            </p>
            <p className="text-gray-600">
              Sistem ini dikembangkan untuk memastikan setiap aset terdata...
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000"
              alt="Foto Perusahaan"
              className="w-full max-w-md rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">Our Vision</h2>
          <p className="text-gray-600">
            Menjadi platform inventarisasi barang yang efisien, transparan, dan dapat diakses oleh semua pihak...
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">Our Mission</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Menyediakan antarmuka pencarian dan pencatatan yang intuitif</li>
            <li>Mendukung pelaporan data barang dengan akurat</li>
            <li>Mengurangi kehilangan atau duplikasi aset kantor</li>
          </ul>
        </div>
      </div>

      {/* Info Pengembang */}
      <div className="mt-12 max-w-4xl mx-auto text-center text-gray-600">
        <h3 className="text-lg font-semibold mb-2 text-indigo-700">Tim Pengembang</h3>
        <p>Mahasiswa Sistem Informasi, Universitas XYZ</p>
        <p className="text-sm mt-2 italic">Versi 1.0 • 2025</p>
      </div>
    </div>
  );
}
