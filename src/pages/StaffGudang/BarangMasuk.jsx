// BarangMasuk.jsx
import { useState } from "react";

export default function BarangMasuk() {
  const [form, setForm] = useState({
    nama: "",
    jumlah: "",
    supplier: "",
    lokasi: "",
    kondisi: "",
    penanggungJawab: "",
  });

  const [notif, setNotif] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, jumlah, supplier, lokasi, kondisi, penanggungJawab } = form;

    if (!nama || !jumlah || !supplier || !lokasi || !kondisi || !penanggungJawab) {
      return setNotif("⚠️ Semua field wajib diisi.");
    }

    const newEntry = {
      id: Date.now(),
      ...form,
      jumlah: Number(jumlah),
      created_at: new Date().toISOString(),
    };

    const existingMasuk = JSON.parse(localStorage.getItem("barang_masuk")) || [];
    localStorage.setItem("barang_masuk", JSON.stringify([newEntry, ...existingMasuk]));

    const existingAset = JSON.parse(localStorage.getItem("data_aset")) || [];
    localStorage.setItem("data_aset", JSON.stringify([...existingAset, newEntry]));

    setForm({
      nama: "",
      jumlah: "",
      supplier: "",
      lokasi: "",
      kondisi: "",
      penanggungJawab: "",
    });
    setNotif("✅ Data aset berhasil ditambahkan ke Barang Masuk dan Aset.");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">Form Barang Masuk (Aset Perkantoran)</h1>

      {notif && (
        <div className="mb-4 text-sm text-center px-4 py-2 rounded bg-indigo-50 border border-indigo-300 text-indigo-800">
          {notif}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
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
          placeholder="Nama Supplier"
          value={form.supplier}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="penanggungJawab"
          type="text"
          placeholder="Penanggung Jawab"
          value={form.penanggungJawab}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <select
          name="lokasi"
          value={form.lokasi}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Pilih Lokasi</option>
          <option value="Gudang A">Gudang A</option>
          <option value="Gudang B">Gudang B</option>
          <option value="Ruang IT">Ruang IT</option>
          <option value="Kantor Utama">Kantor Utama</option>
        </select>

        <select
          name="kondisi"
          value={form.kondisi}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Pilih Kondisi</option>
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
          <option value="Perlu Perawatan">Perlu Perawatan</option>
        </select>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Simpan ke Barang Masuk
        </button>
      </form>
    </div>
  );
}
