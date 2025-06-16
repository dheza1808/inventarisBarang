import { useEffect, useState } from "react";

export default function RiwayatTransaksi() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);

  useEffect(() => {
    const masuk = JSON.parse(localStorage.getItem("barang_masuk")) || [];
    const keluar = JSON.parse(localStorage.getItem("barang_keluar")) || [];

    // Urutkan berdasarkan waktu terbaru
    masuk.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    keluar.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    setBarangMasuk(masuk);
    setBarangKeluar(keluar);
  }, []);

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleDateString("id-ID") + ", " + date.toLocaleTimeString("id-ID");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Riwayat Transaksi</h1>

      {/* Barang Masuk */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Barang Masuk</h2>
        {barangMasuk.length === 0 ? (
          <p className="text-gray-500 italic">Tidak ada data barang masuk.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm text-gray-700 bg-blue-50 rounded-xl">
              <thead className="bg-blue-200 text-blue-900">
                <tr>
                  <th className="py-3 px-4 text-left">Tanggal</th>
                  <th className="py-3 px-4 text-left">Nama Barang</th>
                  <th className="py-3 px-4 text-left">Jumlah</th>
                  <th className="py-3 px-4 text-left">Supplier</th>
                </tr>
              </thead>
              <tbody>
                {barangMasuk.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-blue-100">
                    <td className="py-2 px-4">{formatDate(item.created_at)}</td>
                    <td className="py-2 px-4">{item.nama}</td>
                    <td className="py-2 px-4">{item.jumlah}</td>
                    <td className="py-2 px-4">{item.supplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Barang Keluar */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-4">Barang Keluar</h2>
        {barangKeluar.length === 0 ? (
          <p className="text-gray-500 italic">Tidak ada data barang keluar.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm text-gray-700 bg-red-50 rounded-xl">
              <thead className="bg-red-200 text-red-900">
                <tr>
                  <th className="py-3 px-4 text-left">Tanggal</th>
                  <th className="py-3 px-4 text-left">Nama Barang</th>
                  <th className="py-3 px-4 text-left">Jumlah</th>
                  <th className="py-3 px-4 text-left">Tujuan</th>
                </tr>
              </thead>
              <tbody>
                {barangKeluar.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-red-100">
                    <td className="py-2 px-4">{formatDate(item.created_at)}</td>
                    <td className="py-2 px-4">{item.nama}</td>
                    <td className="py-2 px-4">{item.jumlah}</td>
                    <td className="py-2 px-4">{item.tujuan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
