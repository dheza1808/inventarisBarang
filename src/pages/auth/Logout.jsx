import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 1200);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-800 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeInUp">
        <FaSignOutAlt className="text-red-600 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Sedang Logout...</h2>
        <p className="text-gray-600 mt-2">Anda akan dialihkan ke halaman login.</p>
        <p className="text-sm text-gray-500 mt-1 italic">
          Menghapus sesi dan mengalihkan ke login...
        </p>
      </div>
    </div>
  );
}
