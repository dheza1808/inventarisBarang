import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaBoxes,
  FaArrowCircleDown,
  FaClipboardCheck,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const [openLaporan, setOpenLaporan] = useState(false);

  const linkClass =
    "flex items-center gap-3 text-sm p-2 rounded-md hover:bg-indigo-200 hover:text-indigo-800 transition";

  return (
    <aside className="w-64 h-screen overflow-y-auto bg-gradient-to-b from-purple-800 to-indigo-700 text-white shadow-md">
      {/* Header Logo */}
      <div className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-wide px-4 pt-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="AssetNest Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-4 pb-6 gap-3 text-white">
        <NavLink
          to="/staffgudang"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "text-white"
            }`
          }
        >
          <FaHome /> Dashboard
        </NavLink>

        <p className="text-xs text-indigo-300 uppercase font-semibold mt-2">
          Master
        </p>
        <NavLink
          to="/staffgudang/aset"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "text-white"
            }`
          }
        >
          <FaBoxes /> Data Aset
        </NavLink>

        <p className="text-xs text-indigo-300 uppercase font-semibold mt-2">
          Transaksi
        </p>
        <NavLink
          to="/staffgudang/masuk"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "text-white"
            }`
          }
        >
          <FaArrowCircleDown /> Barang Masuk
        </NavLink>
        <NavLink
          to="/staffgudang/peminjaman"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "text-white"
            }`
          }
        >
          <FaClipboardCheck /> Persetujuan Peminjaman
        </NavLink>

        <p className="text-xs text-indigo-300 uppercase font-semibold mt-2">
          Riwayat
        </p>
        <NavLink
          to="/staffgudang/riwayat"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "text-white"
            }`
          }
        >
          <FaClipboardList /> Riwayat Transaksi
        </NavLink>

        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md text-sm mt-4 hover:bg-red-500 hover:text-white transition ${
              isActive ? "bg-red-600 text-white font-semibold" : "text-red-300"
            }`
          }
        >
          <FaSignOutAlt /> Keluar
        </NavLink>
      </nav>
    </aside>
  );
}
