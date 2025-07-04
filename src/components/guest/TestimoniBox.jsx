import React, { useEffect, useState } from 'react';

export default function TestimonialBox() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Gagal fetch testimonial:', err));
  }, []);

  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-2xl font-bold text-indigo-800 mb-10">What People Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-blue-700/60 rounded-xl w-[220px] text-center p-6 text-white hover:bg-blue-800/70 transition-all shadow-md backdrop-blur"
          >
            <div className="mb-4">
              <span className="text-5xl text-blue-200 leading-none">“</span>
            </div>
            <p className="text-sm italic mb-3 text-blue-100">"{item.pesan}"</p>
            <h3 className="font-semibold text-white">{item.nama}</h3>
            <p className="text-xs text-blue-200">{item.jabatan}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
