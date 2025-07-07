import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Gagal ambil artikel:", err));
  }, []);

  return (
    <div className="py-12 px-4 text-[#2f1c94]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Company Articles</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/articles/${item.id}`)}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.gambar}
                alt={item.judul}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg text-[#2f1c94] hover:underline">{item.judul}</h2>
                <p className="text-sm text-gray-500">
                  {item.tanggal} • {item.penulis}
                </p>
                <p className="text-gray-700 mt-2 line-clamp-3">
                  {item.konten}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
