import { useState } from "react";

export default function TambahAsetModal({ onClose, onTambah }) {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    lokasi: "Gudang A",
    kondisi: "Baik",
    penanggungJawab: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.nama || !formData.penanggungJawab) {
      alert("Semua data wajib diisi!");
      return;
    }

    onTambah(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px]">
        <h2 className="text-lg font-bold text-indigo-700 mb-4">Tambah Aset Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">ID Aset</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Nama Aset</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Lokasi</label>
            <select
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="Gudang A">Gudang A</option>
              <option value="Gudang B">Gudang B</option>
              <option value="Gudang C">Gudang C</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Kondisi</label>
            <select
              name="kondisi"
              value={formData.kondisi}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="Baik">Baik</option>
              <option value="Rusak">Rusak</option>
              <option value="Perlu Perawatan">Perlu Perawatan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Penanggung Jawab</label>
            <input
              type="text"
              name="penanggungJawab"
              value={formData.penanggungJawab}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
