import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Plus,
  ArrowRight,
  FileText,
  Target,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WA_NUMBER = "0895611111978";

const FreeCVPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");

  const getWAUrl = (customName?: string) => {
    const message = customName 
      ? `Halo saya ${customName} mau dibuatin CV 😊`
      : `Halo saya mau dibuatin CV 😊`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };

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
      {/* 
        Note on design colors: 
        The CV page uses the 'warm' theme from your reference HTML.
        I will use inline styles or specific color classes to match #c8622a (the warm accent).
      */}
      <style>{`
        :root {
          --cv-accent: #c8622a;
          --cv-accent-light: #f0e0d4;
          --cv-accent-muted: #e8a882;
          --cv-cream: #f5f2ec;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-smm-white/92 backdrop-blur-md border-b border-smm-gray-200 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="flex items-center gap-2 font-medium text-smm-black hover:text-[#c8622a] transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>
        <a 
          href="#form-section" 
          className="bg-[#c8622a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-85 transition-all shadow-sm"
        >
          Buat CV Gratis
        </a>
      </nav>

      <main>
        {/* ① HERO SECTION */}
        <section className="min-h-screen flex items-center pt-32 pb-20 px-6 bg-[var(--cv-cream)] relative overflow-hidden">
          <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.06)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-smm-white border border-smm-gray-200 rounded-full text-xs md:text-sm font-medium text-smm-gray-600 mb-9"
            >
              <span>🎁</span> 100% Gratis · Tanpa Syarat · Tanpa Biaya Apapun
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-8xl leading-[1.08] tracking-tight text-smm-black mb-6"
            >
              Lagi Cari Kerja?<br />
              Biar Saya Bantu<br />
              <em className="italic text-[#c8622a]">Bikin CV-nya.</em>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-smm-gray-600 text-lg md:text-xl max-w-[520px] mx-auto mb-10 leading-relaxed"
            >
              Gratis. Serius. Nggak ada yang perlu kamu siapkan selain cerita singkat tentang dirimu.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <a 
                href="#form-section"
                className="bg-[#c8622a] text-white px-9 md:px-12 py-4 md:py-4.5 rounded-full text-base font-semibold transition-all shadow-[0_4px_24px_rgba(200,98,42,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(200,98,42,0.35)] text-center flex items-center gap-2"
              >
                Mulai Buat CV Sekarang ↓
              </a>
              <a href="#dapat" className="text-smm-gray-600 text-sm font-medium hover:text-[#c8622a] transition-all flex items-center gap-2">
                Lihat apa yang kamu dapat <ArrowRight className="w-4 h-4 rotate-90" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-smm-gray-400"
            >
              <span className="flex items-center gap-1.5"><span className="text-[#c8622a]">✅</span> Gratis tanpa syarat</span>
              <span className="flex items-center gap-1.5"><span className="text-[#c8622a]">✅</span> Bahasa Indonesia & Inggris</span>
              <span className="flex items-center gap-1.5"><span className="text-[#c8622a]">✅</span> Dikerjakan langsung</span>
            </motion.div>
          </div>
        </section>

        {/* ② PAIN POINT SECTION */}
        <section id="pain" className="py-24 px-6 md:px-12 bg-smm-white sm:pt-32">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#c8622a] mb-4">Mungkin kamu relate...</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-4">
                Udah Lamar Sana-sini.<br className="hidden md:block" /> Tapi Belum Ada yang<br className="hidden md:block" /> <em className="italic text-[#c8622a]">Nyangkut?</em>
              </h2>
              <p className="text-lg md:text-xl text-smm-gray-600 mb-14 leading-relaxed">Mungkin bukan karena kamu kurang qualified. Kadang CV-nya yang belum cukup merepresentasikan kamu.</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-smm-gray-200 border border-smm-gray-200 rounded-xl overflow-hidden mb-14"
            >
              {[
                { emoji: "😔", title: "Sudah kirim lamaran ke mana-mana — tapi nggak ada yang balas", desc: "Kamu nunggu notifikasi yang nggak datang-datang. Padahal kamu sudah usaha." },
                { emoji: "📄", title: "CV-mu mungkin belum merepresentasikan kamu yang sebenarnya", desc: "Kamu punya kemampuan — tapi CV-mu belum berhasil menyampaikannya dengan cara yang meyakinkan." },
                { emoji: "😶", title: "Bingung harus nulis apa dan mulai dari mana", desc: "CV yang bagus bukan soal panjang atau pendeknya. Tapi soal kata yang tepat, di tempat yang tepat." },
                { emoji: "🌐", title: "Butuh CV bahasa Inggris tapi nggak pede", desc: "Bukan karena kemampuan Inggrismu buruk. Tapi nulis CV dalam bahasa lain itu memang butuh feel yang berbeda." },
                { emoji: "⏳", title: "Sudah revisi berkali-kali tapi tetap nggak yakin", desc: "Kamu nggak tahu standarnya seperti apa. Jadi nggak tahu sudah benar atau belum." }
              ].map((item, i) => (
                <div key={i} className="bg-smm-white p-8 hover:bg-[var(--cv-cream)] transition-colors">
                  <span className="text-3xl mb-3.5 block">{item.emoji}</span>
                  <h4 className="text-[15px] font-semibold text-smm-black mb-2 leading-snug">{item.title}</h4>
                  <p className="text-sm text-smm-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="border-l-3 border-[#c8622a] p-8 bg-[var(--cv-accent-light)] rounded-r-xl max-w-2xl mx-auto"
            >
              <p className="text-base md:text-lg text-smm-gray-800 leading-relaxed">
                Mencari kerja itu sudah cukup menguras energi. Hal-hal seperti ini — biar saya yang bantu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ③ SOLUSI SECTION */}
        <section id="solusi" className="py-24 px-6 md:px-12 bg-smm-black text-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cv-accent-muted)] mb-4">Makanya saya buka ini</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-white mb-4">
                Saya Buatkan CV-mu.<br /> <em className="italic text-[var(--cv-accent-muted)]">Gratis. Beneran.</em>
              </h2>
              <p className="text-base text-white/55 leading-relaxed mb-6">Tanpa agenda tersembunyi. Tanpa biaya yang muncul belakangan.</p>
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Nama saya <strong>Azka</strong> — dan saya mau bantu buatkan CV-mu secara gratis. Kamu tinggal ceritain sedikit tentang dirimu. Pendidikan, pengalaman, atau pekerjaan apa yang lagi kamu kejar. <strong className="text-white">Saya yang susun jadi CV yang rapi dan tepat sasaran.</strong>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ④ YANG DIDAPAT SECTION */}
        <section id="dapat" className="py-24 px-6 md:px-12 bg-[var(--cv-cream)]">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#c8622a] mb-4">Yang kamu dapat</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-4">Bukan Cuma CV.<br className="hidden md:block" /> Tapi <em className="italic text-[#c8622a]">Bekal Lengkap.</em></h2>
              <p className="text-base md:text-lg text-smm-gray-600 leading-relaxed">Semua ini gratis — tidak ada yang dikurangi untuk versi berbayar.</p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: "📄", title: "CV Siap Pakai", desc: "Dalam Bahasa Indonesia dan Bahasa Inggris — disusun khusus berdasarkan latar belakangmu." },
                { icon: "🎯", title: "Tips Agar Tak Terlewat", desc: "Hal-hal kecil yang sering diabaikan tapi cukup berpengaruh — praktis dan langsung terapkan." },
                { icon: "🗣️", title: "Panduan Dasar Interview", desc: "Biar kamu nggak kagok kalau nanti dipanggil. Persiapan dasar yang sering diabaikan." }
              ].map((item, i) => (
                <div key={i} className="bg-smm-white border border-smm-gray-200 rounded-xl p-9 hover:translate-y-[-4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all">
                  <div className="w-12 h-12 bg-[var(--cv-accent-light)] rounded-xl flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-smm-black mb-2.5 tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-smm-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ⑤ HOW IT WORKS SECTION */}
        <section id="how" className="py-24 px-6 md:px-12 bg-smm-white">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#c8622a] mb-4">Cara kerja</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-14">Caranya Gampang.<br className="hidden md:block" /> <em className="italic text-[#c8622a]">Kamu Nggak Perlu Rumit.</em></h2>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="max-w-[600px] mx-auto relative pl-12 md:pl-16 after:content-[''] after:absolute after:left-[23px] after:top-10 after:bottom-10 after:w-px after:bg-smm-gray-200"
            >
              {[
                { title: "Isi Namamu", desc: "Masukkan namamu pada kolom yang disediakan di atas atau di bawah halaman ini." },
                { title: "Masuk ke WhatsApp", desc: "Klik tombolnya dan kamu akan otomatis diarahkan ke WhatsApp saya dengan pesan template yang sudah siap." },
                { title: "Kirim & Ngobrol", desc: "Kirim pesannya, lalu kita ngobrol santai tentang background pendidikan, pengalaman, dan target kerja kamu." },
                { title: "CV Siap Pakai 📄", desc: "Tunggu 1-3 hari kerja, CV profesionalmu siap dikirim dalam format PDF & Word — langsung ke WhatsApp-mu." }
              ].map((step, i) => (
                <div key={i} className="mb-11 relative group">
                  <div className="absolute -left-12 md:-left-16 top-0 w-12 h-12 rounded-full bg-[var(--cv-cream)] border-2 border-smm-gray-200 flex items-center justify-center text-[15px] font-bold text-[#c8622a] z-10 group-hover:bg-[#c8622a] group-hover:border-[#c8622a] group-hover:text-white transition-colors">
                    {i+1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-semibold text-smm-black mb-1.5">{step.title}</h4>
                    <p className="text-[15px] text-smm-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
              <div className="inline-flex items-center gap-2 bg-[var(--cv-accent-light)] text-[#c8622a] text-xs font-semibold px-4 py-2 rounded-full mt-8">
                 ⏱️ Estimasi 1–3 hari kerja setelah obrolan selesai
              </div>
            </motion.div>
          </div>
        </section>

        {/* 1.5 FORM SECTION (New Location) */}
        <section id="form-section" className="py-24 px-6 md:px-12 bg-smm-white border-y border-smm-gray-200">
          <div className="max-w-xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#c8622a] mb-4">Langkah Pertama</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-smm-black mb-8">
                Tulis Namamu,<br /> <em className="italic text-[#c8622a]">Lalu Kita Ngobrol.</em>
              </h2>
              
              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Ketik namamu di sini..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-5 rounded-full bg-smm-cream border-2 border-smm-gray-100 focus:border-[#c8622a] outline-none transition-all text-center text-lg shadow-sm"
                />
                <button 
                  onClick={() => {
                    if (name.trim()) {
                      window.open(getWAUrl(name), '_blank', 'noopener,noreferrer');
                    }
                  }}
                  disabled={!name.trim()}
                  className={`px-8 py-4.5 rounded-full text-lg font-semibold transition-all text-center ${
                    name.trim() 
                    ? "bg-[#c8622a] text-white shadow-[0_4px_24px_rgba(200,98,42,0.25)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(200,98,42,0.35)] cursor-pointer" 
                    : "bg-smm-gray-200 text-smm-gray-400 cursor-not-allowed"
                  }`}
                >
                  klik di sini
                </button>
                <p className="text-xs text-smm-gray-400 mt-2">Tombol ini akan otomatis membuka WhatsApp dengan pesan khusus.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⑥ FAQ SECTION */}
        <section id="faq" className="py-24 px-6 md:px-12 bg-[var(--cv-cream)]">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center md:text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#c8622a] mb-4">FAQ</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.12] tracking-tight text-smm-black mb-14">Ada yang Mau<br className="hidden md:block" /> <em className="italic text-[#c8622a]">Ditanyakan Dulu?</em></h2>
            </motion.div>

            <motion.div {...fadeInUp} className="max-w-[640px] mx-auto md:mx-0">
              {[
                { q: "Gratis beneran? Nggak ada syaratnya?", a: "Beneran gratis. Tidak ada syarat share ke teman, tidak ada syarat follow akun saya, tidak ada biaya yang muncul di akhir. Murni karena saya mau membantu." },
                { q: "Saya fresh graduate, belum punya pengalaman kerja. Bisa?", a: "Bisa. Justru dari situ kita mulai — saya bantu susun dari nol. Pengalaman bukan satu-satunya yang bisa masuk ke CV." },
                { q: "Saya sudah punya CV tapi mau diperbaiki. Bisa?", a: "Bisa. Kirim CV lamamu saat kita ngobrol — saya bantu evaluasi dan rapikan agar lebih kuat dan tepat sasaran." },
                { q: "Berapa lama prosesnya?", a: "Estimasi 1–3 hari kerja setelah kita selesai ngobrol dan semua informasi sudah saya terima." },
                { q: "CV-nya dikirim dalam format apa?", a: "PDF dan Word — keduanya saya kirimkan agar kamu bisa update sendiri kapan pun dibutuhkan." },
                { q: "Apakah saya perlu kirim CV lama saya?", a: "Kalau ada, sangat membantu. Tapi kalau belum punya CV sama sekali pun tidak masalah — kita mulai dari awal bersama." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-smm-gray-200">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-base font-medium text-smm-black transition-colors group-hover:text-[#c8622a]">{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full border-1.5 border-smm-gray-200 flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#c8622a] border-[#c8622a] text-white rotate-45' : 'text-smm-gray-400'}`}>
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
                        <div className="pb-5 text-[15px] text-smm-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ⑦ FINAL CTA SECTION */}
        <section id="final-cta" className="py-28 px-6 bg-smm-black text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
              {...fadeInUp}
              className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight mb-5"
            >
              Yuk, Mulai.<br /> <em className="italic text-[var(--cv-accent-muted)]">Tinggal Chat.</em>
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              className="text-base md:text-lg text-white/50 max-w-[480px] mx-auto mb-10 leading-relaxed"
            >
              Nggak perlu siapkan apa-apa yang rumit. Tinggal chat — sisanya biar saya yang urus.
            </motion.p>
            <motion.div {...fadeInUp} className="max-w-sm mx-auto">
              <div className="flex flex-col gap-3 mb-6">
                <input 
                  type="text" 
                  placeholder="Ketik namamu..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 rounded-full bg-white/10 border-2 border-white/10 focus:border-[#c8622a] focus:bg-white/20 outline-none transition-all text-center text-white placeholder:text-white/30"
                />
                <button 
                  onClick={() => {
                    if (name.trim()) {
                      window.open(getWAUrl(name), '_blank', 'noopener,noreferrer');
                    }
                  }}
                  disabled={!name.trim()}
                  className={`inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full text-base font-semibold transition-all w-full ${
                    name.trim()
                    ? "bg-smm-white text-smm-black hover:bg-[#c8622a] hover:text-white hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(200,98,42,0.4)] cursor-pointer"
                    : "bg-white/5 text-white/20 cursor-not-allowed"
                  }`}
                >
                  💬 Chat Sekarang — Gratis
                </button>
              </div>
              <div className="mt-5 text-xs text-white/30 tracking-tight">Gratis tanpa syarat · Balas cepat · Dikerjakan dengan serius</div>
              <div className="mt-9 text-sm text-white/25 italic font-light">⏳ Slot terbatas setiap minggu agar setiap CV bisa dikerjakan dengan baik.</div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-smm-black border-t border-white/5 text-center">
        <div className="font-serif text-lg text-white/70 mb-3">Azka · Digital Creative & Strategist</div>
        <div className="flex justify-center gap-5 mb-5 text-[13px] text-white/30 font-medium tracking-tight">
          <Link to="/" className="hover:text-[var(--cv-accent-muted)] transition-colors">barengazka.com</Link>
          <Link to="/smm" className="hover:text-[var(--cv-accent-muted)] transition-colors">Jasa SMM</Link>
          <a href={`https://wa.me/${WA_NUMBER}`} className="hover:text-[var(--cv-accent-muted)] transition-colors">WhatsApp</a>
        </div>
        <p className="text-[13px] text-white/20 italic">Kalau CV ini membantumu dapat pekerjaan yang kamu mau — itu sudah lebih dari cukup buat saya. 🤍</p>
      </footer>
    </div>
  );
};

export default FreeCVPage;
