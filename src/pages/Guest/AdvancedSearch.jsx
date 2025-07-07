import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdvancedSearch() {
  const [inventoryData, setInventoryData] = useState([]);
  const [query, setQuery] = useState('');
  const [kategori, setKategori] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kondisi, setKondisi] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/data/inventory.json')
      .then(res => res.json())
      .then(data => {
        setInventoryData(data);
        setResults(data);
      })
      .catch(err => console.error('Gagal fetch data:', err));
  }, []);

  useEffect(() => {
    const filtered = inventoryData.filter(item => {
      return (
        (!query || item.nama.toLowerCase().includes(query.toLowerCase())) &&
        (!kategori || item.kategori === kategori) &&
        (!lokasi || item.lokasi === lokasi) &&
        (!kondisi || item.kondisi === kondisi)
      );
    });
    setResults(filtered);
  }, [query, kategori, lokasi, kondisi, inventoryData]);

  const kategoriOptions = [...new Set(inventoryData.map(item => item.kategori))];
  const lokasiOptions = [...new Set(inventoryData.map(item => item.lokasi))];
  const kondisiOptions = [...new Set(inventoryData.map(item => item.kondisi))];

  return (
    <>
      {/* Filter */}
      <div className="px-6 w-full">
        <div className="flex flex-wrap justify-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl">
          <input
            type="text"
            placeholder="Cari nama barang..."
            className="px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-gray-300 w-[200px] focus:outline-none focus:ring-2 focus:ring-white/30"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none w-[200px]"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            {kategoriOptions.map((k, i) => (
              <option key={i} value={k} className="text-black">{k}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none w-[200px]"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          >
            <option value="">Semua Lokasi</option>
            {lokasiOptions.map((l, i) => (
              <option key={i} value={l} className="text-black">{l}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none w-[200px]"
            value={kondisi}
            onChange={(e) => setKondisi(e.target.value)}
          >
            <option value="">Semua Kondisi</option>
            {kondisiOptions.map((k, i) => (
              <option key={i} value={k} className="text-black">{k}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 px-6">
        {results.map(item => (
          <Link
            to={`/detail/${item.id}`}
            key={item.id}
            className="bg-white/10 w-[200px] rounded-xl p-4 text-white hover:bg-white/20 transition-all shadow-md backdrop-blur cursor-pointer no-underline"
          >
            <div className="bg-white rounded-md h-[100px] flex items-center justify-center overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.nama}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h2 className="font-semibold text-base truncate">{item.nama}</h2>
            <p className="text-sm text-gray-300">{item.kategori}</p>
            <p className="text-xs text-gray-400">{item.lokasi} • {item.kondisi}</p>
          </Link>
        ))}
      </div>

      {/* No Result */}
      {results.length === 0 && (
        <p className="text-center text-gray-300 mt-6">Tidak ditemukan barang yang sesuai.</p>
      )}
    </>
  );
}
