
import React from 'react';

const Hero: React.FC = () => {
  const waLink = "https://wa.me/6287785172389";
  const mapsLink = "https://maps.app.goo.gl/caY7XEdoGAcsM2sz6";
  const heroImage = "https://i.ibb.co.com/KcqjpkZ1/Screenshot-2026-02-04-205502.png";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-emerald-900/50"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -mr-96 -mt-96"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="text-center lg:text-left lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-emerald-400/30 rounded-full text-emerald-400 font-bold text-xs tracking-[0.2em] uppercase bg-emerald-400/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Layanan Terpercaya Purwokerto
            </div>
            
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-8 leading-[1.1]">
              Pijat Refleksi & <br/>
              <span className="text-emerald-400">Solusi Cepat Pegal</span>,<br/> Keseleo & Masuk Angin
            </h1>
            
            <p className="text-lg md:text-xl mb-12 text-emerald-100/70 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Badan pegal? Kaki bengkak? Masuk angin? Kami datang ke rumah atau Anda bisa datang ke tempat kami di Beji, Kedungbanteng.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={waLink}
                className="px-8 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-emerald-500/20 flex items-center justify-center gap-3 group"
              >
                <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
                Pesan Sekarang
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white text-emerald-900 hover:bg-emerald-50 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 border-2 border-transparent hover:border-emerald-400"
              >
                <i className="fas fa-location-dot text-emerald-600 text-xl"></i>
                Petunjuk Rute Map
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-10 opacity-60">
              <div>
                <p className="text-2xl font-bold text-white tracking-tighter">10th+</p>
                <p className="text-xs uppercase tracking-widest font-medium text-emerald-400">Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tighter">5.0</p>
                <p className="text-xs uppercase tracking-widest font-medium text-emerald-400">Rating Google</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tighter">1rb+</p>
                <p className="text-xs uppercase tracking-widest font-medium text-emerald-400">Pelanggan</p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-emerald-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] bg-emerald-900/40 aspect-[4/5] lg:h-[680px]">
                <img 
                  src={heroImage} 
                  alt="Pak Kuswan Profesional Purwokerto" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-lg leading-tight">Pak Kuswan</h4>
                      <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Terapis Profesional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full border-2 border-emerald-500/20 rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
