import { useState } from "react";
import { supabase } from "../../services/inventarisAPI";

export default function BarangMasuk() {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [supplier, setSupplier] = useState("");
  const [notif, setNotif] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !jumlah || !supplier) return setNotif("⚠️ Semua field wajib diisi.");
    const { error } = await supabase.from("barang_masuk").insert({
      nama,
      jumlah: Number(jumlah),
      supplier,
    });
    if (error) setNotif("❌ Gagal menyimpan.");
    else {
      setNotif("✅ Data berhasil disimpan.");
      setNama(""); setJumlah(""); setSupplier("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Form Barang Masuk</h1>
      {notif && (
        <div className="mb-4 text-sm text-center px-4 py-2 rounded bg-blue-50 border border-blue-300 text-blue-800 transition-all duration-300">
          {notif}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama Barang</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Contoh: Kertas A4"
            value={nama}
            onChange={e => setNama(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Jumlah</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Contoh: 100"
            value={jumlah}
            onChange={e => setJumlah(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Supplier</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Contoh: Toko ATK Jaya"
            value={supplier}
            onChange={e => setSupplier(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 border border-black rounded-lg"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
