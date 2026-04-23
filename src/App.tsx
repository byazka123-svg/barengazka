import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ChevronDown, 
  Zap, 
  Target, 
  ArrowRight,
  X
} from 'lucide-react';

// --- Components ---

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
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
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

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase mb-3"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold tracking-tight"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      className="h-0.5 bg-accent/40 mt-6"
    />
  </div>
);

const Card = ({ title, year, category, icon: Icon }: { title: string, year: string, category: string, icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-deep-navy border border-white/10 p-5 rounded-2xl transition-all hover:border-accent/40 group relative overflow-hidden"
  >
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-8 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
        <div>
          <p className="text-[13px] font-medium leading-tight group-hover:text-accent transition-colors">{title}</p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{year}</p>
        </div>
      </div>
      <div className="p-2 bg-white/5 rounded-lg">
        <Icon className="w-4 h-4 text-accent/60" />
      </div>
    </div>
    <p className="text-accent/50 text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">{category}</p>
  </motion.div>
);

const Badge = ({ children }: { children: string, key?: React.Key }) => (
  <motion.span 
    whileHover={{ y: -2 }}
    className="px-3 py-1.5 bg-deep-navy border border-white/5 rounded-lg text-[11px] font-medium text-white/70 hover:text-white hover:border-accent/30 transition-all cursor-default"
  >
    {children}
  </motion.span>
);

const ToolIcon = ({ name, colorClass = "group-hover:border-accent/30 group-hover:bg-accent/5 hover:text-accent" }: { name: string, colorClass?: string }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className={`w-full aspect-square bg-deep-navy border border-white/5 rounded-xl flex items-center justify-center transition-all ${colorClass}`}>
      <span className="text-[9px] font-bold text-center px-1 uppercase tracking-tighter text-white/50 group-hover:text-inherit">{name}</span>
    </div>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg px-6 md:px-12' : 'bg-transparent py-8 px-6 md:px-12'}`}>
        <div className="flex justify-between items-baseline">
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-2xl font-display font-bold tracking-tighter">
              AZKA<span className="text-accent">.</span>
            </a>
            <span className="hidden lg:block text-[10px] uppercase tracking-[0.3em] text-white/30 border-l border-white/10 pl-6 py-1">creative & strategist</span>
          </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['About', 'Portfolio', 'Skills', 'Tools', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-white/40 hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#060a16] selection:bg-accent selection:text-navy">
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
      <div className="max-w-6xl mx-auto min-h-screen border-x border-white/5 relative shadow-2xl">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section id="hero" className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-bg-hero">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 pointer-events-none skew-x-12 translate-x-1/2" />
          
          <div className="relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available for Projects & works
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-12 md:mb-8 leading-[0.9] max-w-4xl flex flex-col md:block">
                <span className="text-left md:inline">Think. </span>
                <span className="text-center md:inline">Create.</span>
                <br className="hidden md:block" />
                <span className="text-right md:inline md:text-left text-accent italic">Deliver.</span>
              </h1>
              
              <div className="flex items-center gap-6 mb-12 max-w-2xl">
                <img 
                  src="https://ik.imagekit.io/hrctvvb3m/JALUR%20KERJA%20(5).png" 
                  alt="Azka" 
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-accent/20 shrink-0 shadow-xl shadow-accent/5 backdrop-blur-sm"
                />
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                  Halo, saya <span className="text-white font-medium italic">Azka</span> — profesional di bidang Digital Marketing, Creative Strategy, dan Project Management.
                </p>
              </div>

              <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-5 items-start md:items-center">
                <div className="flex items-center gap-6 px-4 md:order-2">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-2xl font-bold font-display leading-none">5+</span>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Years Exp.</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-2xl font-bold font-display leading-none">Jakarta</span>
                    <span className="text-[10px] uppercase text-white/40 tracking-wider">Location</span>
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="w-full md:w-auto px-10 py-5 bg-accent text-navy font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all group md:order-1"
                >
                  Kontak Saya
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-32 px-6 md:px-12 bg-bg-about">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <SectionHeading subtitle="Expertise">Professional Background</SectionHeading>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-32 h-32 text-accent" />
                </div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
                  "Spesialis Digital Marketing dan Manajer Proyek dengan pengalaman lebih dari 5 tahun membantu UMKM dan industri kreatif untuk tumbuh secara berkelanjutan."
                </p>
                <div className="mt-10 grid sm:grid-cols-2 gap-8 text-sm text-white/60 leading-relaxed">
                  <p>
                    Terbukti mampu meningkatkan omzet hingga <span className="text-accent font-bold">35%</span> melalui kampanye yang tepat sasaran, serta mendorong closing rate penjualan online mencapai <span className="text-accent font-bold">65%</span> lewat implementasi sistem layanan pelanggan berbasis AI.
                  </p>
                  <p>
                    Berpengalaman memimpin tim konten, membangun strategi brand, mengelola media sosial untuk beberapa brand sekaligus, serta mengoperasikan tools teknis seperti <span className="text-white">n8n, VPS, dan Meta Ads Manager.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- PORTFOLIO SECTION --- */}
        <section id="portfolio" className="py-24 px-6 md:px-12 bg-bg-portfolio">
          <SectionHeading subtitle="Featured Work">Portofolio Proyek</SectionHeading>
          
          <div className="space-y-20">
            {/* Public Speaking */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white/40 uppercase tracking-widest text-sm">
                <MessageCircle className="w-4 h-4 text-accent" /> Public Speaker
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    tag: "Webinar Session",
                    title: "Digitalpreneur Series: 'Ngerti Bikin Konten Biar Bisnis Makin Keren'",
                    img: "https://ik.imagekit.io/hrctvvb3m/Pengen%20Promosi%20Kamu%20Disukai%20Calon%20PembeliSobat%20entrepreneur%20muda%20di%20era%20digital%20ini%20salah%20satu%20.webp"
                  },
                  {
                    tag: "Training",
                    title: "Menulis iklan media sosial menggunakan copywriting",
                    img: "https://ik.imagekit.io/hrctvvb3m/Screenshot%202026-04-23%20at%2011.15.34.png"
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3] cursor-zoom-in"
                    onClick={() => setSelectedImage(item.img)}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1">{item.tag}</p>
                      <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Management */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white/40 uppercase tracking-widest text-sm">
                <Target className="w-4 h-4 text-accent" /> Social Media Management
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  { title: "Isaora", desc: "Muslim Women Fashion", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776918430999.png" },
                  { title: "Cafe JSR", desc: "Healthy Food & Beverage", img: "https://ik.imagekit.io/hrctvvb3m/image%20(3).png" },
                  { title: "QurbanQ", desc: "Penyedia hewan qurban dan aqiqah", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776657033524.png" },
                  { title: "Jalur kerja", desc: "Media platform Job Seeker", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776834613609.png" },
                  { title: "Tokoros.id", desc: "Healthy & Beauty Store", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776535578336.png" },
                  { title: "Pabrik Konten", desc: "Jasa pembuatan Konten", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776840405993.png" },
                  { title: "Akademi Kreasi", desc: "Kursus digital marketing dan desain", img: "https://ik.imagekit.io/hrctvvb3m/feed-planner-1776745621677.png" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3] cursor-zoom-in"
                    onClick={() => setSelectedImage(item.img)}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1">{item.title}</p>
                      <h4 className="text-lg font-bold leading-tight">{item.desc}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white/40 uppercase tracking-widest text-sm">
                <Zap className="w-4 h-4 text-accent" /> Other
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1">Automation</p>
                    <h4 className="text-lg font-bold">Implementasi Sistem CS AI</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* --- CERTIFICATION & TRAINING SECTION --- */}
      <section id="experience" className="py-24 px-6 md:px-12 bg-bg-experience">
        <SectionHeading subtitle="Recognition">Bukti Kompetensi & Sertifikasi</SectionHeading>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-accent" /> Sertifikasi Resmi (BNSP)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Digital Marketing Specialist" year="2021" category="BNSP" icon={Award} />
            <Card title="Junior Graphic Designer" year="2022" category="BNSP" icon={Award} />
            <Card title="Pendamping UMKM" year="2021" category="BNSP" icon={Award} />
            <Card title="Fotografer Tingkat III" year="2020" category="BNSP" icon={Award} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-accent" /> Pelatihan & Bootcamp
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Public Speaking & Presentation Offline Bandung" year="Ganesha Public Speaking" category="Soft Skills" icon={BookOpen} />
            <Card title="Foodizz Masterclass Offline #15 Bandung" year="2025" category="Scale-Up Bisnis F&B" icon={BookOpen} />
            <Card title="UI/UX Design Bootcamp" year="2022" category="Product Design" icon={BookOpen} />
            <Card title="Copywriting Bootcamp" year="2021" category="Marketing" icon={BookOpen} />
            <Card title="Facebook Ads & Metrics" year="2021" category="Advertising" icon={BookOpen} />
          </div>
        </div>
      </section>

      {/* --- SKILLS & TOOLS SECTION --- */}
      <section id="skills" className="py-24 px-6 md:px-12 bg-bg-skills">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Capabilities">Keahlian & Ekosistem</SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-accent w-6 h-6" /> Keahlian Teknis
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Strategi Digital Marketing", desc: "Perencanaan kampanye komprehensif untuk pertumbuhan brand." },
                  { title: "Manajemen & Pertumbuhan Media Sosial", desc: "Optimasi konten dan engagement lintas platform." },
                  { title: "Produksi Konten (Desain, Foto & Video)", desc: "Visual storytelling berkualitas tinggi untuk brand identity." },
                  { title: "Facebook & Instagram Ads", desc: "Manajemen Meta Ads Manager untuk konversi maksimal." },
                  { title: "Copywriting & Brand Voice", desc: "Penulisan persuasif yang membangun karakter brand." },
                  { title: "Otomasi AI & Chatbot", desc: "Efisiensi operasional dengan n8n dan Claude AI." },
                  { title: "Analisis Data & Pelaporan", desc: "Pengambilan keputusan berbasis data menggunakan Spreadsheet." },
                  { title: "UI/UX Design Dasar", desc: "Perancangan antarmuka pengguna yang intuitif dengan Figma." }
                ].map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent/30 transition-colors group"
                  >
                    <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors">{skill.title}</h4>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Interpersonal */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="text-accent w-6 h-6" /> Tools & Interpersonal
                </h3>
                
                <div className="grid gap-8">
                  {/* Tool Groups */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Creative Stack</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Canva</Badge>
                        <Badge>Photoshop</Badge>
                        <Badge>Illustrator</Badge>
                        <Badge>CapCut</Badge>
                        <Badge>Adobe Premiere</Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Technical & Admin</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>n8n</Badge>
                        <Badge>Claude AI</Badge>
                        <Badge>Notion</Badge>
                        <Badge>CRM Tools</Badge>
                        <Badge>VPS & Infrastruktur</Badge>
                        <Badge>Google Workspace</Badge>
                        <Badge>Meta Ads Manager</Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Leadership & Growth</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Public Speaking & Mentoring</Badge>
                        <Badge>Kepemimpinan Tim</Badge>
                        <Badge>Manajemen Proyek</Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Languages</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl">
                          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Bahasa Indonesia</p>
                          <p className="text-lg font-display font-medium">Native</p>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Bahasa Inggris</p>
                          <p className="text-lg font-display font-medium">Professional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 bg-bg-contact">
        <div className="max-w-7xl mx-auto pt-16 grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Let's Connect">Let's Work Together</SectionHeading>
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Silakan hubungi saya untuk diskusi lebih lanjut mengenai kolaborasi potensial atau pertanyaan lainnya.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="text-[10px] uppercase font-bold text-accent tracking-[0.3em] w-20">Email</div>
                <a href="mailto:barengazka@gmail.com" className="text-xl font-medium border-b border-transparent hover:border-accent hover:text-accent transition-all">barengazka@gmail.com</a>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="text-[10px] uppercase font-bold text-accent tracking-[0.3em] w-20 text-xs">Instagram & TikTok</div>
                <a href="https://instagram.com/barengazka.id" className="text-xl font-medium border-b border-transparent hover:border-accent hover:text-accent transition-all">@barengazka.id</a>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center lg:justify-end">
            <motion.a 
              href="mailto:barengazka@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-navy px-12 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl shadow-accent/20"
            >
              Kontak Saya
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 md:px-12 bg-bg-contact border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-2xl font-display font-bold tracking-tighter">AZKA<span className="text-accent">.</span></p>
            <p className="text-white/20 text-xs uppercase tracking-widest leading-none">creative & strategist</p>
          </div>
          <p className="text-white/40 text-xs font-light">
            © {new Date().getFullYear()} Azka.
          </p>
          <div className="flex items-center gap-6 opacity-30">
            <Zap className="w-4 h-4 text-accent fill-accent" />
            <Target className="w-4 h-4 text-accent" />
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
