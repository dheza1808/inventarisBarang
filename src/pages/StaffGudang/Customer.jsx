import { useState } from "react";
import dataCustomer from "../../data/customer.json";

export default function Customer() {
  const [customerList, setCustomerList] = useState(dataCustomer);

  const handleDelete = (id) => {
    const confirmed = confirm("Yakin ingin menghapus customer ini?");
    if (confirmed) {
      setCustomerList((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-800">Data Customer</h1>
        <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-700">
          + Tambah Customer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-indigo-100 text-indigo-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nama Customer</th>
              <th className="px-4 py-2 border">Alamat</th>
              <th className="px-4 py-2 border">Telepon</th>
              <th className="px-4 py-2 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((c) => (
              <tr key={c.id} className="bg-white hover:bg-indigo-50">
                <td className="px-4 py-2 border">{c.id}</td>
                <td className="px-4 py-2 border">{c.nama}</td>
                <td className="px-4 py-2 border">{c.alamat}</td>
                <td className="px-4 py-2 border">{c.telepon}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="text-blue-600 hover:underline text-xs mr-2">Edit</button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-red-600 hover:underline text-xs"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {customerList.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 py-4">
                  Tidak ada data customer.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
