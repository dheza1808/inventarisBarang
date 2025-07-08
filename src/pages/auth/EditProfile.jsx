import { useState } from "react";
import { FaSave, FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../services/user";

export default function EditProfile() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState(userData);

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setAvatar(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await usersAPI.editUser(user.id, {
        id: user.id,
        nama: user.nama,
        email: user.email
      });

      localStorage.setItem("user", JSON.stringify( user ));

    } catch (error) {
      console.error("Error saat memperbarui profil:", error);
      return alert("❌ Gagal memperbarui profil. Silakan coba lagi.");
    }

    alert("Profil berhasil diperbarui!");
    navigate("/profile");
  };

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 bg-opacity-80 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl text-gray-800 animate-in fade-in zoom-in duration-500">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
            <FaUserCircle /> Edit Profil
          </h1>
          <button
            onClick={() => navigate("/profile")}
            className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1"
          >
            <FaArrowLeft /> Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-center gap-2">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
            ) : (
              <FaUserCircle size={80} className="text-gray-400" />
            )}
            <label className="text-sm font-medium text-indigo-600 cursor-pointer">
              Ubah Foto
              <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={user.nama}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <FaSave /> Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}
