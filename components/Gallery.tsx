
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://i.ibb.co.com/7tdJdb2w/pijat1.jpg",
      title: "Ruang Terapi Nyaman",
      desc: "Suasana tenang untuk relaksasi maksimal"
    },
    {
      url: "https://i.ibb.co.com/LzBBSjzy/pijat2.jpg",
      title: "Teknik Refleksi",
      desc: "Pemijatan pada titik saraf yang tepat"
    },
    {
      url: "https://i.ibb.co.com/0pcyxMjr/pijat3.jpg",
      title: "Pijat Tradisional",
      desc: "Membantu melancarkan peredaran darah"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4 block">Galeri Kami</span>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dokumentasi Layanan</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Intip suasana tempat praktik dan aktivitas pelayanan pijat tradisional Pak Kuswan yang bersih dan nyaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-[4/5] bg-slate-100">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1544161515-4ae6ce6ea858?q=80&w=1000&auto=format&fit=crop`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-white font-bold text-xl mb-1">{img.title}</h4>
                <p className="text-emerald-200 text-sm">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
