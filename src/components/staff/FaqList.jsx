import React, { useEffect, useState } from "react";

export default function FaqList() {
  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    fetch("/data/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqList(data));
  }, []);

  const handleChange = (index, value) => {
    const updated = [...faqList];
    updated[index].jawaban = value;
    setFaqList(updated);
  };

  const handleSave = () => {
    console.log("Disimpan (simulasi):", faqList);
    alert("Jawaban berhasil disimpan (simulasi).");
    // Jika pakai Supabase/Backend: kirim PATCH ke API di sini
  };

  return (
    <div className="space-y-4 text-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Manajemen FAQ</h2>
      {faqList.map((faq, index) => (
        <div key={index} className="bg-white shadow rounded p-4">
          <p className="font-medium mb-2 text-gray-800">Q: {faq.pertanyaan}</p>
          <textarea
            className="w-full border rounded p-2 text-gray-800"
            rows={2}
            value={faq.jawaban}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Simpan Semua Jawaban
      </button>
    </div>
  );
}
