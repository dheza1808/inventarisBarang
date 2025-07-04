import React from 'react';

export default function Contact() {
  return (
      <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-10 text-indigo-800 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kartu Info Kontak */}
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <p className="mb-4 text-gray-700">
              Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan, silakan hubungi kami melalui informasi berikut:
            </p>
            <div className="space-y-3 text-sm">
              <p><span className="font-semibold text-indigo-700">Alamat:</span> Jl. Raya Example No.123, Pekanbaru</p>
              <p><span className="font-semibold text-indigo-700">Email:</span> admin@majubersama.com</p>
              <p><span className="font-semibold text-indigo-700">Telepon:</span> (021) 123-4567</p>
            </div>
          </div>

          {/* Kartu Form Feedback */}
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Give Us Your Feedback</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Pesan Anda"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-semibold transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
