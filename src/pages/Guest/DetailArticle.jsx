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
      <div className="px-6 py-12 text-[#2f1c94] bg-gradient-to-b from-indigo-100 to-purple-100 min-h-screen">
        Memuat artikel...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gradient-to-b from-indigo-100 to-purple-100 min-h-screen text-[#2f1c94]">
      <img
        src={article.gambar}
        alt={article.judul}
        className="w-full h-64 object-cover rounded mb-6 shadow"
      />
      <h1 className="text-3xl font-bold mb-2">{article.judul}</h1>
      <p className="text-sm text-gray-600 mb-6">
        {article.tanggal} • {article.penulis}
      </p>
      <p className="leading-relaxed text-gray-800">{article.konten}</p>
    </div>
  );
}
