// src/layouts/StaffLayout.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function StaffLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar kiri */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Konten kanan */}
      <div className="flex-grow flex flex-col max-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <main className="flex-grow p-6 bg-gray-50 overflow-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
