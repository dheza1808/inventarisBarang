import { useState } from "react";
import dataSupplier from "../../data/supplier.json";
import SupplierModal from "../../components/SupplierModal";

export default function Supplier() {
  const [supplierList, setSupplierList] = useState(dataSupplier);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    const confirmed = confirm("Yakin ingin menghapus supplier ini?");
    if (confirmed) {
      setSupplierList((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleTambah = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setShowModal(true);
  };

  const handleSimpan = (data) => {
    if (editData) {
      setSupplierList((prev) => prev.map((s) => (s.id === data.id ? data : s)));
    } else {
      setSupplierList((prev) => [...prev, data]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-800">Data Supplier</h1>
        <button
          onClick={handleTambah}
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-700"
        >
          + Tambah Supplier
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-indigo-100 text-indigo-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nama Supplier</th>
              <th className="px-4 py-2 border">Alamat</th>
              <th className="px-4 py-2 border">Telepon</th>
              <th className="px-4 py-2 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {supplierList.map((s) => (
              <tr key={s.id} className="bg-white hover:bg-indigo-50">
                <td className="px-4 py-2 border">{s.id}</td>
                <td className="px-4 py-2 border">{s.nama}</td>
                <td className="px-4 py-2 border">{s.alamat}</td>
                <td className="px-4 py-2 border">{s.telepon}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEdit(s)}
                    className="text-blue-600 hover:underline text-xs mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(s.id)}
                    className="text-red-600 hover:underline text-xs"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {supplierList.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 py-4">
                  Tidak ada data supplier.
                </td>
              </tr>
            )}

            {showModal && (
              <SupplierModal
                onClose={() => setShowModal(false)}
                onSubmit={handleSimpan}
                initialData={editData}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
