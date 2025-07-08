import { useEffect, useState } from "react";
import EditAsetModal from "../../components/staff/EditAsetModal";
import { barangAPI } from "../../services/barang";

export default function Aset() {
  const [asetList, setAsetList] = useState([]);
  const [filterLokasi, setFilterLokasi] = useState("");
  const [filterKondisi, setFilterKondisi] = useState("");
  const [editingAset, setEditingAset] = useState(null);

  useEffect(() => {
    const fetchAsetData = async () => {
      try {
        const response = await barangAPI.getAllBarang();

        setAsetList(response);
      } catch (error) {
        console.error("Error fetching aset data:", error);
      }
    }
    fetchAsetData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus aset ini?");
    if (confirmDelete) {
      try {
        await barangAPI.deleteBarang(id);
        setAsetList(asetList.filter((item) => item.id !== id));
        alert("Aset berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting aset:", error);
      }
    }
  };

  const handleEdit = (item) => {
    setEditingAset(item);
  };

  const handleSaveEdit = async (updatedItem) => {
    try {
      await barangAPI.updateBarang(updatedItem.id, updatedItem);
      setAsetList(asetList.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      setEditingAset(null);
      alert("Aset berhasil diperbarui.");
    } catch (error) {
      console.error("Error updating aset:", error);
    }
  };

  const filteredAset = asetList.filter(
    (item) =>
      (filterLokasi === "" || item.lokasi === filterLokasi) &&
      (filterKondisi === "" || item.kondisi === filterKondisi)
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-indigo-800">
          Data Aset Perkantoran
        </h1>
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
            <option value="Ruang IT">Ruang IT</option>
            <option value="Kantor Utama">Kantor Utama</option>
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

      {/* Tabel */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="text-xs uppercase bg-indigo-100 text-indigo-700">
            <tr>
              <th className="px-4 py-2 border">Nama Barang</th>
              <th className="px-4 py-2 border">Kategori</th>
              <th className="px-4 py-2 border">Jumlah</th>
              <th className="px-4 py-2 border">Lokasi</th>
              <th className="px-4 py-2 border">Kondisi</th>
              <th className="px-4 py-2 border">Penanggung Jawab</th>
              <th className="px-4 py-2 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredAset.length > 0 ? (
              filteredAset.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-indigo-50">
                  <td className="px-4 py-2 border font-medium">{item.nama}</td>
                  <td className="px-4 py-2 border">{item.kategori}</td>
                  <td className="px-4 py-2 border">{item.jumlah}</td>
                  <td className="px-4 py-2 border">{item.lokasi}</td>
                  <td className="px-4 py-2 border">{item.kondisi}</td>
                  <td className="px-4 py-2 border">{item.penanggung_jawab}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:underline text-xs mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:underline text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
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
    </div>
  );
}
