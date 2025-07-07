// src/pages/Guest/DetailArticle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setArticle(found);
      });
  }, [id]);

  if (!article) {
    return (
      <div className="px-6 py-12 text-white bg-black min-h-screen">
        Memuat artikel...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-200 bg-black min-h-screen">
      <img
        src={article.gambar}
        alt={article.judul}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-2 text-white">{article.judul}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {article.tanggal} • {article.penulis}
      </p>
      <p className="text-gray-300 leading-relaxed">{article.konten}</p>
    </div>
  );
}
