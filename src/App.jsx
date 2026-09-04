import React, { useState } from 'react';
import { Globe, ExternalLink, Code2, Database, Layout, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// IMPORT FOTO DARI FOLDER LOKAL
import fotoProfil from './assets/siguttt.jpeg';
import fotoDashboardBTN from './assets/dashboard.png';
import fotoLandingBTN from './assets/landing.png';
import fotoLandingPOS from './assets/landingpage.png';
import fotoAdminPOS from './assets/admin.png';
import fotoKasirPOS from './assets/kasir.png';

// Komponen Slider Kustom
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-56 w-full group/slider overflow-hidden bg-gray-200">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover transition-all duration-500"
      ></div>
      
      <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-1.5 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition opacity-0 group-hover/slider:opacity-100">
        <ChevronLeft size={20} />
      </button>
      
      <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-1.5 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition opacity-0 group-hover/slider:opacity-100">
        <ChevronRight size={20} />
      </button>
      
      <div className="absolute bottom-3 right-0 left-0 flex justify-center gap-1.5">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === slideIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/70 hover:bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('id');

  const data = {
    id: {
      nav: ['Beranda', 'Keahlian', 'Proyek', 'Kontak'],
      role: "Full-Stack Web Developer",
      tagline: "Mengubah proses bisnis kompleks menjadi aplikasi web yang efisien dan skalabel.",
      about: "Lulusan D3 Teknik Informatika yang bersemangat dengan spesialisasi pengembangan Full-Stack Web. Memiliki rekam jejak dalam membangun sistem Point of Sales (POS) dan mendigitalisasi alur kerja perbankan.",
      skillsTitle: "Tumpukan Teknologi",
      projectsTitle: "Proyek Utama",
      projects: [
        {
          title: "Sistem Informasi Penjualan & POS (Toko Sembilan)",
          desc: "Aplikasi Point of Sales (POS) berbasis SPA untuk manajemen ritel. Dilengkapi manajemen inventori, logika diskon dinamis, perlindungan data, dan otorisasi multi-role. Terintegrasi langsung dengan barcode scanner dan printer thermal.",
          tech: ["Laravel", "Tailwind CSS", "MySQL", "JsBarcode"],
          images: [fotoLandingPOS, fotoAdminPOS, fotoKasirPOS]
        },
        {
          title: "Restructuring Financing System (BTN Syariah)",
          desc: "Sistem digitalisasi alur kerja perbankan yang menggantikan proses manual berbasis spreadsheet. Meningkatkan akurasi dan efisiensi pelacakan data restrukturisasi pembiayaan nasabah secara signifikan.",
          tech: ["PHP", "Web Development", "Database System"],
          images: [fotoDashboardBTN, fotoLandingBTN]
        }
      ],
      contactTitle: "Mari Berkolaborasi",
      contactDesc: "Tertarik untuk berkolaborasi atau memiliki peluang pengerjaan proyek? Jangan ragu untuk menghubungi saya melalui tautan di bawah.",
      resumeBtn: "Unduh Resume (PDF)",
      // Tautan ke PDF Indonesia
      resumeLink: "/cv-sigit-id.pdf" 
    },
    en: {
      nav: ['Home', 'Skills', 'Projects', 'Contact'],
      role: "Full-Stack Web Developer",
      tagline: "Transforming complex business processes into efficient and scalable web applications.",
      about: "A highly motivated Diploma (D3) graduate in Informatics Engineering specializing in Full-Stack Web development. Proven track record in building Point of Sales (POS) systems and digitizing banking workflows.",
      skillsTitle: "Tech Stack",
      projectsTitle: "Key Projects",
      projects: [
        {
          title: "Web-Based POS & Sales System (Toko Sembilan)",
          desc: "An SPA-based Point of Sales application tailored for retail management. Features inventory tracking, dynamic discounting logic, data protection, and multi-role authorization. Directly integrated with barcode scanners and thermal printers.",
          tech: ["Laravel", "Tailwind CSS", "MySQL", "JsBarcode"],
          images: [fotoLandingPOS, fotoAdminPOS, fotoKasirPOS]
        },
        {
          title: "Restructuring Financing System (BTN Syariah)",
          desc: "A digitized banking workflow system replacing manual spreadsheet-based processes. Significantly improved the accuracy and efficiency of tracking customer financing restructuring data.",
          tech: ["PHP", "Web Development", "Database System"],
          images: [fotoDashboardBTN, fotoLandingBTN]
        }
      ],
      contactTitle: "Let's Connect",
      contactDesc: "Interested in collaborating or have a project opportunity? Feel free to reach out to me via the links below.",
      resumeBtn: "Download Resume (PDF)",
      // Tautan ke PDF Inggris
      resumeLink: "/cv-sigit-en.pdf" 
    }
  };

  const t = data[lang];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-800">Sigit<span className="text-yellow-500">.</span></div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#home" className="hover:text-blue-600 transition">{t.nav[0]}</a>
              <a href="#skills" className="hover:text-blue-600 transition">{t.nav[1]}</a>
              <a href="#projects" className="hover:text-blue-600 transition">{t.nav[2]}</a>
            </div>
            <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-blue-100 transition"
            >
              <Globe size={14} /> {lang === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Sigit Budi Prasetyo <br/>
              <span className="text-blue-700">{t.role}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">{t.tagline}</p>
            <p className="text-gray-500 max-w-xl leading-relaxed">{t.about}</p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-200">
                {t.contactTitle}
              </a>
              {/* TOMBOL UNDUH RESUME YANG SUDAH DIPERBARUI */}
              <a 
                href={t.resumeLink} 
                download 
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                <ExternalLink size={18} /> {t.resumeBtn}
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
              <img src={fotoProfil} alt="Sigit" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.skillsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Layout /></div>
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p className="text-gray-600">React.js, React Native, Tailwind CSS, HTML5, CSS3, JavaScript</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4"><Code2 /></div>
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p className="text-gray-600">PHP, Laravel, RESTful API, System Architecture</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4"><Database /></div>
              <h3 className="text-xl font-bold mb-3">Tools & Database</h3>
              <p className="text-gray-600">MySQL, SAP PowerDesigner, Git, Postman, Hardware API</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <ImageSlider images={project.images} />
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">{t.contactDesc}</p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a href="https://github.com/Sigitbp" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition hover:-translate-y-1 font-semibold text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sigit-budi-prasetyo-54b567351" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition hover:-translate-y-1 font-semibold text-sm">
              LinkedIn
            </a>
           <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sigitbudip64@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition hover:-translate-y-1 font-semibold text-sm"
        >
          Email
        </a>
          </div>
        </motion.div>
      </section>

      <footer className="bg-blue-950 py-6 text-center text-sm text-blue-300">
        &copy; {new Date().getFullYear()} Sigit Budi Prasetyo. Built with React, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
};

export default App;