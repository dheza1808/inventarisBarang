import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/services/inventarisAPI";
import AuthLayout from "@/layouts/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        const role = data.session.user.user_metadata.role;
        navigate(role === "admin" ? "/dashboard" : "/staff-gudang");
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else {
      const role = data.user.user_metadata.role;
      navigate(role === "admin" ? "/dashboard" : "/staff-gudang");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login ke Sistem</h2>

      {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
