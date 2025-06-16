import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Hapus data session lokal
    localStorage.clear();
    setTimeout(() => {
      navigate("/auth/login");
    }, 1000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow">
        <FaSignOutAlt className="text-red-600 text-4xl mb-4 mx-auto" />
        <h2 className="text-xl font-semibold text-gray-800">Sedang Logout...</h2>
        <p className="text-gray-600 mt-2">Anda akan dialihkan ke halaman login.</p>
      </div>
    </div>
  );
}
