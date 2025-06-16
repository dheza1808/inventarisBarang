import { useState } from "react";

export default function BarangKeluar() {
  const [form, setForm] = useState({ nama: "", jumlah: "", tujuan: "" });
  const [notif, setNotif] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, jumlah, tujuan } = form;

    if (!nama || !jumlah || !tujuan) {
      return setNotif("⚠️ Semua field wajib diisi.");
    }

    const newEntry = {
      id: Date.now(),
      ...form,
      jumlah: Number(jumlah),
      created_at: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("barang_keluar")) || [];
    const updated = [newEntry, ...existing];
    localStorage.setItem("barang_keluar", JSON.stringify(updated));

    setForm({ nama: "", jumlah: "", tujuan: "" });
    setNotif("✅ Data berhasil disimpan ke Riwayat Transaksi.");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Form Barang Keluar</h1>
      {notif && (
        <div className="mb-4 text-sm text-center px-4 py-2 rounded bg-red-50 border border-red-300 text-red-800">
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
          name="tujuan"
          type="text"
          placeholder="Tujuan"
          value={form.tujuan}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
}
