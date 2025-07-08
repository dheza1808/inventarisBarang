import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../services/user";
import bcrypt from 'bcryptjs';

export default function Register() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Untuk navigasi ke halaman login

  const handleRegister = async (e) => {
    e.preventDefault();
    try {

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

      const data = {
        nama,
        email,
        password: hashedPassword,
      };

      await usersAPI.registerUser(data);

      alert("Pendaftaran berhasil! Silakan masuk.");
      navigate("/login");
    } catch (error) {
      console.error("Error saat mendaftar:", error);
      alert("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-800 bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <FaUserPlus /> Daftar Akun
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Nama Lengkap</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
