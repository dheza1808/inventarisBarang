import { useState, useEffect } from "react";

export default function SupplierModal({ onClose, onSubmit, initialData = null }) {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    alamat: "",
    telepon: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.nama || !formData.telepon) {
      alert("Semua field wajib diisi!");
      return;
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
        <h2 className="text-lg font-bold text-indigo-700 mb-4">
          {initialData ? "Edit Supplier" : "Tambah Supplier"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
            disabled={!!initialData}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama Supplier"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="Alamat"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            placeholder="Telepon"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
