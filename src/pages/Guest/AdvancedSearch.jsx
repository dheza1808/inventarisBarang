import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { barangAPI } from '../../services/barang';

export default function AdvancedSearch() {
  const [inventoryData, setInventoryData] = useState([]);
  const [query, setQuery] = useState('');
  const [kategori, setKategori] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kondisi, setKondisi] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchBarang = async () => {
      try {
        const response = await barangAPI.getAllBarang();
        
        setInventoryData(response);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchBarang();
  }, []);

  useEffect(() => {
    console.log('inventoryData updated:', inventoryData);
    
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
    <div className="px-6 w-full">
  <div className="flex flex-wrap justify-center gap-4 bg-indigo-400 shadow-md p-4 rounded-2xl">
    <input
      type="text"
      placeholder="Cari nama barang..."
      className="px-4 py-2 rounded-md bg-white border text-gray-800 placeholder:text-gray-500 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    <select
      className="px-4 py-2 rounded-md bg-white border text-gray-800 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
    >
      <option value="">Semua Kategori</option>
      {kategoriOptions.map((k, i) => (
        <option key={i} value={k}>{k}</option>
      ))}
    </select>

    <select
      className="px-4 py-2 rounded-md bg-white border text-gray-800 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={lokasi}
      onChange={(e) => setLokasi(e.target.value)}
    >
      <option value="">Semua Lokasi</option>
      {lokasiOptions.map((l, i) => (
        <option key={i} value={l}>{l}</option>
      ))}
    </select>

    <select
      className="px-4 py-2 rounded-md bg-white border text-gray-800 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-300"
      value={kondisi}
      onChange={(e) => setKondisi(e.target.value)}
    >
      <option value="">Semua Kondisi</option>
      {kondisiOptions.map((k, i) => (
        <option key={i} value={k}>{k}</option>
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
      className="bg-indigo-200 w-[200px] rounded-xl p-4 text-gray-800 hover:bg-purple-400 transition-all shadow-md cursor-pointer no-underline"
    >
      <div className="bg-white rounded-md h-[100px] flex items-center justify-center overflow-hidden mb-3">
        <img
          src={item.image}
          alt={item.nama}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h2 className="font-semibold text-base truncate text-gray-900">
        {item.nama}
      </h2>
      <p className="text-sm text-gray-600">{item.kategori}</p>
      <p className="text-xs text-gray-500">{item.lokasi} • {item.kondisi}</p>
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
