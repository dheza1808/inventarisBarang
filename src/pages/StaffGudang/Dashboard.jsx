import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaHistory } from "react-icons/fa";

export default function Dashboard() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const masuk = JSON.parse(localStorage.getItem("barang_masuk")) || [];
    const keluar = JSON.parse(localStorage.getItem("barang_keluar")) || [];

    setBarangMasuk(masuk);
    setBarangKeluar(keluar);

    const combined = [
      ...masuk.map((item) => ({ ...item, tipe: "Masuk" })),
      ...keluar.map((item) => ({ ...item, tipe: "Keluar" })),
    ];

    combined.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setRiwayat(combined);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Dashboard Gudang</h1>

      {/* Ringkasan Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaArrowDown className="text-green-600 text-3xl" />
          <div>
            <h2 className="text-sm font-medium text-green-700">Total Barang Masuk</h2>
            <p className="text-3xl font-bold text-green-800">{barangMasuk.length}</p>
          </div>
        </div>
        <div className="bg-red-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaArrowUp className="text-red-600 text-3xl" />
          <div>
            <h2 className="text-sm font-medium text-red-700">Total Barang Keluar</h2>
            <p className="text-3xl font-bold text-red-800">{barangKeluar.length}</p>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaHistory className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-sm font-medium text-blue-700">Total Riwayat Transaksi</h2>
            <p className="text-3xl font-bold text-blue-800">{riwayat.length}</p>
          </div>
        </div>
      </div>

      {/* Riwayat Transaksi */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Riwayat Transaksi Terbaru</h2>
        {riwayat.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada transaksi yang tercatat.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2">
              <thead className="text-left text-gray-600">
                <tr>
                  <th className="py-2 px-3 bg-gray-100 rounded-l">Nama Barang</th>
                  <th className="py-2 px-3 bg-gray-100">Jumlah</th>
                  <th className="py-2 px-3 bg-gray-100">Tipe</th>
                  <th className="py-2 px-3 bg-gray-100 rounded-r">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {riwayat.slice(0, 5).map((item, index) => (
                  <tr
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 shadow-sm rounded"
                  >
                    <td className="py-2 px-3 rounded-l">{item.nama}</td>
                    <td className="py-2 px-3">{item.jumlah}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs font-semibold ${
                          item.tipe === "Masuk" ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {item.tipe}
                      </span>
                    </td>
                    <td className="py-2 px-3 rounded-r">
                      {item.created_at
                        ? new Date(item.created_at).toLocaleString("id-ID")
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
