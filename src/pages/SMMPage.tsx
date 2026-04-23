import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowLeft, 
  Instagram, 
  Sparkles, 
  Mail,
  X,
  ArrowRight,
  TrendingUp,
  Layout,
  Clock,
  MessageSquare,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageModal = ({ src, onClose }: { src: string, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
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
        className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
      />
      <button 
        onClick={onClose}
        className="absolute -top-12 right-0 md:-right-12 p-3 text-white/50 hover:text-accent transition-colors bg-white/5 md:bg-transparent rounded-full"
      >
        <X className="w-8 h-8" />
      </button>
    </motion.div>
  </motion.div>
);

const SMMPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waNumber = "62895611111978";

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-accent selection:text-navy">
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm px-6 md:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-navy hover:text-accent transition-colors group text-sm font-bold">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </Link>
          <div className="text-xl font-display font-black tracking-tighter text-navy uppercase">
            AZKA<span className="text-accent">.</span>
          </div>
        </div>
      </nav>

      <main>
        {/* ━━━ HERO SECTION (ATTENTION) ━━━ */}
        <section className="pt-48 pb-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-white rounded-full text-[10px] md:text-xs uppercase font-black tracking-[0.2em] mb-10 shadow-xl shadow-navy/10">
                🔥 Jasa Social Media Management · Mulai Rp 350.000/bulan
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-navy mb-8 leading-[0.85]">
                Konten Jelek Lebih <br />
                <span className="text-accent italic">Mahal</span> dari Konten Bagus.
              </h1>
              <p className="text-slate-700 text-xl md:text-3xl max-w-3xl mx-auto mb-12 font-bold leading-tight">
                Karena konten jelek bikin orang kabur sebelum mereka sempat percaya pada bisnis kamu. Konten bagus? Mulai Rp 350.000 sebulan. Kami yang kerjain semuanya — dari ide sampai upload.
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <a 
                  href="#pricing"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-navy text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-navy/30"
                >
                  Lihat Paket & Harganya
                  <ArrowRight className="w-6 h-6 text-accent" />
                </a>
                
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2">✅ Konsultasi Gratis</span>
                  <span className="flex items-center gap-2">✅ Tanpa Kontrak Panjang</span>
                  <span className="flex items-center gap-2">✅ Hasil Bisa Dilihat di Portofolio</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ━━━ PAIN POINT SECTION (INTEREST) ━━━ */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-4 block">Kamu di sini karena...</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-navy tracking-tighter leading-[0.9]">
                Kamu Tahu Harus Aktif di Sosmed. <br />
                <span className="text-slate-400 italic">Tapi Kok Nggak Jalan-Jalan Juga?</span>
              </h2>
              <p className="mt-8 text-slate-600 text-xl md:text-2xl font-bold">Bukan karena kamu malas. Ini yang sebenarnya terjadi:</p>
            </div>

            <div className="grid gap-6 mb-20">
              {[
                "😮💨 Udah niat posting, tapi bingung mau bikin konten apa — Ide nggak muncul-muncul, akhirnya nggak jadi posting sama sekali.",
                "📉 Feed-nya berantakan, nggak ada yang mau follow — Visual nggak konsisten, caption asal-asalan, engagement nol besar.",
                "⏰ Nggak ada waktu — Sibuk ngurusin bisnis itu sendiri sudah menyita segalanya.",
                "💸 Pernah coba jasa lain — mahal, hasilnya biasa aja — Bayar jutaan, dapat konten yang terasa biasa.",
                "🔇 Udah posting tapi sepi — Nggak ada yang engage, nggak ada yang beli."
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-accent/30 transition-all group"
                >
                  <p className="text-slate-800 leading-relaxed font-bold italic text-lg md:text-2xl group-hover:text-navy transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-12 md:p-20 bg-navy text-white rounded-[48px] shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-2xl md:text-4xl font-display font-bold leading-relaxed mb-6">
                  Setiap hari feed kamu sepi, ada calon pelanggan yang pilih kompetitor kamu yang terlihat lebih profesional. <span className="text-accent underline decoration-white/20 underline-offset-8 italic">Bukan karena mereka lebih baik — tapi karena mereka terlihat lebih baik.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ━━━ SOLUSI SECTION (INTEREST → DESIRE) ━━━ */}
        <section className="py-32 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-8xl font-display font-black text-navy mb-8 leading-[1]">
                Tampil Profesional di Sosmed <br />
                <span className="text-accent">Bukan Lagi Privilege yang Mahal.</span>
              </h2>
              <p className="text-slate-700 text-xl md:text-3xl max-w-4xl mx-auto leading-tight font-bold italic opacity-70">
                Azka handle semuanya — dari riset ide konten, desain visual, penulisan caption, sampai upload tepat waktu. Kamu tinggal fokus jualan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <FeatureCard 
                icon={<TrendingUp className="w-7 h-7 text-white" />}
                title="Strategi, Bukan Asal Posting"
                desc="Setiap konten punya tujuan: awareness, engagement, atau konversi."
              />
              <FeatureCard 
                icon={<Layout className="w-7 h-7 text-white" />}
                title="Visual yang Bikin Orang Berhenti Scroll"
                desc="Desain estetik dan konsisten yang membangun kesan profesional sejak postingan pertama."
              />
              <FeatureCard 
                icon={<Clock className="w-7 h-7 text-white" />}
                title="Zero Ribet untuk Kamu"
                desc="Konsultasi → produksi → upload. Semua kami urus. Kamu nggak perlu buka Canva sama sekali."
              />
            </div>
          </div>
        </section>

        {/* ━━━ PRICING SECTION (DESIRE) ━━━ */}
        <section className="py-32 px-6 bg-white scroll-mt-24" id="pricing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-8xl font-display font-black text-navy mb-8 tracking-tighter italic">Investasi Terkecil, <br className="hidden md:block" /> Dampak Terbesar.</h2>
              <p className="text-slate-600 text-xl md:text-2xl mb-8 font-bold leading-tight">Harga transparan. Tanpa biaya tersembunyi. Tanpa kontrak jebakan.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* PAKET STARTER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border-[3px] border-slate-100 rounded-[56px] p-10 md:p-16 hover:border-slate-200 transition-all flex flex-col group relative overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="mb-12 pb-12 border-b-2 border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 block">MULAI DARI SINI</span>
                  <h3 className="text-3xl font-display font-black text-navy mb-10 tracking-tight">📦 PAKET STARTER</h3>
                  <div className="flex items-center gap-5 mb-6">
                    <span className="text-slate-400 line-through text-3xl font-bold">Rp 750.000</span>
                    <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-600/20">Hemat 53%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-black text-navy">350k</span>
                    <span className="text-slate-400 font-black text-xl">/ bln</span>
                  </div>
                </div>

                <div className="mb-12 p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                  <p className="text-lg leading-relaxed text-slate-700 font-bold italic">
                    "Untuk kamu yang baru mau mulai aktif dan butuh konten yang konsisten — tanpa ribet."
                  </p>
                </div>

                <div className="space-y-6 mb-16 flex-grow">
                  <FeatureItem color="navy">30 Konten Single Image Instagram</FeatureItem>
                  <FeatureItem color="navy">Ide Konten Bulanan</FeatureItem>
                  <FeatureItem color="navy">Caption siap posting</FeatureItem>
                  <FeatureItem color="navy">Upload & Scheduling</FeatureItem>
                  <FeatureItem color="navy">Desain estetik on-brand</FeatureItem>
                </div>

                <div className="space-y-6">
                  <a 
                    href={`https://wa.me/${waNumber}?text=Halo%20Azka,%20saya%20tertarik%20dengan%20Paket%20Starter%20SMM`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-7 bg-navy text-white rounded-[24px] font-black text-2xl hover:scale-[1.03] transition-all shadow-2xl shadow-navy/30"
                  >
                    Ambil Paket Starter →
                  </a>
                </div>
              </motion.div>

              {/* PAKET PRO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-navy border-[3px] border-navy rounded-[56px] p-10 md:p-16 shadow-2xl shadow-navy/40 flex flex-col group relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-10 bg-accent text-navy px-10 py-4 rounded-b-3xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl">
                  ⭐ PALING LARIS
                </div>

                <div className="mb-12 pb-12 border-b-2 border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6 block">LEVEL UP BISNIS KAMU</span>
                  <h3 className="text-3xl font-display font-black text-white mb-10 tracking-tight">🚀 PAKET PRO ⭐</h3>
                  <div className="flex items-center gap-5 mb-6">
                    <span className="text-white/20 line-through text-3xl font-bold">Rp 1.500.000</span>
                    <span className="bg-white text-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">Hemat 67%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-black text-accent">500k</span>
                    <span className="text-white/40 font-black text-xl">/ bln</span>
                  </div>
                </div>

                <div className="mb-12 p-8 bg-white/5 rounded-[32px] border border-white/10">
                  <p className="text-lg leading-relaxed text-white font-bold italic">
                    "Untuk kamu yang serius mau grow dan butuh konten lebih lengkap — foto, story, sampai video."
                  </p>
                </div>

                <div className="space-y-6 mb-16 flex-grow">
                  <FeatureItem color="accent">30 Konten Single Image Instagram</FeatureItem>
                  <FeatureItem color="accent">Ide Konten Fresh Setiap Minggu</FeatureItem>
                  <FeatureItem color="accent">🎁 BONUS Konten Story</FeatureItem>
                  <FeatureItem color="accent">🎁 BONUS Konten Video/Reels/TikTok</FeatureItem>
                  <FeatureItem color="accent">Caption storytelling</FeatureItem>
                  <FeatureItem color="accent">Upload & Scheduling</FeatureItem>
                  <FeatureItem color="accent">Desain visual premium</FeatureItem>
                </div>

                <div className="space-y-6 text-center">
                  <a 
                    href={`https://wa.me/${waNumber}?text=Halo%20Azka,%20saya%20tertarik%20dengan%20Paket%20Pro%20SMM`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-7 bg-accent text-navy rounded-[24px] font-black text-2xl hover:scale-[1.03] transition-all shadow-[0_20px_50px_rgba(252,255,103,0.3)]"
                  >
                    Ambil Paket Pro →
                  </a>
                  <p className="text-xs text-accent uppercase font-black tracking-widest italic animate-pulse">Note: Slot bulan ini hampir penuh — amankan sekarang!</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-20 p-12 bg-slate-50 border-3 border-dashed border-slate-200 rounded-[56px] text-center max-w-3xl mx-auto">
              <p className="text-slate-800 text-xl md:text-3xl font-black leading-tight italic mb-8">
                "Bingung pilih paket mana? Konsultasinya gratis, tanpa tekanan untuk langsung beli."
              </p>
              <a 
                href={`https://wa.me/${waNumber}?text=Halo%20Azka,%20saya%20mau%20tanya-tanya%20dulu%20soal%20SMM`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-navy font-black uppercase tracking-widest text-sm hover:gap-5 transition-all group"
              >
                Tanya Dulu Sebelum Memutuskan <ArrowRight className="w-5 h-5 text-accent group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ━━━ HOW IT WORKS ━━━ */}
        <section className="py-40 bg-navy -mx-6 px-6 rounded-[80px_80px_0_0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-display font-black text-white mb-24 text-center tracking-tighter">Prosesnya Simpel. <br /> <span className="text-accent italic">Hasilnya Nggak Sesimpel Itu.</span></h2>
            <div className="grid md:grid-cols-2 gap-16">
              <StepItem 
                number="01"
                color="accent"
                title="Konsultasi Gratis"
                desc="Ceritakan bisnis kamu. Kami dengerin, analisis, dan kasih rekomendasi jujur."
              />
              <StepItem 
                number="02"
                color="accent"
                title="Riset & Strategi Konten"
                desc="Kami riset kompetitor dan audiens kamu, lalu susun content plan bulanan."
              />
              <StepItem 
                number="03"
                color="accent"
                title="Produksi Konten"
                desc="Desain visual, caption, dan video dikerjakan sesuai tone dan branding bisnis kamu."
              />
              <StepItem 
                number="04"
                color="accent"
                title="Kamu Approve, Kami Upload"
                desc="Setelah kamu setujui, semua konten tayang tepat waktu. Kamu tinggal pantau hasilnya. 📈"
              />
            </div>
          </div>
        </section>

        {/* ━━━ PORTFOLIO SECTION (DESIRE) ━━━ */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-center md:text-left">
              <div className="max-w-2xl mx-auto md:mx-0">
                <p className="text-navy text-xs font-black uppercase tracking-[0.5em] mb-4">Real Results</p>
                <h2 className="text-5xl md:text-8xl font-display font-black text-navy tracking-tighter leading-none mb-6">Ini Hasil Kerja Kami. <br /> <span className="text-accent italic underline decoration-navy/20">Bukan Sekadar Klaim.</span></h2>
                <p className="text-slate-500 text-xl font-bold italic opacity-70">Portofolio nyata. Klien nyata. Lihat sendiri.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: "Isaora", desc: "Muslim Women Fashion", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776918430999.png" },
                { title: "Cafe JSR", desc: "Healthy Food & Beverage", img: "https://ik.imagekit.io/hrctvvb3m/image%20(3).png" },
                { title: "QurbanQ", desc: "Penyedia hewan qurban dan aqiqah", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776657033524.png" },
                { title: "Jalur kerja", desc: "Media platform Job Seeker", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776834613609.png" },
                { title: "Tokoros.id", desc: "Healthy & Beauty Store", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776535578336.png" },
                { title: "Pabrik Konten", desc: "Jasa pembuatan Konten", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776840405993.png" },
                { title: "Akademi Kreasi", desc: "Kursus digital marketing dan desain", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776745621677.png" }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i} 
                  className="group relative overflow-hidden rounded-[32px] bg-slate-100 aspect-square cursor-zoom-in shadow-sm hover:shadow-2xl transition-all"
                  onClick={() => setSelectedImage(item.img)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                     <p className="text-accent text-xs font-black uppercase tracking-widest mb-1">{item.title}</p>
                     <h4 className="text-white text-base font-bold leading-tight">{item.desc}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 p-12 bg-navy text-white rounded-[56px] text-center shadow-2xl relative overflow-hidden">
               <p className="text-xl md:text-3xl font-display font-medium leading-relaxed italic relative z-10">
                 "Setiap karya di atas pernah tayang sebagai konten aktif yang membangun kepercayaan dan engagement nyata. <span className="text-accent font-black">Bisnis kamu bisa jadi yang berikutnya.</span>"
               </p>
            </div>
          </div>
        </section>

        {/* ━━━ FAQ SECTION ━━━ */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-8xl font-display font-black mb-20 text-center text-navy tracking-tighter leading-none">Masih Ada yang Bikin Ragu? <br /><span className="text-accent italic">Ini Jawaban Jujurnya.</span></h2>
            <div className="space-y-6">
              <QAItem 
                q="Harga segini, emang beneran bagus hasilnya?"
                a="Lihat portofolionya — hasil kerja yang berbicara. Kamu juga bisa minta sample desain sebelum memutuskan."
              />
              <QAItem 
                q="Bagaimana kalau hasilnya nggak sesuai ekspektasi?"
                a="Sebelum produksi, kamu approve dulu content plan dan arah visualnya. Ekspektasi selaras dari awal."
              />
              <QAItem 
                q="Saya nggak ngerti sosmed, bisa tetap pakai ini?"
                a="Justru ini untuk kamu. Kami handle dari nol — kamu nggak perlu tau apa-apa tentang algoritma atau desain."
              />
              <QAItem 
                q="Kapan kontennya mulai diproduksi?"
                a="Setelah konsultasi dan pembayaran dikonfirmasi, produksi dimulai dalam 1–3 hari kerja."
              />
              <QAItem 
                q="Kalau mau berhenti gimana?"
                a="Tidak ada kontrak panjang. Paket per bulan — bebas lanjut atau berhenti kapan saja."
              />
            </div>
          </div>
        </section>

        {/* ━━━ FINAL CTA SECTION (ACTION) ━━━ */}
        <section className="py-32 px-6 bg-white overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto bg-navy text-white rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(10,25,47,0.3)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-9xl font-display font-black mb-12 leading-[0.8] tracking-tighter">
                Slot Bulan Ini <br /> <span className="text-accent italic">Hampir Penuh.</span>
              </h2>
              <p className="text-white/50 text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-bold leading-relaxed">
                Kami batasi jumlah klien per bulan agar kualitas setiap konten tetap terjaga. Kalau kamu sudah sampai sejauh ini membaca — kamu tahu bisnis kamu butuh ini. <span className="text-white">Mulai dari Rp 350.000. Tanpa ribet. Tanpa modal besar.</span>
              </p>
              
              <div className="flex flex-col items-center gap-10">
                <div className="w-full max-w-md">
                  <a 
                    href={`https://wa.me/${waNumber}?text=Halo%20Azka,%20saya%20tertarik%20konsultasi%20jasa%20SMM%20sekarang`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1 w-full py-8 bg-accent text-navy rounded-[32px] font-black text-2xl md:text-3xl hover:scale-105 transition-transform shadow-[0_20px_60px_rgba(252,255,103,0.3)]"
                  >
                    💬 Chat WhatsApp Sekarang — Gratis
                  </a>
                  <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] md:text-xs uppercase font-black tracking-[0.4em] text-white/30">
                    <span className="text-white/60">Kami balas dalam hitungan menit</span>
                    <span className="text-white/60">Konsultasi gratis</span>
                    <span className="text-white/60">Tanpa tekanan</span>
                  </div>
                </div>

                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 max-w-sm">
                   <p className="text-accent font-black text-xl md:text-2xl italic flex items-center justify-center gap-3">
                      <Clock className="w-6 h-6 animate-pulse" /> ⏳ Jangan nunggu slot penuh!
                   </p>
                   <p className="text-white/40 text-xs mt-2 uppercase font-black tracking-widest italic leading-relaxed">
                      Yang nunggu, biasanya ketinggalan.
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-24 px-6 text-center bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h4 className="text-4xl font-display font-black tracking-tighter text-navy mb-4 uppercase">AZKA<span className="text-accent">.</span></h4>
            <p className="text-[12px] uppercase tracking-[0.6em] text-slate-400 font-black">Digital Creative & Strategist</p>
          </div>
          <p className="text-slate-500 text-lg max-w-md mx-auto mb-14 leading-relaxed font-bold italic">
            Membantu UMKM dan bisnis kecil bertransformasi lewat visual berkelas dan strategi yang tepat sasaran.
          </p>
          <div className="flex justify-center gap-8 mb-20">
            <a href="mailto:barengazka@gmail.com" className="p-5 bg-white text-navy rounded-3xl hover:bg-accent transition-all shadow-md"><Mail className="w-7 h-7" /></a>
            <a href="https://instagram.com/barengazka.id" className="p-5 bg-white text-navy rounded-3xl hover:bg-accent transition-all shadow-md"><Instagram className="w-7 h-7" /></a>
          </div>
          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-200">© 2025 Azka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-12 bg-navy text-white rounded-[48px] shadow-2xl hover:shadow-[0_40px_80px_rgba(10,25,47,0.4)] transition-all group border border-white/5">
    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-navy transition-colors">
      {icon}
    </div>
    <h4 className="text-2xl font-display font-black mb-6 tracking-tight">{title}</h4>
    <p className="text-lg text-white/50 leading-relaxed font-bold italic">{desc}</p>
  </div>
);

const FeatureItem = ({ children, disabled = false, color = "white" }: { children: React.ReactNode, disabled?: boolean, color?: "white" | "navy" | "accent" }) => (
  <div className={`flex items-start gap-5 ${disabled ? 'opacity-20' : 'opacity-100'}`}>
    <div className={`mt-0.5 p-1 rounded-full ${color === 'white' ? 'bg-navy text-white' : color === 'navy' ? 'bg-navy text-white' : 'bg-accent text-navy'}`}>
      <Check className="w-5 h-5 stroke-[4px]" />
    </div>
    <span className={`text-lg md:text-xl font-bold ${color === 'white' ? 'text-slate-800' : color === 'navy' ? 'text-navy' : 'text-white'} ${disabled ? 'line-through decoration-current font-medium opacity-50' : ''}`}>
      {children}
    </span>
  </div>
);

const StepItem = ({ number, title, desc, color = "white" }: { number: string, title: string, desc: string, color?: string }) => (
  <div className="text-center md:text-left group shrink-0">
    <div className={`text-9xl font-display font-black opacity-10 group-hover:opacity-100 transition-all duration-700 leading-none mb-4 ${color === 'accent' ? 'text-accent' : 'text-white'}`}>
      {number}
    </div>
    <div>
      <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h4>
      <p className="text-lg text-white/40 leading-relaxed font-bold italic">{desc}</p>
    </div>
  </div>
);

const QAItem = ({ q, a }: { q: string, a: string }) => (
  <div className="p-10 md:p-14 bg-white border-3 border-slate-50 rounded-[48px] shadow-sm hover:shadow-2xl transition-all">
    <h4 className="text-xl md:text-3xl font-black text-navy mb-8 flex gap-6 leading-tight">
       <span className="text-accent">●</span> {q}
    </h4>
    <p className="text-slate-600 text-lg md:text-2xl leading-relaxed font-bold italic pl-12 border-l-8 border-slate-50 transition-all group-hover:border-accent">
       "{a}"
    </p>
  </div>
);

export default SMMPage;
