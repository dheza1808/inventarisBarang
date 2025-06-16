import { FaCog, FaMoon, FaSun, FaBell, FaBellSlash, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Settings({ onClose }) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white w-full max-w-xl mx-4 p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-500">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Judul */}
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
          <FaCog className="animate-spin-slow" />
          Pengaturan Sistem
        </h1>

        {/* Pengaturan Tema */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Mode Tampilan</h2>
            <p className="text-sm text-gray-500">Pilih tema terang atau gelap sesuai keinginan.</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ${
              darkMode
                ? "bg-indigo-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
            {darkMode ? "Gelap" : "Terang"}
          </button>
        </div>

        {/* Pengaturan Notifikasi */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Notifikasi</h2>
            <p className="text-sm text-gray-500">Aktifkan atau matikan notifikasi dari sistem.</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ${
              notifications
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {notifications ? <FaBell /> : <FaBellSlash />}
            {notifications ? "Aktif" : "Nonaktif"}
          </button>
        </div>

        {/* Placeholder Preferensi */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Preferensi Lainnya</h2>
          <p className="text-sm text-gray-500">
            Fitur seperti bahasa, keamanan, dan sinkronisasi akan segera hadir.
          </p>
        </div>
      </div>
    </div>
  );
}
