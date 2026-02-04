
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "Siti", 
      loc: "Purwokerto", 
      text: "Setelah pijat di Pak Kuswan, nyeri punggung saya langsung berkurang. Pelayanan ramah dan profesional." 
    },
    { 
      name: "Budi", 
      loc: "Sokaraja", 
      text: "Panggilan ke rumah cepat dan nyaman. Badan langsung enteng setelah dipijat. Recommended!" 
    },
    { 
      name: "Lusi", 
      loc: "Purwokerto", 
      text: "Teknik refleksinya mantap banget, titik sarafnya pas. Masuk angin langsung sembuh tanpa obat." 
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4 block">Testimoni</span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight italic">“Apa Kata Pelanggan Kami?”</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-500">
              <div className="text-emerald-100 text-8xl absolute top-4 right-8 font-serif select-none group-hover:text-emerald-200 transition-colors">“</div>
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-sm"></i>)}
              </div>
              <p className="text-slate-600 text-lg mb-8 relative z-10 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4 relative z-10 border-t border-slate-50 pt-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 font-black text-xl">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{r.name}</h4>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold text-[10px]">{r.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
