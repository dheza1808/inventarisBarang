import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 w-full max-w-screen-xl mx-auto rounded-[80px]">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-12">

        {/* KIRI - TEKS */}
        <div className="w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Solusi Inventaris Cerdas & Terintegrasi
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Kelola aset kantor Anda dengan efisien, cepat, dan akurat menggunakan sistem inventaris kami.
          </p>
          <a
            href="/advanced"
            className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Jelajahi Sekarang
          </a>
        </div>

        {/* KANAN - GAMBAR */}
        <div className="w-1/2 flex justify-end">
          <img
            src="/public/HeroImg.png" // ← ganti dengan path gambar kamu
            alt="Ilustrasi Inventaris"
            className="w-[420px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
