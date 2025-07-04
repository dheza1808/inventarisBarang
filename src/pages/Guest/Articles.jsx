// src/pages/Guest/Articles.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Gagal ambil artikel:', err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Company Articles</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`./${item.id}`)} // Navigasi relatif ke /guest/articles/:id
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={item.gambar}
              alt={item.judul}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl text-indigo-700">{item.judul}</h2>
              <p className="text-sm text-gray-500">
                {item.tanggal} • {item.penulis}
              </p>
              <p className="text-gray-600 mt-2 line-clamp-3">{item.konten}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
