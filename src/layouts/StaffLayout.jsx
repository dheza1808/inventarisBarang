// src/layouts/StaffLayout.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function StaffLayout() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <div className="p-6 bg-gray-50 flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
