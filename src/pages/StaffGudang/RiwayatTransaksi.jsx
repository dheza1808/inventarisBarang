import { useEffect, useState } from "react";
import { barangAPI } from "../../services/barang";
import { peminjamanAPI } from "../../services/peminjaman";

export default function RiwayatTransaksi() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [peminjamanGuest, setPeminjamanGuest] = useState([]);

  useEffect(() => {
    const fetchBarangMasuk = async () => {
      try {
        const response = await barangAPI.getAllBarang();
        
        setBarangMasuk(response);
      } catch (error) {
        console.error("Error fetching barang masuk:", error);
      }
    }

    const fetchPeminjamanGuest = async () => {
      try {
        const response = await peminjamanAPI.getAllPeminjaman();
        setPeminjamanGuest(response);
      } catch (error) {
        console.error("Error fetching peminjaman guest:", error);
      }
    }

    fetchBarangMasuk();
    fetchPeminjamanGuest();
  }, []);

  const formatDate = (iso) => {
    const date = new Date(iso);
    return (
      date.toLocaleDateString("id-ID") + ", " + date.toLocaleTimeString("id-ID")
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Riwayat Transaksi
      </h1>

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
                  <th className="py-3 px-4 text-left">Kategori</th>
                  <th className="py-3 px-4 text-left">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {barangMasuk.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-blue-100">
                    <td className="py-2 px-4">{formatDate(item.created_at)}</td>
                    <td className="py-2 px-4">{item.nama}</td>
                    <td className="py-2 px-4">{item.kategori}</td>
                    <td className="py-2 px-4">{item.jumlah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Peminjaman dari Guest
        </h2>
        {peminjamanGuest.length === 0 ? (
          <p className="text-gray-500 italic">
            Belum ada pengajuan peminjaman.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm text-gray-700 bg-purple-50 rounded-xl">
              <thead className="bg-purple-200 text-purple-900">
                <tr>
                  <th className="py-3 px-4 text-left">Tanggal</th>
                  <th className="py-3 px-4 text-left">Nama Peminjam</th>
                  <th className="py-3 px-4 text-left">Nama Barang</th>
                  <th className="py-3 px-4 text-left">Tanggal Pinjam</th>
                  <th className="py-3 px-4 text-left">Tanggal Kembali</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {peminjamanGuest.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-purple-100">
                    <td className="py-2 px-4">{formatDate(item.created_at)}</td>
                    <td className="py-2 px-4">{item.nama_peminjam}</td>
                    <td className="py-2 px-4">{item.barang.nama}</td>
                    <td className="py-2 px-4">{item.tanggal_pinjam}</td>
                    <td className="py-2 px-4">{item.tanggal_kembali}</td>
                    <td className="py-2 px-4">{item.status}</td>
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
