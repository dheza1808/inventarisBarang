import {
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const settingsRef = useRef();
  const accountRef = useRef();
  const loginRef = useRef();

  // Klik luar untuk menutup semua dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target) &&
        loginRef.current &&
        !loginRef.current.contains(event.target)
      ) {
        setShowSettingsMenu(false);
        setShowAccountMenu(false);
        setShowLoginMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-blue-800 text-white px-6 py-3 shadow-md flex items-center justify-between w-full z-50">
      <h1 className="text-lg font-black tracking-wide">Sistem Inventaris</h1>
      <nav className="flex items-center gap-6 relative">
        <Link
          to="/staffgudang/faq"
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <FaQuestionCircle /> <span>FAQ</span>
        </Link>

        {/* Settings Dropdown */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => {
              setShowSettingsMenu(!showSettingsMenu);
              setShowAccountMenu(false);
              setShowLoginMenu(false);
            }}
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <FaCog /> <span>Pengaturan</span>
          </button>
          {showSettingsMenu && (
            <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50">
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <FaCog className="inline mr-2" /> Pengaturan Umum
              </Link>
              <Link
                to="/editprofile"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <FaUserCircle className="inline mr-2" /> Edit Profil
              </Link>
            </div>
          )}
        </div>

        {/* Account Dropdown */}
        <div className="relative" ref={accountRef}>
          <button
            onClick={() => {
              setShowAccountMenu(!showAccountMenu);
              setShowSettingsMenu(false);
              setShowLoginMenu(false);
            }}
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <FaUserCircle /> <span>Akun</span>
          </button>
          {showAccountMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <FaUserCircle className="inline mr-2" /> Profil Saya
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <FaSignOutAlt className="inline mr-2" /> Keluar
              </Link>
            </div>
          )}
        </div>

        {/* Login Dropdown (Opsional - jika ingin diaktifkan) */}
        {/* <div className="relative" ref={loginRef}>
          <button
            onClick={() => {
              setShowLoginMenu(!showLoginMenu);
              setShowAccountMenu(false);
              setShowSettingsMenu(false);
            }}
            className="flex items-center gap-2 px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
          >
            <FaSignInAlt /> <span>Login</span>
          </button>
          {showLoginMenu && (
            <div className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                <FaSignInAlt className="inline mr-2" /> Login Modal
              </Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                <FaUserPlus className="inline mr-2" /> Daftar Akun
              </Link>
              <Link to="/forgot" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                <FaQuestionCircle className="inline mr-2" /> Lupa Password
              </Link>
            </div>
          )}
        </div> */}
      </nav>
    </header>
  );
}
