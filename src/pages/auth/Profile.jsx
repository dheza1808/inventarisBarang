import { FaUserCircle, FaEnvelope, FaUserEdit, FaUserTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 bg-opacity-80 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl text-gray-800 animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <FaUserCircle size={80} className="text-indigo-600 mb-2" />
          <h1 className="text-2xl font-bold">Profil Pengguna</h1>
          <p className="text-sm text-gray-500">Informasi akun Anda</p>
        </div>

        {/* Info Pengguna */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaUserEdit className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Nama Lengkap</p>
              <p className="font-medium">{user.nama}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/editprofile")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Edit Profil
          </button>
        </div>
      </div>
    </div>
  );
}
