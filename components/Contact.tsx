
import React from 'react';

const Contact: React.FC = () => {
  const waLink = "https://wa.me/6287785172389";
  const mapsLink = "https://maps.app.goo.gl/caY7XEdoGAcsM2sz6";
  const email = "pijatpakkuswanpurwokwerto@gmail.com";

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4">Kontak & Lokasi</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Datang Langsung atau Kami Panggil</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 group hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-600/20">
                    <i className="fas fa-location-dot text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Alamat Kami</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">Dusun I, Beji, Kec. Kedungbanteng, Kabupaten Banyumas, Jawa Tengah 53152</p>
                    <a 
                      href={mapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-black text-sm border-2 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm"
                    >
                      KLIK: PETUNJUK RUTE GOOGLE MAPS
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">WhatsApp Kami</h4>
                    <p className="text-emerald-700 text-2xl font-extrabold tracking-tight">0877-8517-2389</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Resmi</h4>
                    <p className="text-slate-600 font-medium break-all">{email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a href={waLink} className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/20">
                  <i className="fab fa-whatsapp"></i>
                  Chat WhatsApp
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto min-h-[500px] bg-slate-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.390494443916!2d109.21326447547005!3d-7.398863618485294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655c4d6f851d7b%3A0xc3f98e2254e0c3b5!2sBeji%2C%20Kedungbanteng%2C%20Banyumas%20Regency%2C%20Central%20Java!5e0!3m2!1sid!2sid!4v1716120000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Beji Kedungbanteng"
              ></iframe>
              <div className="absolute top-6 right-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
                 <i className="fas fa-map-location-dot text-2xl"></i>
                 <span className="font-bold text-sm">Lihat di Maps</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-[2rem] shadow-2xl flex items-center justify-between gap-4 border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg"><i className="fas fa-car-side"></i></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Navigasi Langsung</p>
                    <p className="text-base font-black text-slate-900 leading-none">Buka di Aplikasi Maps</p>
                  </div>
                </div>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-emerald-600 transition-all shadow-md">
                  DAPATKAN RUTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
