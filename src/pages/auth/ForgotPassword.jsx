import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulasi delay (misalnya pengiriman email reset password)
    setTimeout(() => {
      setSubmitted(false);
      navigate("/"); // Arahkan ke halaman login setelah sukses
    }, 2000); // 2 detik tampil notifikasi
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-800 bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white/90 w-full max-w-md p-8 rounded-2xl shadow-xl animate-in fade-in zoom-in duration-500">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-800">
          🔐 Lupa Password
        </h2>

        {submitted && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-center mb-4">
            Link reset password telah dikirim!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Masukkan email anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            disabled={submitted}
          >
            {submitted ? "Mengirim..." : "Kirim Link Reset"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          <span
            onClick={() => navigate("/")}
            className="text-indigo-600 hover:underline cursor-pointer font-medium"
          >
            ← Kembali ke Login
          </span>
        </p>
      </div>
    </div>
  );
}
