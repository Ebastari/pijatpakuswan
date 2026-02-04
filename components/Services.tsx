
import React from 'react';

const ServiceCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
      <i className={icon}></i>
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{desc}</p>
    <a href="https://wa.me/6287785172389" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
      Booking Sekarang <i className="fas fa-chevron-right text-[10px]"></i>
    </a>
  </div>
);

const Services: React.FC = () => {
  const items = [
    {
      icon: "fas fa-shoe-prints",
      title: "Pijat Refleksi (Reflexology)",
      desc: "Fokus pada titik refleksi kaki/tangan untuk meredakan sakit kepala, pegal, dan gangguan pencernaan ringan."
    },
    {
      icon: "fas fa-user-check",
      title: "Pijat Tradisional (Totok & Urut)",
      desc: "Mengatasi pegal otot, keluhan punggung, leher, dan pinggang dengan teknik urut tradisional yang melegakan."
    },
    {
      icon: "fas fa-crutch",
      title: "Terapi Pegal & Keseleo Ringan",
      desc: "Penanganan pemulihan sendi dan jaringan lunak setelah keseleo ringan untuk mengembalikan fungsi gerak."
    },
    {
      icon: "fas fa-wind",
      title: "Pijat Masuk Angin & Flu Ringan",
      desc: "Teknik pijat hangat yang membantu meredakan gejala masuk angin, kembung, dan badan tidak enak."
    },
    {
      icon: "fas fa-home",
      title: "Pijat Panggilan (Home Service)",
      desc: "Untuk kenyamanan Anda — kami datang lengkap dengan perlengkapan ke rumah, kost, atau hotel Anda."
    },
    {
      icon: "fas fa-calendar-check",
      title: "Konsultasi & Perawatan Rutin",
      desc: "Paket perawatan berkala yang dirancang khusus untuk menjaga kebugaran dan imunitas tubuh Anda."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-black text-sm tracking-[0.2em] uppercase mb-4 block">Layanan Utama</span>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Pilih Sesuai Keluhan Anda</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Teknik refleksi dan pijat tradisional yang membuat badan kembali enteng. Tersedia layanan panggilan ke rumah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
