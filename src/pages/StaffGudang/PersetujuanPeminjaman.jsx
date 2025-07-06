import { useEffect, useState } from "react";

export default function PersetujuanPeminjaman() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("barang_keluar")) || [];
    setData(existing);
  }, []);

  const handleApproval = (id, status) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    setData(updated);
    localStorage.setItem("barang_keluar", JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow rounded-xl p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Persetujuan Peminjaman Barang</h1>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center">Tidak ada permintaan barang keluar.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border text-sm">
            <thead className="bg-red-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">Jumlah</th>
                <th className="px-4 py-2 border">Tujuan</th>
                <th className="px-4 py-2 border">Tanggal</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.nama}</td>
                  <td className="border px-4 py-2">{item.jumlah}</td>
                  <td className="border px-4 py-2">{item.tujuan}</td>
                  <td className="border px-4 py-2">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td className="border px-4 py-2">
                    {item.status ? (
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          item.status === "disetujui"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    ) : (
                      <span className="text-gray-500 italic">Menunggu</span>
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleApproval(item.id, "disetujui")}
                      className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Setujui
                    </button>
                    <button
                      onClick={() => handleApproval(item.id, "ditolak")}
                      className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Tolak
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
