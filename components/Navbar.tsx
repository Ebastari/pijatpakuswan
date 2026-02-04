
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Pesan', href: '#how-to' },
    { name: 'Lokasi', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-emerald-950/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="text-white font-bold text-xl flex items-center gap-2 group">
              <i className="fas fa-hands-holding-circle text-emerald-400 group-hover:rotate-12 transition-transform"></i>
              <span>Pijat Pak Kuswan</span>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white text-[15px] font-medium transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6287785172389"
                className="bg-[#10b981] hover:bg-[#059669] text-white px-7 py-2.5 rounded-full text-[15px] font-bold transition-all shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                Booking WA
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen bg-emerald-950 shadow-2xl' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-10 space-y-2 border-t border-emerald-900/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/90 block px-4 py-4 rounded-2xl text-lg font-medium hover:bg-emerald-900 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/6287785172389"
              className="w-full text-center bg-[#10b981] text-white block px-4 py-5 rounded-2xl text-lg font-bold shadow-xl"
            >
              Booking Sekarang
            </a>
            <a
              href="https://maps.app.goo.gl/caY7XEdoGAcsM2sz6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-white text-emerald-900 block px-4 py-5 rounded-2xl text-lg font-bold"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
