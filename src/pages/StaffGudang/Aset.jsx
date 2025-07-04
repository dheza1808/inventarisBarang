import { useState, useEffect } from "react";
import EditAsetModal from "../../components/staff/EditAsetModal";
import dataAset from "../../data/aset.json";
import TambahAsetModal from "../../components/staff/TambahAsetModal";

export default function Aset() {
  const [asetList, setAsetList] = useState(dataAset);
  const [filterLokasi, setFilterLokasi] = useState("");
  const [filterKondisi, setFilterKondisi] = useState("");
  const [editingAset, setEditingAset] = useState(null);
  const [showTambahModal, setShowTambahModal] = useState(false);

  // Simpan perubahan ke localStorage (opsional)
  useEffect(() => {
    localStorage.setItem("data_aset", JSON.stringify(asetList));
  }, [asetList]);

  const handleDelete = (id) => {
    const confirmed = confirm("Yakin ingin menghapus aset ini?");
    if (confirmed) {
      setAsetList((prev) => prev.filter((aset) => aset.id !== id));
    }
  };

  const handleEdit = (aset) => {
    setEditingAset(aset);
  };

  const handleTambahAset = (newAset) => {
    setAsetList((prev) => [...prev, newAset]);
  };

  const handleSaveEdit = (updatedAset) => {
    setAsetList((prev) =>
      prev.map((item) => (item.id === updatedAset.id ? updatedAset : item))
    );
    setEditingAset(null);
  };

  const filteredAset = asetList.filter((aset) => {
    return (
      (filterLokasi === "" || aset.lokasi === filterLokasi) &&
      (filterKondisi === "" || aset.kondisi === filterKondisi)
    );
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-indigo-800">Manajemen Aset</h1>
        <button
          onClick={() => setShowTambahModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
        >
          + Tambah Aset
        </button>
      </div>

      {/* Filter */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <label className="text-sm text-gray-600">Filter Lokasi:</label>
          <select
            value={filterLokasi}
            onChange={(e) => setFilterLokasi(e.target.value)}
            className="block border rounded px-3 py-1 text-sm mt-1"
          >
            <option value="">Semua</option>
            <option value="Gudang A">Gudang A</option>
            <option value="Gudang B">Gudang B</option>
            <option value="Gudang C">Gudang C</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600">Filter Kondisi:</label>
          <select
            value={filterKondisi}
            onChange={(e) => setFilterKondisi(e.target.value)}
            className="block border rounded px-3 py-1 text-sm mt-1"
          >
            <option value="">Semua</option>
            <option value="Baik">Baik</option>
            <option value="Rusak">Rusak</option>
            <option value="Perlu Perawatan">Perlu Perawatan</option>
          </select>
        </div>
      </div>

      {/* Tabel Aset */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="text-xs uppercase bg-indigo-100 text-indigo-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nama Aset</th>
              <th className="px-4 py-2 border">Lokasi</th>
              <th className="px-4 py-2 border">Kondisi</th>
              <th className="px-4 py-2 border">Penanggung Jawab</th>
              <th className="px-4 py-2 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredAset.map((aset) => (
              <tr key={aset.id} className="bg-white hover:bg-indigo-50">
                <td className="px-4 py-2 border">{aset.id}</td>
                <td className="px-4 py-2 border font-medium">{aset.nama}</td>
                <td className="px-4 py-2 border">{aset.lokasi}</td>
                <td className="px-4 py-2 border">{aset.kondisi}</td>
                <td className="px-4 py-2 border">{aset.penanggungJawab}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEdit(aset)}
                    className="text-blue-600 hover:underline text-xs mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(aset.id)}
                    className="text-red-600 hover:underline text-xs"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {filteredAset.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-4">
                  Tidak ada data aset ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Edit */}
      {editingAset && (
        <EditAsetModal
          aset={editingAset}
          onClose={() => setEditingAset(null)}
          onSave={handleSaveEdit}
        />
      )}

      {showTambahModal && (
        <TambahAsetModal
          onClose={() => setShowTambahModal(false)}
          onTambah={handleTambahAset}
        />
      )}
    </div>
  );
}
