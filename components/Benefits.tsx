
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: "fas fa-medal", title: "Berpengalaman & Beretika", text: "Terapis profesional dengan jam terbang tinggi dan mengedepankan sopan santun." },
    { icon: "fas fa-hand-holding-heart", title: "Teknik Terbukti Efektif", text: "Menggunakan teknik tradisional yang telah terbukti ampuh mengatasi keluhan otot." },
    { icon: "fas fa-truck-fast", title: "Layanan Panggilan Cepat", text: "Siap datang ke lokasi Anda di Purwokerto untuk kenyamanan maksimal." },
    { icon: "fas fa-tag", title: "Harga Transparan", text: "Biaya layanan yang terjangkau tanpa ada biaya tersembunyi." },
    { icon: "fas fa-soap", title: "Prioritas Kebersihan", text: "Kami selalu menjaga kebersihan alat, minyak pijat aman, dan handuk bersih." },
    { icon: "fas fa-clock", title: "Jadwal Fleksibel", text: "Bisa membuat janji sesuai waktu luang Anda, pagi hingga malam hari." }
  ];

  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4">Keunggulan</h2>
          <h3 className="text-4xl font-bold mb-4">Mengapa Memilih Kami?</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto">Kami memberikan jaminan kualitas dan kenyamanan untuk setiap pelanggan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 flex-shrink-0">
                <i className={b.icon}></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{b.title}</h4>
                <p className="text-emerald-100/70 text-sm leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
