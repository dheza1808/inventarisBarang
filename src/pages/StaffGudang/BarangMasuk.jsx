// BarangMasuk.jsx
import { useState } from "react";
import { barangAPI } from "../../services/barang";

export default function BarangMasuk() {
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    jumlah: "",
    lokasi: "",
    kondisi: "",
    penanggungJawab: "",
    image: "",
    deskripsi: "",
  });

  const [notif, setNotif] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { nama, kategori, jumlah, lokasi, kondisi, penanggungJawab, image, deskripsi } = form;

    if (!nama || !kategori || !jumlah || !lokasi || !kondisi || !penanggungJawab || !image || !deskripsi) {
      return setNotif("⚠️ Semua field wajib diisi.");
    }

    try {
      await barangAPI.tambahBarang({
        nama,
        kategori,
        jumlah: Number(jumlah),
        lokasi,
        kondisi,
        penanggung_jawab: penanggungJawab,
        image, 
        deskripsi,
      });

      setForm({
        nama: "",
        kategori: "",
        jumlah: "",
        supplier: "",
        lokasi: "",
        kondisi: "",
        penanggungJawab: "",
        image: "",
        deskripsi: "",
      });
      setNotif("✅ Data aset berhasil ditambahkan ke Barang Masuk dan Aset.");
    } catch (error) {
      console.error("Error saat menyimpan data:", error);
      return setNotif("❌ Gagal menyimpan data. Silakan coba lagi.");
    }
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
          className="w-full px-4 py-2 border rounded text-gray-700"
          />
        <input
          name="kategori"
          type="text"
          placeholder="Kategori"
          value={form.kategori}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
          />
        <input
          name="jumlah"
          type="number"
          placeholder="Jumlah"
          value={form.jumlah}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
          />
        <input
          name="penanggungJawab"
          type="text"
          placeholder="Penanggung Jawab"
          value={form.penanggungJawab}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
          />

        <select
          name="lokasi"
          value={form.lokasi}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
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
          className="w-full px-4 py-2 border rounded text-gray-700"
          >
          <option value="">Pilih Kondisi</option>
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
          <option value="Perlu Perawatan">Perlu Perawatan</option>
        </select>

        <input
          name="image"
          type="text"
          placeholder="URL Gambar Barang"
          value={form.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
          />

        <textarea
          name="deskripsi"
          placeholder="Deskripsi Barang"
          value={form.deskripsi}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-gray-700"
          rows="3"
        ></textarea>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Simpan ke Barang Masuk
        </button>
      </form>
    </div>
  );
}
