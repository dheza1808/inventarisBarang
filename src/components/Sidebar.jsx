import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaBoxes, FaExchangeAlt, FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [openTransaksi, setOpenTransaksi] = useState(false);

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-purple-700 to-indigo-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">PT Maju Bersama</h1>
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/staffgudang"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded hover:bg-purple-600 transition ${
              isActive ? "bg-purple-600 font-semibold" : "text-purple-300"
            }`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/staffgudang/riwayat"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded hover:bg-purple-600 transition ${
              isActive ? "bg-purple-600 font-semibold" : "text-purple-300"
            }`
          }
        >
          <FaBoxes />
          <span>Riwayat Transaksi</span>
        </NavLink>

        {/* Dropdown menu */}
        <button
          onClick={() => setOpenTransaksi(!openTransaksi)}
          className="flex items-center justify-between p-2 rounded hover:bg-purple-600 transition text-purple-300 w-full"
        >
          <div className="flex items-center gap-3">
            <FaExchangeAlt />
            <span>Input Transaksi</span>
          </div>
          <FaChevronDown className={`transition-transform ${openTransaksi ? "rotate-180" : ""}`} />
        </button>

        {openTransaksi && (
          <div className="ml-6 flex flex-col gap-1 text-sm">
            <NavLink
              to="/staffgudang/masuk"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-purple-600 ${
                  isActive ? "bg-purple-600 text-white font-semibold" : "text-purple-300"
                }`
              }
            >
              Barang Masuk
            </NavLink>
            <NavLink
              to="/staffgudang/keluar"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-purple-600 ${
                  isActive ? "bg-purple-600 text-white font-semibold" : "text-purple-300"
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
