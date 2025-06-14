import { useEffect, useState } from "react";
import { supabase } from "../../services/inventarisAPI";

export default function RiwayatTransaksi() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: masuk } = await supabase
        .from("barang_masuk")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: keluar } = await supabase
        .from("barang_keluar")
        .select("*")
        .order("created_at", { ascending: false });

      setBarangMasuk(masuk || []);
      setBarangKeluar(keluar || []);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Riwayat Transaksi</h1>

      {/* Barang Masuk */}
      <section>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Barang Masuk</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">Tanggal</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Nama Barang</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Jumlah</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {barangMasuk.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-sm">{new Date(item.created_at).toLocaleString()}</td>
                  <td className="px-4 py-2 text-sm">{item.nama}</td>
                  <td className="px-4 py-2 text-sm">{item.jumlah}</td>
                  <td className="px-4 py-2 text-sm">{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Barang Keluar */}
      <section>
        <h2 className="text-xl font-semibold text-red-700 mb-2">Barang Keluar</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">Tanggal</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Nama Barang</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Jumlah</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Tujuan</th>
              </tr>
            </thead>
            <tbody>
              {barangKeluar.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-sm">{new Date(item.created_at).toLocaleString()}</td>
                  <td className="px-4 py-2 text-sm">{item.nama}</td>
                  <td className="px-4 py-2 text-sm">{item.jumlah}</td>
                  <td className="px-4 py-2 text-sm">{item.tujuan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
