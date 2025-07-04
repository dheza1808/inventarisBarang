import React, { useEffect, useState } from 'react';

export default function FAQPage() {
  const [faqList, setFaqList] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/data/faq.json')
      .then(res => res.json())
      .then(data => setFaqList(data))
      .catch(err => console.error('Gagal fetch FAQ:', err));
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pertanyaan dikirim:", userQuestion);
    setSubmitted(true);
    setUserQuestion('');
    setTimeout(() => setSubmitted(false), 4000); // hilangkan notifikasi
  };

  return (
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-indigo-800">Frequently Asked Questions</h1>

        <div className="space-y-4 mb-12">
          {faqList.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow border border-indigo-100">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 text-indigo-700 font-medium flex justify-between items-center"
              >
                <span>{item.pertanyaan}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-sm text-gray-700">{item.jawaban}</div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar for Guest Question */}
        <div className="mt-10 bg-indigo-50 p-6 rounded-xl shadow border border-indigo-200">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">Belum menemukan jawaban?</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Tulis pertanyaan Anda di sini..."
              className="w-full flex-1 px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-medium transition"
            >
              Kirim
            </button>
          </form>
          {submitted && (
            <p className="mt-3 text-green-600 text-sm">Pertanyaan Anda berhasil dikirim!</p>
          )}
        </div>
      </div>
  );
}
