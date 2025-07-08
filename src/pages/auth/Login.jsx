import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../services/user";
import bcrypt from 'bcryptjs'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await usersAPI.loginUser(email);

      const isPasswordValid = bcrypt.compareSync(password, response[0].password);
      if (!isPasswordValid) {
        return setError("Password salah.");
      }

      alert("Login berhasil! Selamat datang.");
      navigate("/staffgudang");
      localStorage.setItem("user", JSON.stringify(response[0]));
      setError(null);
    } catch (error) {
      console.error("Error saat login:", error);
      setError("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-800 bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Selamat Datang
        </h2>

        {/* Tampilkan error jika login gagal */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
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
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline cursor-pointer font-medium"
          >
            Daftar sekarang
          </span>
          <br />
          <span
            onClick={() => navigate("/forgot")}
            className="text-red-500 hover:underline cursor-pointer font-medium"
          >
            Lupa Password?
          </span>
        </div>
      </div>
    </div>
  );
}
