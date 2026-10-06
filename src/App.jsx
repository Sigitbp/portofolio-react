import React, { useState } from 'react';
import { Globe, ExternalLink, Code2, Database, Layout, ChevronLeft, ChevronRight, Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORT FOTO DARI FOLDER LOKAL
import fotoProfil from './assets/siguttt.jpeg';
import fotoDashboardBTN from './assets/dashboard.png';
import fotoLandingBTN from './assets/landing.png';
import fotoLandingPOS from './assets/landingpage.png';
import fotoAdminPOS from './assets/admin.png';
import fotoKasirPOS from './assets/kasir.png';

// Komponen Slider Interaktif
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64 w-full group/slider overflow-hidden border-b-4 border-black dark:border-green-500 bg-gray-200 dark:bg-zinc-900 cursor-grab active:cursor-grabbing">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover absolute inset-0"
        ></motion.div>
      </AnimatePresence>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide} 
        className="absolute top-1/2 -translate-y-1/2 left-2 text-xl p-2 bg-white text-black border-2 border-black dark:bg-black dark:text-green-500 dark:border-green-500 hover:bg-black hover:text-white dark:hover:bg-green-500 dark:hover:text-black transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide} 
        className="absolute top-1/2 -translate-y-1/2 right-2 text-xl p-2 bg-white text-black border-2 border-black dark:bg-black dark:text-green-500 dark:border-green-500 hover:bg-black hover:text-white dark:hover:bg-green-500 dark:hover:text-black transition-colors z-10"
      >
        <ChevronRight size={24} />
      </motion.button>
      
      <div className="absolute bottom-3 right-0 left-0 flex justify-center gap-2 z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`h-3 cursor-pointer border-2 border-black dark:border-green-500 transition-all duration-300 ${
              currentIndex === slideIndex ? 'w-8 bg-black dark:bg-green-500' : 'w-3 bg-white dark:bg-black'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('id');
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const data = {
    id: {
      nav: ['Beranda', 'Keahlian', 'Proyek', 'Kontak'],
      role: "FULL-STACK WEB DEVELOPER",
      tagline: "> Mengubah proses bisnis kompleks menjadi aplikasi web yang efisien dan skalabel.",
      about: "Lulusan D3 Teknik Informatika dengan spesialisasi pengembangan Full-Stack Web. Memiliki rekam jejak dalam membangun sistem Point of Sales (POS) dan mendigitalisasi alur kerja perbankan.",
      skillsTitle: "C:\\SKILLS\\TECH_STACK.exe",
      projectsTitle: "C:\\PROJECTS\\DIR",
      projects: [
        {
          title: "[01] Sistem Informasi Penjualan & POS",
          desc: "Aplikasi Point of Sales (POS) berbasis SPA untuk manajemen ritel. Dilengkapi manajemen inventori, logika diskon dinamis, dan otorisasi multi-role. Terintegrasi dengan barcode scanner & printer thermal.",
          tech: ["Laravel", "Tailwind CSS", "MySQL", "JsBarcode"],
          images: [fotoLandingPOS, fotoAdminPOS, fotoKasirPOS]
        },
        {
          title: "[02] Restructuring Financing System",
          desc: "Sistem digitalisasi alur kerja perbankan yang menggantikan proses manual berbasis spreadsheet. Meningkatkan akurasi pelacakan data restrukturisasi pembiayaan nasabah (BTN Syariah).",
          tech: ["PHP", "Web Development", "Database System"],
          images: [fotoDashboardBTN, fotoLandingBTN]
        }
      ],
      contactTitle: "C:\\CONTACT\\CONNECT.bat",
      contactDesc: "> Tertarik berkolaborasi? Eksekusi tautan di bawah ini:",
      resumeBtn: "UNDUH_RESUME.pdf",
      resumeLink: "/cv-sigit-id.pdf" 
    },
    en: {
      nav: ['Home', 'Skills', 'Projects', 'Contact'],
      role: "FULL-STACK WEB DEVELOPER",
      tagline: "> Transforming complex business processes into efficient and scalable web applications.",
      about: "Diploma (D3) graduate in Informatics Engineering specializing in Full-Stack Web development. Proven track record in building POS systems and digitizing banking workflows.",
      skillsTitle: "C:\\SKILLS\\TECH_STACK.exe",
      projectsTitle: "C:\\PROJECTS\\DIR",
      projects: [
        {
          title: "[01] Web-Based POS & Sales System",
          desc: "An SPA-based POS application for retail management. Features inventory tracking, dynamic discounting, and multi-role authorization. Integrated with barcode scanners & thermal printers.",
          tech: ["Laravel", "Tailwind CSS", "MySQL", "JsBarcode"],
          images: [fotoLandingPOS, fotoAdminPOS, fotoKasirPOS]
        },
        {
          title: "[02] Restructuring Financing System",
          desc: "A digitized banking workflow system replacing manual spreadsheet processes. Improved the accuracy of tracking customer financing restructuring data (BTN Syariah).",
          tech: ["PHP", "Web Development", "Database System"],
          images: [fotoDashboardBTN, fotoLandingBTN]
        }
      ],
      contactTitle: "C:\\CONTACT\\CONNECT.bat",
      contactDesc: "> Interested in collaborating? Execute the links below:",
      resumeBtn: "DOWNLOAD_RESUME.pdf",
      resumeLink: "/cv-sigit-en.pdf" 
    }
  };

  const t = data[lang];
  const sectionIds = ['home', 'skills', 'projects', 'contact'];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen w-full overflow-x-hidden font-mono bg-white text-black dark:bg-[#050505] dark:text-green-500 transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-green-500 dark:selection:text-black">
        
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-4 border-black dark:border-green-500 z-50"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <motion.a 
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Terminal size={24} className="animate-pulse md:w-7 md:h-7" />
              SIGIT_BP
            </motion.a>
            
            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden md:flex gap-6 font-bold uppercase text-sm">
                {sectionIds.map((item, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -3, color: theme === 'dark' ? '#fff' : '#4b5563' }}
                    href={`#${item}`} 
                    onClick={(e) => scrollToSection(e, item)}
                    className="hover:underline decoration-2 underline-offset-4 cursor-pointer"
                  >
                    {t.nav[i]}
                  </motion.a>
                ))}
              </div>
              
              <div className="flex gap-1 md:gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
                  className="p-2 border-2 border-black dark:border-green-500 hover:bg-black hover:text-white dark:hover:bg-green-500 dark:hover:text-black font-bold text-xs"
                >
                  <Globe size={18} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 border-2 border-black dark:border-green-500 hover:bg-black hover:text-white dark:hover:bg-green-500 dark:hover:text-black"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 border-2 border-black dark:border-green-500 bg-black text-white dark:bg-green-500 dark:text-black"
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t-4 border-black dark:border-green-500 bg-white dark:bg-black overflow-hidden"
              >
                <div className="flex flex-col font-bold uppercase text-center divide-y-4 divide-black dark:divide-green-500">
                  {sectionIds.map((item, i) => (
                    <a 
                      key={i}
                      href={`#${item}`} 
                      onClick={(e) => scrollToSection(e, item)}
                      className="py-4 hover:bg-black hover:text-white dark:hover:bg-green-500 dark:hover:text-black transition-colors cursor-pointer"
                    >
                      {t.nav[i]}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 overflow-hidden scroll-mt-20">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mt-10">
            <motion.div 
              className="flex-1 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}>
                <p className="text-gray-500 dark:text-green-800 font-bold mb-2">C:\Users\Sigit&gt; whoami</p>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 break-words">
                  Sigit Budi Prasetyo
                </h1>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="text-lg md:text-2xl font-bold bg-black text-white dark:bg-green-500 dark:text-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(156,163,175,1)] dark:shadow-[4px_4px_0px_0px_rgba(21,128,61,1)] break-words max-w-full"
                >
                  {t.role}
                </motion.div>
              </motion.div>
              
              <motion.p variants={fadeUp} className="text-base md:text-lg font-bold border-l-4 border-black dark:border-green-500 pl-4">{t.tagline}</motion.p>
              <motion.p variants={fadeUp} className="max-w-xl text-gray-700 dark:text-green-400">{t.about}</motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-center border-2 border-black dark:border-green-500 bg-black text-white dark:bg-green-500 dark:text-black px-6 py-3 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.4)] cursor-pointer"
                >
                  [ {t.nav[3]} ]
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={t.resumeLink} 
                  download 
                  className="justify-center flex items-center gap-2 border-2 border-black dark:border-green-500 bg-white dark:bg-black px-6 py-3 font-bold uppercase hover:bg-gray-100 dark:hover:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
                >
                  <ExternalLink size={18} /> {t.resumeBtn}
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center relative w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-64 h-64 md:w-80 md:h-80 border-4 border-black dark:border-green-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(34,197,94,1)] overflow-hidden bg-white z-10"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={fotoProfil} 
                  alt="Sigit" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              <div className="absolute top-10 -right-4 w-64 h-64 border-4 border-dashed border-gray-300 dark:border-green-900 -z-10 hidden md:block"></div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 border-t-4 border-black dark:border-green-500 relative overflow-hidden scroll-mt-20">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* PENYESUAIAN: Ditambahkan break-all agar string panjang patah jika melewati batas hp */}
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black mb-12 uppercase flex items-center gap-3">
              <Terminal className="text-gray-400 dark:text-green-800 shrink-0" /> 
              <span className="break-all md:break-normal">{t.skillsTitle}</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Layout, title: "Frontend", desc: "React.js, React Native, Tailwind CSS, HTML5, CSS3, JavaScript" },
                { icon: Code2, title: "Backend", desc: "PHP, Laravel, RESTful API, System Architecture" },
                { icon: Database, title: "Database & Tools", desc: "MySQL, PowerDesigner, Git, Postman, Hardware API" }
              ].map((skill, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -10, rotate: idx % 2 === 0 ? 1 : -1 }}
                  className="p-8 border-4 border-black dark:border-green-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] bg-white dark:bg-black group cursor-pointer"
                >
                  <div className="mb-6 border-b-4 border-black dark:border-green-500 pb-4 flex items-center gap-4 text-black dark:text-green-500 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                    <skill.icon size={36} />
                    <h3 className="text-xl md:text-2xl font-bold uppercase">{skill.title}</h3>
                  </div>
                  <p className="font-bold leading-relaxed text-gray-700 dark:text-green-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 border-t-4 border-black dark:border-green-500 bg-gray-50 dark:bg-[#0a0a0a] scroll-mt-20">
          <div className="max-w-6xl mx-auto">
             {/* PENYESUAIAN: Ditambahkan shrink-0 pada icon dan break-all pada text */}
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black mb-12 uppercase flex items-center gap-3"
            >
              <Terminal className="text-gray-400 dark:text-green-800 shrink-0" /> 
              <span className="break-all md:break-normal">{t.projectsTitle}</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t.projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="border-4 border-black dark:border-green-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(34,197,94,1)] bg-white dark:bg-black flex flex-col overflow-hidden group"
                >
                  <div className="border-b-4 border-black dark:border-green-500 bg-black text-white dark:bg-green-500 dark:text-black px-4 py-3 flex justify-between items-center">
                    <span className="font-bold text-sm tracking-widest">{project.title.split(' ')[0]} RUN</span>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.5 }} className="w-4 h-4 rounded-full bg-white border-2 border-black dark:bg-black cursor-pointer"></motion.div>
                      <motion.div whileHover={{ scale: 1.5 }} className="w-4 h-4 rounded-full bg-white border-2 border-black dark:bg-black cursor-pointer"></motion.div>
                      <motion.div whileHover={{ scale: 1.5 }} className="w-4 h-4 rounded-full bg-white border-2 border-black dark:bg-black cursor-pointer"></motion.div>
                    </div>
                  </div>
                  
                  <ImageSlider images={project.images} />
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black mb-4 uppercase group-hover:text-blue-600 dark:group-hover:text-white transition-colors">{project.title.replace(/\[\d+\] /, '')}</h3>
                    <p className="font-semibold mb-6 flex-1 border-l-4 border-black dark:border-green-500 pl-4 text-gray-700 dark:text-green-400">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-dashed border-black dark:border-green-500">
                      {project.tech.map((tech, i) => (
                        <motion.span 
                          whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? '#fff' : '#000', color: theme === 'dark' ? '#000' : '#fff' }}
                          key={i} 
                          className="bg-gray-100 text-black border-2 border-black dark:bg-green-900/30 dark:text-green-500 dark:border-green-500 px-3 py-1 text-xs font-bold uppercase cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* PENYESUAIAN: Ditambahkan pb-32 untuk extra space di bawah saat versi mobile */}
        <section id="contact" className="py-24 pb-32 md:pb-24 px-4 border-t-4 border-black dark:border-green-500 bg-white dark:bg-black scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* PENYESUAIAN: Text diresize dan dibuat break-all */}
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase break-all md:break-normal">{t.contactTitle}</h2>
            <p className="font-bold mb-12 text-base md:text-lg text-gray-600 dark:text-green-400">{t.contactDesc}</p>
            
            {/* PENYESUAIAN: Flex kolom di HP, sejajar di layar besar */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 flex-wrap">
              {[
                { name: "GITHUB.exe", link: "https://github.com/Sigitbp", primary: false },
                { name: "LINKEDIN.exe", link: "https://linkedin.com/in/sigit-budi-prasetyo-54b567351", primary: false },
                { name: "EMAIL_ME.bat", link: "https://mail.google.com/mail/?view=cm&fs=1&to=sigitbudip64@gmail.com", primary: true }
              ].map((btn, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={btn.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto text-center border-4 border-black dark:border-green-500 px-4 md:px-8 py-4 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] ${
                    btn.primary 
                    ? 'bg-black text-white dark:bg-green-500 dark:text-black' 
                    : 'bg-white text-black dark:bg-black dark:text-green-500'
                  }`}
                >
                  {btn.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <footer className="border-t-4 border-black dark:border-green-500 py-8 md:py-6 text-center text-sm font-bold bg-gray-100 dark:bg-black">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 break-words"
          >
            C:\SYSTEM&gt; Copyright (c) {new Date().getFullYear()} Sigit Budi Prasetyo. All rights reserved. <span className="animate-pulse">_</span>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default App;