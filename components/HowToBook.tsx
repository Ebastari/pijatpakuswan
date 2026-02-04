
import React from 'react';

const HowToBook: React.FC = () => {
  const steps = [
    { num: "1", title: "Hubungi WhatsApp", desc: "Kirim pesan ke nomor 087785172389." },
    { num: "2", title: "Sebutkan Layanan", desc: "Sebutkan jenis pijat, lokasi Anda, dan jam preferensi." },
    { num: "3", title: "Konfirmasi Biaya", desc: "Kami akan mengonfirmasi ketersediaan waktu & rincian biaya." },
    { num: "4", title: "Terapis Datang", desc: "Terapis datang tepat waktu — bawa handuk bila ingin — badan segar kembali!" }
  ];

  const waLink = "https://wa.me/6287785172389";

  return (
    <section id="how-to" className="py-24 bg-emerald-900 text-white relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full blur-[120px] opacity-40 -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4 block">Alur Pemesanan</span>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Cara Pesan Sangat Mudah</h3>
          <p className="text-emerald-100/70 max-w-xl mx-auto">Cukup 4 langkah simpel untuk mendapatkan badan bugar kembali tanpa perlu keluar rumah.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-2xl font-black text-emerald-400 mb-8 shadow-2xl backdrop-blur-sm transform rotate-12 transition-transform">
                {s.num}
              </div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-emerald-100/60 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
          <a href={waLink} className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/20 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
            <i className="fab fa-whatsapp text-2xl"></i>
            Booking Panggilan Rumah
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBook;
