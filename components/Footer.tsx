
import React from 'react';

const Footer: React.FC = () => {
  const waLink = "https://wa.me/6287785172389";
  const email = "pijatpakkuswanpurwokwerto@gmail.com";

  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-emerald-900 pb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-white font-bold text-2xl flex items-center gap-2 mb-6 group">
              <i className="fas fa-hands-holding-circle text-emerald-400 group-hover:rotate-12 transition-transform"></i>
              <span>Pijat Pak Kuswan</span>
            </a>
            <p className="text-emerald-200/60 max-w-sm mb-6 leading-relaxed">
              Pilihan utama masyarakat Purwokerto untuk layanan kesehatan tradisional. Menjamin kesegaran tubuh dengan teknik yang profesional dan ramah.
            </p>
            <div className="flex gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-emerald-900 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-lg group">
                <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a href={`mailto:${email}`} className="w-12 h-12 bg-emerald-900 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-lg group">
                <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Menu Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Tentang</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Layanan</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Galeri</a></li>
              <li><a href="#how-to" className="hover:text-emerald-400 transition-colors">Pesan Pijat</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kontak Cepat</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <i className="fas fa-phone text-emerald-500 group-hover:scale-110 transition-transform"></i>
                <a href="tel:+6287785172389" className="hover:text-white transition-colors">0877-8517-2389</a>
              </li>
              <li className="flex items-center gap-3 group">
                <i className="fas fa-envelope text-emerald-500 group-hover:scale-110 transition-transform"></i>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors text-sm truncate">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-location-dot text-emerald-500"></i>
                <a href="#contact" className="hover:text-white transition-colors">Beji, Kedungbanteng</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-200/40">
          <p>© 2024 Pijat Tradisional Pak Kuswan. Purwokerto, Jawa Tengah.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-emerald-200 transition-colors">Kebijakan Privasi</a>
            <a href="#home" className="hover:text-emerald-200 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
