// src/pages/auth/Settings.jsx
import { FaCog, FaMoon, FaSun, FaBell, FaBellSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 bg-opacity-80 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl text-gray-800 animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <FaCog size={80} className="text-indigo-600 mb-2" />
          <h1 className="text-2xl font-bold">Pengaturan</h1>
          <p className="text-sm text-gray-500">Sesuaikan preferensi akun Anda</p>
        </div>

        {/* Mode Tampilan */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-base font-semibold text-gray-700">Mode Tampilan</h2>
            <p className="text-sm text-gray-500">Pilih tema terang atau gelap.</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              darkMode
                ? "bg-indigo-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
            {darkMode ? "Gelap" : "Terang"}
          </button>
        </div>

        {/* Notifikasi */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-base font-semibold text-gray-700">Notifikasi</h2>
            <p className="text-sm text-gray-500">Aktifkan atau nonaktifkan notifikasi sistem.</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
              notifications
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {notifications ? <FaBell /> : <FaBellSlash />}
            {notifications ? "Aktif" : "Nonaktif"}
          </button>
        </div>

        {/* Preferensi lainnya */}
        <div>
          <h2 className="text-base font-semibold text-gray-700">Preferensi Lainnya</h2>
          <p className="text-sm text-gray-500">Bahasa, keamanan, dan lainnya akan hadir.</p>
        </div>

        {/* Tombol kembali */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/staffgudang")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
