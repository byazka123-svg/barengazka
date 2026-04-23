import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight,
  Plus,
  Target,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageModal = ({ src, onClose }: { src: string, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-[100] bg-smm-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img 
        src={src} 
        alt="Portfolio Detail" 
        referrerPolicy="no-referrer"
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
      />
      <button 
        onClick={onClose}
        className="absolute -top-12 right-0 md:-right-12 p-3 text-white/50 hover:text-smm-accent transition-colors bg-white/5 md:bg-transparent rounded-full"
      >
        <Plus className="w-8 h-8 rotate-45" />
      </button>
    </motion.div>
  </motion.div>
);

const WA_NUMBER = "0895611111978";

const SMMPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -40px 0px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-smm-white min-h-screen text-smm-black font-sans-smm selection:bg-smm-accent selection:text-white">
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-smm-white/92 backdrop-blur-md border-b border-smm-gray-200 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="flex items-center gap-2 font-medium text-smm-black hover:text-smm-accent transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>
        <a 
          href={`https://wa.me/${WA_NUMBER}`} 
          className="bg-smm-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-85 transition-all shadow-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat WhatsApp
        </a>
      </nav>

      <main>
        {/* ① HERO SECTION */}
        <section className="min-h-screen flex items-center pt-32 pb-20 px-6 bg-smm-cream relative overflow-hidden">
          {/* Hero Decorative Elements */}
          <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-smm-white border border-smm-gray-200 rounded-full text-xs md:text-sm font-medium text-smm-gray-600 mb-9"
            >
              <span className="text-smm-accent">🔥</span> Jasa Social Media Management · Mulai <span className="text-smm-accent font-semibold">Rp 350.000/bulan</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-8xl leading-[1.08] tracking-tight text-smm-black mb-6"
            >
              Konten Jelek<br />
              Lebih <em className="italic text-smm-accent">Mahal</em><br />
              dari Konten Bagus.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-smm-gray-600 text-lg md:text-xl max-w-[580px] mx-auto mb-10 leading-relaxed"
            >
              Karena konten jelek bikin orang kabur sebelum mereka sempat percaya pada bisnis kamu. Konten bagus? Mulai <strong className="text-smm-black">Rp 350.000 sebulan.</strong> Kami yang kerjain semuanya — dari ide sampai upload.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <a href="#pricing" className="bg-smm-accent text-white px-8 md:px-10 py-4 md:py-4.5 rounded-full text-base font-medium transition-all shadow-[0_4px_24px_rgba(37,99,235,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(37,99,235,0.35)]">
                Lihat Paket & Harganya ↓
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-smm-white border-1.5 border-smm-gray-200 text-smm-gray-600 px-8 py-3.5 rounded-full text-sm font-medium hover:border-smm-accent hover:text-smm-accent transition-all">
                💬 Konsultasi Gratis Dulu
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center flex-wrap gap-4 text-xs md:text-sm text-smm-gray-400"
            >
              <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold text-[10px]"><span className="text-smm-accent">✅</span> Konsultasi Gratis</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold text-[10px]"><span className="text-smm-accent">✅</span> Tanpa Kontrak Panjang</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold text-[10px]"><span className="text-smm-accent">✅</span> Hasil Bisa Dilihat di Portofolio</span>
            </motion.div>
          </div>
        </section>

        {/* ② PAIN POINT SECTION */}
        <section id="pain" className="py-24 px-6 md:px-12 bg-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent mb-4">Kamu di sini karena...</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-4">
                Kamu Tahu Harus Aktif<br className="hidden md:block" /> di Sosmed. Tapi Kok<br className="hidden md:block" /> <em className="italic text-smm-accent">Nggak Jalan-Jalan Juga?</em>
              </h2>
              <p className="text-lg md:text-xl text-smm-gray-600 mb-14 leading-relaxed">Bukan karena kamu malas. Ini yang sebenarnya terjadi:</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-smm-gray-200 border border-smm-gray-200 rounded-xl overflow-hidden mb-14"
            >
              {[
                { emoji: "😮💨", title: "Udah niat posting, tapi bingung mau bikin konten apa", desc: "Ide nggak muncul-muncul, akhirnya nggak jadi posting sama sekali." },
                { emoji: "📉", title: "Feed-nya berantakan, nggak ada yang mau follow", desc: "Visual nggak konsisten, caption asal-asalan, engagement nol besar." },
                { emoji: "⏰", title: "Nggak ada waktu", desc: "Sibuk ngurusin bisnis itu sendiri sudah menyita segalanya." },
                { emoji: "💸", title: "Pernah coba jasa lain — mahal, hasilnya biasa aja", desc: "Bayar jutaan, dapat konten yang terasa biasa saja." },
                { emoji: "🔇", title: "Udah posting tapi sepi", desc: "Nggak ada yang engage, nggak ada yang beli." }
              ].map((item, i) => (
                <div key={i} className="bg-smm-white p-8 hover:bg-smm-cream transition-colors">
                  <span className="text-3xl mb-3.5 block">{item.emoji}</span>
                  <h4 className="text-[15px] font-semibold text-smm-black mb-2 leading-snug">{item.title}</h4>
                  <p className="text-sm text-smm-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="border-l-3 border-smm-accent p-8 bg-smm-accent-light rounded-r-xl max-w-2xl mx-auto"
            >
              <p className="text-base md:text-lg text-smm-gray-800 leading-relaxed">
                Setiap hari feed kamu sepi, ada calon pelanggan yang pilih kompetitor kamu yang terlihat lebih profesional. Bukan karena mereka lebih baik — <strong className="text-smm-accent font-semibold">tapi karena mereka terlihat lebih baik.</strong>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ③ SOLUSI SECTION */}
        <section id="solusi" className="py-24 px-6 md:px-12 bg-smm-black text-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent-muted mb-4">Solusi</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-white mb-4">
                Tampil Profesional di Sosmed<br className="hidden md:block" /> Bukan Lagi <em className="italic text-smm-accent-muted">Privilege</em><br className="hidden md:block" /> yang Mahal.
              </h2>
              <p className="text-sm md:text-base text-white/55 leading-relaxed mb-14 overflow-hidden">
                Perkenalkan saya Azka, digital marketing berpengalaman membantu UMKM lebih dari 4 tahun, saya akan handle semuanya — dari riset ide konten, desain visual, penulisan caption, sampai upload tepat waktu. Kamu tinggal fokus jualan.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: "🎯", title: "Strategi, Bukan Asal Posting", desc: "Setiap konten punya tujuan: awareness, engagement, atau konversi. Bukan sekadar mengisi feed." },
                { icon: "✨", title: "Visual yang Bikin Orang Berhenti Scroll", desc: "Desain estetik dan konsisten yang membangun kesan profesional sejak hari pertama." },
                { icon: "⚡", title: "Zero Ribet untuk Kamu", desc: "Konsultasi → produksi → upload. Semua kami urus. Kamu nggak perlu buka Canva sama sekali." }
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-9 bg-white/[0.03] hover:border-smm-accent hover:bg-[rgba(200,98,42,0.07)] transition-all">
                  <div className="w-12 h-12 bg-smm-accent/15 rounded-xl flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2.5 tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ④ PRICING SECTION */}
        <section id="pricing" className="py-24 px-6 md:px-12 bg-smm-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent mb-4">Paket Harga</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-4">Investasi Terkecil,<br className="hidden md:block" /> <em className="italic text-smm-accent">Dampak Terbesar.</em></h2>
              <p className="text-base md:text-lg text-smm-gray-600 leading-relaxed">Harga transparan. Tanpa biaya tersembunyi. Tanpa kontrak jebakan.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {/* STARTER */}
              <motion.div 
                {...fadeInUp}
                className="bg-smm-white border border-smm-gray-200 rounded-2xl p-10 md:p-12 relative group hover:shadow-xl transition-all"
              >
                <div className="text-[11px] font-bold uppercase tracking-widest text-smm-gray-400 mb-5">MULAI DARI SINI</div>
                <div className="text-sm text-smm-gray-400 line-through mb-1">Rp 750.000</div>
                <div className="font-serif text-5xl text-smm-black leading-none mb-1">350rb</div>
                <div className="text-xs text-smm-gray-400 mb-4">per bulan</div>
                <div className="inline-block bg-smm-accent-light text-smm-accent text-xs font-semibold px-3 py-1 rounded-full mb-5">Hemat 53%</div>
                <p className="text-sm text-smm-gray-600 leading-relaxed pb-5 mb-5 border-b border-smm-gray-100">
                  Untuk kamu yang baru mau mulai aktif dan butuh konten yang konsisten — tanpa ribet.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> 30 Konten Single Image Instagram
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Ide Konten Bulanan
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Desain estetik on-brand
                  </li>
                </ul>
                <a href={`https://wa.me/${WA_NUMBER}?text=Halo%20Azka,%20saya%20tertarik%20dengan%20Paket%20Starter%20SMM%20350rb`} target="_blank" rel="noopener noreferrer" className="block text-center py-3.5 border-1.5 border-smm-gray-200 text-smm-black rounded-full text-[15px] font-medium hover:border-smm-accent hover:text-smm-accent transition-all">
                  Ambil Paket Starter →
                </a>
              </motion.div>

              {/* PRO */}
              <motion.div 
                {...fadeInUp}
                className="bg-smm-white border-2 border-smm-accent rounded-2xl p-10 md:p-12 relative group shadow-lg shadow-smm-accent/15 hover:shadow-2xl hover:shadow-smm-accent/25 transition-all"
              >
                <div className="absolute -top-3.5 right-5 bg-smm-accent text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full">⭐ PALING LARIS</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-smm-accent mb-5">PALING WORTH IT</div>
                <div className="text-sm text-smm-gray-400 line-through mb-1">Rp 1.500.000</div>
                <div className="font-serif text-5xl text-smm-black leading-none mb-1">500rb</div>
                <div className="text-xs text-smm-gray-400 mb-4">per bulan</div>
                <div className="inline-block bg-smm-accent-light text-smm-accent text-xs font-semibold px-3 py-1 rounded-full mb-5">Hemat 67%</div>
                <p className="text-sm text-smm-gray-600 leading-relaxed pb-5 mb-5 border-b border-smm-gray-100">
                  Untuk kamu yang serius mau grow dan butuh konten lebih lengkap — foto, story, sampai video.
                </p>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> 30 Konten Single Image Instagram
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Ide Konten Fresh Setiap Minggu
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-accent font-medium leading-tight italic">
                    <span className="text-smm-accent font-bold">✓</span> 🎁 BONUS Konten Story
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-accent font-medium leading-tight italic">
                    <span className="text-smm-accent font-bold">✓</span> 🎁 BONUS Konten Video / Reels / TikTok
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Caption storytelling yang engaging
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Upload & Scheduling
                  </li>
                  <li className="flex gap-2.5 text-sm text-smm-gray-600 leading-tight">
                    <span className="text-smm-accent font-bold">✓</span> Desain visual premium & konsisten
                  </li>
                </ul>
                <a href={`https://wa.me/${WA_NUMBER}?text=Halo%20Azka,%20saya%20tertarik%20dengan%20Paket%20Pro%20SMM%20500rb`} target="_blank" rel="noopener noreferrer" className="block text-center py-3.5 bg-smm-accent text-white rounded-full text-[15px] font-medium hover:opacity-90 shadow-md shadow-smm-accent/25 transition-all">
                  Ambil Paket Pro →
                </a>
                <div className="text-[12px] text-smm-gray-400 text-center mt-3">⏳ Slot bulan ini hampir penuh — amankan sekarang!</div>
              </motion.div>
            </div>

            <motion.div 
              {...fadeInUp}
              className="mt-10 p-7 bg-white border border-smm-gray-200 rounded-xl text-center max-w-lg mx-auto"
            >
              <p className="text-sm md:text-base text-smm-gray-600 mb-3 italic">🤔 Bingung pilih paket mana? Konsultasinya gratis, tanpa tekanan untuk langsung beli.</p>
              <a href={`https://wa.me/${WA_NUMBER}?text=Halo%20Azka,%20saya%20mau%20konsultasi%20dulu%20soal%20paket%20SMM`} target="_blank" rel="noopener noreferrer" className="text-smm-accent font-medium text-[15px] hover:underline">
                Tanya Dulu Sebelum Memutuskan →
              </a>
            </motion.div>
          </div>
        </section>

        {/* ⑤ HOW IT WORKS SECTION */}
        <section id="how" className="py-24 px-6 md:px-12 bg-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent mb-4">Cara Kerja</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black">Prosesnya Simpel.<br /> <em className="italic text-smm-accent">Hasilnya Nggak Sesimpel Itu.</em></h2>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="max-w-[640px] mt-14 mx-auto relative pl-12 md:pl-16 after:content-[''] after:absolute after:left-[23px] after:md:left-[23px] after:top-10 after:bottom-10 after:w-px after:bg-smm-gray-200"
            >
              {[
                { title: "Konsultasi Gratis", desc: "Ceritakan bisnis kamu — produk apa, target pasarnya siapa. Kami dengerin, analisis, dan kasih rekomendasi jujur. Termasuk kalau kamu belum butuh upgrade paket." },
                { title: "Riset & Strategi Konten", desc: "Kami riset kompetitor dan audiens kamu, lalu susun content plan bulanan yang sudah terarah — siap kamu approve." },
                { title: "Produksi Konten", desc: "Desain visual, penulisan caption, dan produksi video dikerjakan sesuai tone dan branding bisnis kamu." },
                { title: "Kamu Approve, Kami Upload 📈", desc: "Setelah kamu setujui, semua konten tayang tepat waktu sesuai jadwal terbaik. Kamu tinggal pantau hasilnya." }
              ].map((step, i) => (
                <div key={i} className="mb-12 relative group">
                  <div className="absolute -left-12 md:-left-16 top-0 w-12 h-12 rounded-full bg-smm-cream border-2 border-smm-gray-200 flex items-center justify-center text-[15px] font-bold text-smm-accent z-10 transition-colors group-hover:bg-smm-accent group-hover:border-smm-accent group-hover:text-white">
                    {i+1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-semibold text-smm-black mb-1.5">{step.title}</h4>
                    <p className="text-[15px] text-smm-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ⑥ PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24 px-6 md:px-12 bg-smm-cream">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent mb-4">Portofolio</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-4">Ini Hasil Kerja Kami.<br /> <em className="italic text-smm-accent">Bukan Sekadar Klaim.</em></h2>
              <p className="text-base md:text-lg text-smm-gray-600 mb-14 leading-relaxed">Portofolio nyata. Klien nyata. Lihat sendiri.</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
            >
              {[
                "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776918430999.png",
                "https://ik.imagekit.io/hrctvvb3m/image%20(3).png",
                "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776657033524.png",
                "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776834613609.png",
                "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776535578336.png",
                "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776840405993.png"
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-smm-gray-200 rounded-xl overflow-hidden cursor-zoom-in group shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt="Portfolio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
              ))}
            </motion.div>

            <motion.p 
              {...fadeInUp}
              className="text-[15px] text-smm-gray-600 max-w-xl mx-auto leading-relaxed"
            >
              Setiap karya di atas pernah tayang sebagai konten aktif yang membangun kepercayaan dan engagement nyata. <strong className="text-smm-black font-semibold">Bisnis kamu bisa jadi yang berikutnya.</strong>
            </motion.p>
          </div>
        </section>

        {/* ⑦ FAQ SECTION */}
        <section id="faq" className="py-24 px-6 md:px-12 bg-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-smm-accent mb-4">FAQ</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-14">Masih Ada yang Bikin Ragu?<br className="hidden md:block" /> <em className="italic text-smm-accent">Ini Jawaban Jujurnya.</em></h2>
            </motion.div>

            <motion.div {...fadeInUp} className="max-w-[680px] mx-auto md:mx-0">
              {[
                { 
                  q: "Harga segini, emang beneran bagus hasilnya?", 
                  a: "Lihat portofolionya di atas — hasil kerja yang berbicara. Kamu juga bisa minta sample desain sebelum memutuskan. Kami percaya kualitas yang tunjukkan diri sendiri." 
                },
                { 
                  q: "Bagaimana kalau hasilnya nggak sesuai ekspektasi?", 
                  a: "Sebelum produksi dimulai, kamu approve dulu content plan dan arah visualnya. Ekspektasi sudah selaras dari awal — nggak ada kejutan yang nggak diinginkan." 
                },
                { 
                  q: "Saya nggak ngerti sosmed, bisa tetap pakai ini?", 
                  a: "Justru ini untuk kamu. Kami handle dari nol — kamu nggak perlu tau apa-apa tentang algoritma atau desain. Cukup ceritakan bisnis kamu, sisanya urusan kami." 
                },
                { 
                  q: "Kapan kontennya mulai diproduksi?", 
                  a: "Setelah konsultasi selesai dan pembayaran dikonfirmasi, produksi dimulai dalam 1–3 hari kerja. Cepat, nggak bertele-tele." 
                },
                { 
                  q: "Kalau mau berhenti gimana?", 
                  a: "Tidak ada kontrak panjang. Paket berjalan per bulan — kamu bebas lanjut atau berhenti kapan saja. Tapi jujur saja, klien kami rata-rata lanjut karena hasilnya terasa." 
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-smm-gray-200">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-base md:text-lg font-medium text-smm-black transition-colors group-hover:text-smm-accent">{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full border-1.5 border-smm-gray-200 flex items-center justify-center transition-all ${openFaq === i ? 'bg-smm-accent border-smm-accent text-white rotate-45' : 'text-smm-gray-400'}`}>
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-sm md:text-base text-smm-gray-600 leading-relaxed italic">
                          "{faq.a}"
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ⑧ FINAL CTA SECTION */}
        <section id="final-cta" className="py-32 px-6 bg-smm-black text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
              {...fadeInUp}
              className="font-serif text-4xl md:text-7xl text-white leading-tight tracking-tight mb-5"
            >
              Slot Bulan Ini<br /> <em className="italic text-smm-accent-muted">Hampir Penuh.</em>
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              className="text-base md:text-lg text-white/50 max-w-[520px] mx-auto mb-10 leading-relaxed font-light"
            >
              Kami batasi jumlah klien per bulan agar kualitas setiap konten tetap terjaga. Kalau kamu sudah sampai sejauh ini membaca — kamu tahu bisnis kamu butuh ini. Mulai dari Rp 350.000. Tanpa ribet. Tanpa modal besar.
            </motion.p>
            <motion.div {...fadeInUp}>
              <a 
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Azka,%20saya%20mau%20tanya%20soal%20jasa%20SMM`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-smm-white text-smm-black px-9 py-4.5 rounded-full text-base font-semibold transition-all hover:bg-smm-accent hover:text-white hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(37,99,235,0.4)]"
              >
                💬 Chat WhatsApp Sekarang — Gratis
              </a>
              <div className="mt-5 text-xs text-white/30 tracking-tight">Kami balas dalam hitungan menit · Konsultasi gratis · Tanpa tekanan</div>
              <div className="mt-9 text-sm text-white/35 italic font-light">⏳ Jangan tunggu sampai slot bulan ini penuh. Yang nunggu, biasanya ketinggalan.</div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-smm-gray-200 text-center">
        <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-smm-gray-400">© 2025 Azka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SMMPage;
