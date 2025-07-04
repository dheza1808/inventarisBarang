import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export default function DetailArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id.toString() === id);
        setArticle(found);
      });
  }, [id]);

  if (!article) return <MainLayout><div className="px-6 py-12 text-gray-600">Memuat artikel...</div></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <img src={article.gambar} alt={article.judul} className="w-full h-64 object-cover rounded mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-indigo-800">{article.judul}</h1>
        <p className="text-sm text-gray-500 mb-6">{article.tanggal} • {article.penulis}</p>
        <p className="text-gray-700 leading-relaxed">{article.konten}</p>
      </div>
    </MainLayout>
  );
}
