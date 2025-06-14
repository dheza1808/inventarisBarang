import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaBoxes, FaExchangeAlt, FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [openTransaksi, setOpenTransaksi] = useState(false);

  return (
    <div className="w-50 min-h-screen bg-gradient-to-b from-purple-700 to-indigo-800 text-white px-4 py-6">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-wide">
        <img src="/inventory.png" alt="Logo" className="w-10 h-10" />
        <span className="leading-tight">PT Maju Bersama</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 text-sm">
        <NavLink
          to="/staffgudang"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition ${
              isActive ? "bg-purple-600 font-semibold" : "text-purple-300"
            }`
          }
        >
          <FaHome className="text-sm" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/staffgudang/riwayat"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition ${
              isActive ? "bg-purple-600 font-semibold" : "text-purple-300"
            }`
          }
        >
          <FaBoxes className="text-sm" />
          <span>Riwayat Transaksi</span>
        </NavLink>

        {/* Dropdown Input Transaksi */}
        <button
          onClick={() => setOpenTransaksi(!openTransaksi)}
          className="flex items-center justify-between p-2 rounded-md hover:bg-purple-600 transition text-purple-300 w-full"
        >
          <div className="flex items-center gap-2">
            <FaExchangeAlt className="text-sm" />
            <span>Input Transaksi</span>
          </div>
          <FaChevronDown
            className={`transition-transform text-xs ${
              openTransaksi ? "rotate-180" : ""
            }`}
          />
        </button>

        {openTransaksi && (
          <div className="ml-6 flex flex-col gap-1 text-xs text-purple-300 mt-1">
            <NavLink
              to="/staffgudang/masuk"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-purple-600 ${
                  isActive ? "bg-purple-600 text-white font-semibold" : ""
                }`
              }
            >
              Barang Masuk
            </NavLink>
            <NavLink
              to="/staffgudang/keluar"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-purple-600 ${
                  isActive ? "bg-purple-600 text-white font-semibold" : ""
                }`
              }
            >
              Barang Keluar
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
