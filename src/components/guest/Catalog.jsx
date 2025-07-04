// Catalog.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Catalog({ searchTerm }) {
  const [items, setItems] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/inventory.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Gagal fetch data:', err));
  }, []);

  const filteredItems = items.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative px-6 mt-12">
      <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
        &#8249;
      </button>

      <div ref={scrollRef} className="overflow-x-auto scroll-smooth whitespace-nowrap px-8 scrollbar-hide">
        <div className="inline-flex space-x-6 pb-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/detail/${item.id}`)}
                className="cursor-pointer flex-shrink-0 w-40 bg-white/90 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.nama}
                  className="w-full h-48 object-contain bg-white rounded-t-xl p-2"
                />
                <div className="p-2 text-center text-sm font-medium text-gray-800 truncate w-full"title={item.nama}> {item.nama}</div>
              </div>
            ))
          ) : (
            <div className="text-white px-4">Tidak ada barang yang cocok.</div>
          )}
        </div>
      </div>

      <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
        &#8250;
      </button>
    </div>
  );
}
