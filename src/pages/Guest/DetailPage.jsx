import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [tanggalPinjam, setTanggalPinjam] = useState('');
  const [tanggalKembali, setTanggalKembali] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/data/inventory.json')
      .then(res => res.json())
      .then(json => {
        const found = json.find(item => item.id.toString() === id);
        setData(found);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Peminjaman diajukan:', {
      barang: data.nama,
      tanggalPinjam,
      tanggalKembali
    });
    setSubmitted(true);
  };

  if (!data) {
    return (
      <MainLayout>
        <div className="text-center text-gray-600 px-6 py-10">Memuat data...</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="px-6 py-10 max-w-xl mx-auto text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-indigo-800">{data.nama}</h1>
        <img
          src={data.image}
          alt={data.nama}
          className="max-w-xs mb-4 rounded shadow-md"
        />
        <p className="mb-1"><span className="font-semibold">Kategori:</span> {data.kategori}</p>
        <p className="mb-1"><span className="font-semibold">Lokasi:</span> {data.lokasi}</p>
        <p className="mb-4"><span className="font-semibold">Kondisi:</span> {data.kondisi}</p>

        {!showForm && !submitted && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Ajukan Peminjaman
          </button>
        )}

        {showForm && !submitted && (
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-lg font-semibold mb-4 text-indigo-700">
              Formulir Peminjaman
            </h2>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Tanggal Pinjam
              </label>
              <input
                type="date"
                value={tanggalPinjam}
                onChange={(e) => setTanggalPinjam(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Tanggal Kembali
              </label>
              <input
                type="date"
                value={tanggalKembali}
                onChange={(e) => setTanggalKembali(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded font-semibold transition"
            >
              Kirim Permintaan
            </button>
          </form>
        )}

        {submitted && (
          <div className="mt-6 p-4 rounded bg-green-100 text-green-800 border border-green-300">
            Permintaan peminjaman telah diajukan!
          </div>
        )}
      </div>
    </MainLayout>
  );
}
