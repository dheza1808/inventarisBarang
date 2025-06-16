import { useState } from "react";

export default function BarangMasuk() {
  const [form, setForm] = useState({ nama: "", jumlah: "", supplier: "" });
  const [notif, setNotif] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, jumlah, supplier } = form;

    if (!nama || !jumlah || !supplier) {
      return setNotif("⚠️ Semua field wajib diisi.");
    }

    const newEntry = {
      id: Date.now(),
      ...form,
      jumlah: Number(jumlah),
      created_at: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("barang_masuk")) || [];
    const updated = [newEntry, ...existing];
    localStorage.setItem("barang_masuk", JSON.stringify(updated));

    setForm({ nama: "", jumlah: "", supplier: "" });
    setNotif("✅ Data berhasil disimpan ke Riwayat Transaksi.");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Form Barang Masuk</h1>
      {notif && (
        <div className="mb-4 text-sm text-center px-4 py-2 rounded bg-blue-50 border border-blue-300 text-blue-800">
          {notif}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="nama"
          type="text"
          placeholder="Nama Barang"
          value={form.nama}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="jumlah"
          type="number"
          placeholder="Jumlah"
          value={form.jumlah}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="supplier"
          type="text"
          placeholder="Supplier"
          value={form.supplier}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
}
