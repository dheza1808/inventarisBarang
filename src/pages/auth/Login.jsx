import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { supabase } from "@/services/inventarisAPI"; // Aktifkan jika sudah pakai backend

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulasi login
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/staffgudang"); // Ganti rute sesuai role
    } else {
      setError("Email atau password salah.");
    }

    // Jika pakai Supabase:
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    // if (error) setError(error.message);
    // else {
    //   const role = data.user.user_metadata.role;
    //   navigate(role === "admin" ? "/dashboard" : "/staffgudang");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-700 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login ke Sistem</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

        <p className="text-sm text-gray-500 mt-4 text-center">
          Belum punya akun? <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Hubungi admin</span>
        </p>
      </div>
    </div>
  );
}
