
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Apa saja layanan yang tersedia?", 
      a: "Kami menyediakan berbagai layanan, antara lain: Pijat refleksi kaki & tangan, Pijat tradisional (urut badan), Terapi pegal linu & nyeri otot, Terapi keseleo ringan, Pijat masuk angin & badan capek, serta Pijat panggilan ke rumah (home service)." 
    },
    { 
      q: "Apakah bisa pijat panggilan ke rumah?", 
      a: "Ya, bisa. Kami melayani pijat panggilan ke rumah untuk area Purwokerto dan sekitarnya. Cukup hubungi kami via WhatsApp, sebutkan alamat lengkap, jam yang diinginkan, dan jenis layanan." 
    },
    { 
      q: "Apakah saya harus reservasi dulu?", 
      a: "Sangat disarankan untuk melakukan reservasi terlebih dahulu, terutama saat jam sibuk (sore & malam hari), agar tidak perlu menunggu. Reservasi bisa dilakukan melalui WhatsApp atau Telepon." 
    },
    { 
      q: "Berapa lama durasi satu sesi pijat?", 
      a: "Durasi standar layanan kami: 30 menit (ringan/fokus area tertentu), 60 menit (standar), atau 90 menit (terapi intensif). Durasi bisa disesuaikan dengan kebutuhan Anda." 
    },
    { 
      q: "Berapa tarif pijat di sini?", 
      a: "Tarif tergantung pada jenis layanan, durasi, dan lokasi (datang ke tempat / panggilan rumah). Untuk info harga terbaru, silakan hubungi kami langsung melalui WhatsApp. Kami menjamin harga terjangkau dan sesuai kualitas." 
    },
    { 
      q: "Apakah pijat aman untuk lansia?", 
      a: "Ya, aman. Kami menggunakan teknik khusus dengan tekanan ringan untuk lansia. Mohon informasikan riwayat penyakit atau masalah tulang/sendi agar terapi bisa disesuaikan." 
    },
    { 
      q: "Apakah aman untuk ibu hamil?", 
      a: "Untuk ibu hamil, harus konsultasi terlebih dahulu. Pijat hanya boleh dilakukan dengan teknik khusus dan tidak di semua area tubuh demi keamanan ibu dan bayi." 
    },
    { 
      q: "Apakah bisa membantu mengatasi keseleo?", 
      a: "Kami melayani keseleo ringan sampai sedang. Namun jika terjadi bengkak parah atau tidak bisa digerakkan sama sekali, kami sarankan periksa ke dokter terlebih dahulu." 
    },
    { 
      q: "Apakah pijat bisa mengatasi masuk angin?", 
      a: "Ya. Teknik pijat tradisional dan refleksi kami membantu melancarkan peredaran darah, mengurangi perut kembung, dan menghangatkan tubuh sehingga masuk angin lebih cepat reda." 
    },
    { 
      q: "Apa yang perlu disiapkan sebelum pijat?", 
      a: "Jika datang ke tempat: datang tepat waktu dan pakai pakaian nyaman. Jika panggilan rumah: siapkan ruang yang cukup, ventilasi baik, dan handuk (opsional). Kami membawa perlengkapan sendiri." 
    },
    { 
      q: "Apakah layanan ini khusus pria atau wanita?", 
      a: "Layanan kami terbuka untuk pria dan wanita, dewasa maupun lansia. Semua pelayanan dilakukan secara profesional, sopan, dan sesuai etika." 
    },
    { 
      q: "Metode pembayaran apa saja yang tersedia?", 
      a: "Kami menerima tunai (cash), transfer bank, atau e-wallet (Gopay/OVO). Silakan konfirmasi saat booking." 
    },
    { 
      q: "Apakah ada paket langganan?", 
      a: "Ya, tersedia paket perawatan rutin untuk pelanggan tetap seperti paket mingguan, bulanan, atau paket keluarga. Hubungi kami untuk detailnya." 
    },
    { 
      q: "Jam operasional kapan?", 
      a: "Jam layanan standar adalah 08.00 – 21.00 WIB. Namun, kami bisa melayani di luar jam tersebut dengan perjanjian sebelumnya." 
    },
    { 
      q: "Bagaimana jika ingin membatalkan jadwal?", 
      a: "Mohon informasikan pembatalan atau perubahan jadwal minimal 2 jam sebelumnya agar kami dapat mengatur ulang jadwal dengan baik." 
    },
    { 
      q: "Apakah privasi pelanggan dijamin?", 
      a: "Tentu. Kami menjaga privasi, kerahasiaan data, dan kenyamanan pelanggan tanpa dokumentasi atau penyebaran informasi tanpa izin." 
    },
    { 
      q: "Bagaimana jika setelah pijat terasa pegal?", 
      a: "Itu normal karena otot sedang beradaptasi. Disarankan minum air putih yang cukup, istirahat, dan hindari aktivitas berat sementara selama 1-2 hari." 
    },
    { 
      q: "Apakah layanan ini bersifat medis?", 
      a: "Layanan kami bersifat terapi tradisional non-medis. Untuk penyakit berat atau kronis, tetap disarankan konsultasi dengan tenaga medis ahli." 
    },
    { 
      q: "Apakah bisa untuk anak-anak?", 
      a: "Bisa, untuk anak usia tertentu dengan teknik khusus dan tekanan yang sangat ringan, serta harus didampingi oleh orang tua." 
    },
    { 
      q: "Bagaimana cara tercepat untuk booking?", 
      a: "Cara tercepat adalah dengan klik tombol 'Chat WhatsApp' di website ini atau hubungi langsung nomor kami 0877-8517-2389 untuk respon cepat." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4">Bantuan & FAQ</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Diajukan</h3>
          <p className="text-slate-500">Temukan jawaban atas pertanyaan umum mengenai layanan Pijat Pak Kuswan.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-200">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className={`w-full text-left p-5 md:p-6 font-bold flex justify-between items-start gap-4 transition-colors ${active === i ? 'bg-emerald-50 text-emerald-800' : 'bg-white text-slate-900'}`}
              >
                <span className="flex-grow">{i + 1}. {f.q}</span>
                <i className={`fas fa-chevron-down text-sm mt-1 transition-transform duration-300 ${active === i ? 'rotate-180 text-emerald-600' : 'text-slate-300'}`}></i>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${active === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-emerald-50/30 text-slate-600 leading-relaxed border-t border-emerald-50">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
