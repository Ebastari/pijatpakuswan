
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
                alt="Pengalaman Pijat Pak Kuswan"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <span className="h-px w-12 bg-emerald-400"></span>
                  <p className="font-bold tracking-widest uppercase text-xs text-emerald-400">Dedikasi & Keahlian</p>
                </div>
                <h4 className="text-3xl font-bold leading-tight">Mendedikasikan Hidup <br/>Untuk Kesehatan Anda</h4>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-emerald-50">
              <p className="text-emerald-600 font-black text-5xl mb-1">20+</p>
              <p className="text-slate-900 font-bold text-sm uppercase tracking-tighter">Tahun <br/>Pengalaman</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-1.5 mb-6 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black tracking-widest uppercase border border-emerald-100 self-start">
              Tentang Pak Kuswan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Lebih Dari Sekadar Pijat, Ini Adalah <span className="text-emerald-600 italic">Terapi Pemulihan</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Pak Kuswan adalah sosok terapis yang telah mendedikasikan hidupnya selama puluhan tahun untuk mendalami seni penyembuhan tradisional Nusantara. Di Purwokerto, beliau dikenal bukan hanya karena teknik tangannya yang presisi, tetapi juga karena kejujuran dan dedikasinya yang tinggi dalam membantu setiap pelanggan kembali bugar.
              </p>
              <p>
                Metode yang digunakan adalah perpaduan harmonis antara teknik <span className="text-slate-900 font-semibold">Totok Syaraf</span>, <span className="text-slate-900 font-semibold">Refleksi</span>, dan <span className="text-slate-900 font-semibold">Urut Tradisional</span>. Kami hanya menggunakan minyak terapi pilihan yang aman untuk kulit dan teknik yang disesuaikan dengan anatomi tubuh manusia, memastikan hasil yang maksimal tanpa efek samping negatif.
              </p>
              <p>
                Komitmen kami sangat sederhana: <span className="text-emerald-700 font-bold">Kenyamanan & Kepercayaan</span>. Setiap sesi pelayanan dilakukan dengan standar etika profesional yang tinggi, menjamin privasi Anda, dan dilakukan dengan cara yang sopan. Bagi kami, kesembuhan dan senyum pelanggan adalah prestasi terbaik yang kami kejar setiap hari.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <i className="fas fa-heart"></i>
                </div>
                <span className="font-bold text-slate-900">Sepenuh Hati</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <i className="fas fa-handshake"></i>
                </div>
                <span className="font-bold text-slate-900">Terpercaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
