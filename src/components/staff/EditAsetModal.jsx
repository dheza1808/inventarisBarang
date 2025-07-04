// components/EditAsetModal.jsx
import { useState, useEffect } from "react";

export default function EditAsetModal({ aset, onClose, onSave }) {
  const [formData, setFormData] = useState(aset);

  useEffect(() => {
    setFormData(aset);
  }, [aset]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-xl w-[400px]">
        <h2 className="text-lg font-bold mb-4 text-indigo-700">Edit Aset</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nama Aset</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Lokasi</label>
            <select
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
            >
              <option value="Gudang A">Gudang A</option>
              <option value="Gudang B">Gudang B</option>
              <option value="Gudang C">Gudang C</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Kondisi</label>
            <select
              name="kondisi"
              value={formData.kondisi}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
            >
              <option value="Baik">Baik</option>
              <option value="Rusak">Rusak</option>
              <option value="Perlu Perawatan">Perlu Perawatan</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Penanggung Jawab</label>
            <input
              type="text"
              name="penanggungJawab"
              value={formData.penanggungJawab}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-sm px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Batal
            </button>
            <button type="submit" className="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
