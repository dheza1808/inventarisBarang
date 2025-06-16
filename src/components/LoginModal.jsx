import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5"; // Pastikan react-icons terinstal

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      setError(null);
      onClose();
      navigate("/staffgudang");
    } else {
      setError("Email atau password salah.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 backdrop-blur-[6px] bg-opacity-80 flex items-center justify-center">
      <div className="bg-white/90 w-full max-w-md p-8 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.2)] relative animate-in fade-in zoom-in duration-500">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
          Selamat Datang 👋
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center text-gray-600 mt-4 space-y-1">
          <p>
            Belum punya akun?{" "}
            <span
              className="text-indigo-600 hover:underline cursor-pointer font-medium"
              onClick={() => navigate("/register")}
            >
              Daftar sekarang
            </span>
          </p>
          <p>
            <span
              className="text-red-500 hover:underline cursor-pointer font-medium"
              onClick={() => navigate("/forgot")}
            >
              Lupa Password?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
