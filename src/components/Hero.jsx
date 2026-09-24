import { motion, AnimatePresence } from 'framer-motion';
import { X, ContactRound, Briefcase, Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/socials';
import { personalInfo, stats as aboutStats, skills, experience } from '../constants/aboutData';

const Hero = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { value: "2+", label: "Years Exp." },
    { value: "12", label: "Projects" },
    { value: "99%", label: "Satisfaction" },
  ];

  const services = [
    { title: "FULL-STACK DEV", desc: "Building scalable web applications." },
    { title: "UI/UX DESIGN", desc: "Creating intuitive digital experiences." },
    { title: "BRAND STRATEGY", desc: "Visual storytelling for brands." },
    { title: "PROTOTYPING", desc: "Interactive mockups to validate fast." }
  ];

  return (
    // CHANGE: Changed h-screen to min-h-screen and overflow-hidden to overflow-y-auto for mobile scrolling
    <div className="relative min-h-screen w-[98.9vw] bg-[#E3E3E1] text-[#1a1a1a] font-['Inter'] selection:bg-black selection:text-white overflow-y-auto flex flex-col">

      {/* Top Bar - Made responsive padding */}
      <nav className="w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center fixed top-0 left-0 bg-[#E3E3E1]/80 backdrop-blur-md">
        <div className="flex items-center gap-2 border py-1 bg-[#1a1a1a] px-3 md:px-4 rounded-full">
          <div className="relative flex h-3 w-3 md:h-4 md:w-4">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <div className="relative rounded-full h-3 w-3 md:h-4 md:w-4 bg-green-500"></div>
          </div>
          <span className="font-['Oswald'] text-sm md:text-lg mb-0.5 text-white font-semibold tracking-wider uppercase">Open to Work</span>
        </div>

        <button
          onClick={() => setShowAboutModal(true)}
          className="group relative bg-[#1a1a1a] text-white px-4 md:px-6 py-2 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-black min-w-[100px] md:min-w-32 h-9 md:h-10 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <Briefcase size={20} />
          </div>
          <span className="font-medium text-xs md:text-sm tracking-wide transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0">
            About Me
          </span>
        </button>
      </nav>

      <main className="grow flex flex-col justify-center px-6 md:px-12 pt-24 md:pt-32 pb-10 max-w-7xl mx-auto w-full">
        {/* Main Grid - Reordered for Mobile (Text -> Image -> Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8 items-center">

          {/* Left Column (Text) - Order 1 on Mobile */}
          <motion.div className="order-1 md:col-span-4 space-y-4 lg:space-y-6 text-center md:text-left" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="text-lg md:text-xl font-serif text-gray-600 italic">Hey. I'm Zeeshan,</motion.h3>
            <motion.div variants={fadeInUp} className="leading-tight md:leading-none">
              <h1 className="font-['Oswald'] font-bold text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a]">A WEB<br className="hidden md:block" /> ENGINEER</h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-sm mx-auto md:mx-0 text-base lg:text-lg leading-snug">
              Transforming complex ideas into seamless digital realities with clean, scalable code.
            </motion.p>

            <motion.button
              onClick={() => setShowContactModal(true)}
              variants={fadeInUp}
              className="group relative mx-auto md:mx-0 flex items-center justify-center bg-[#1a1a1a] text-white rounded-full transition-all duration-500 hover:bg-black min-w-44 h-14 overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ContactRound size={24} />
              </div>
              <span className="font-bold tracking-widest transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0">
                CONTACT ME
              </span>
            </motion.button>
          </motion.div>

          {/* Center Column (Image) - Order 2 on Mobile */}
          <motion.div
            className="order-2 md:col-span-4 h-[40vh] md:h-[55vh] lg:h-[65vh] flex items-end justify-center relative z-10 my-8 md:my-0"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 w-full h-full bg-[#D1D1CD] rounded-t-[80px] md:rounded-t-[100px] rounded-b-[120px] md:rounded-b-[200px] z-0 shadow-xl"></div>
            <div className="absolute top-0 w-full h-full flex items-end justify-center overflow-hidden rounded-b-[120px] md:rounded-b-[200px] z-10">
              <img src="/hero.png" alt="Portrait" className="w-auto h-[110%] object-cover object-bottom" />
            </div>
          </motion.div>

          {/* Right Column (Stats) - Order 3 on Mobile */}
          <motion.div className="order-3 md:col-span-4 flex flex-row md:flex-col justify-around md:justify-center md:items-end md:gap-10 text-center md:text-right bg-white/30 md:bg-transparent p-6 md:p-0 rounded-3xl" initial="hidden" animate="visible" variants={staggerContainer}>
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h2 className="font-['Oswald'] font-bold text-3xl lg:text-5xl text-[#1a1a1a] leading-none">{stat.value}</h2>
                <p className="font-serif italic text-gray-500 text-sm lg:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer (Services) - Scrollable Row on Mobile */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-12 pt-6 border-t border-gray-400/30" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
        >
          {services.map((service, index) => (
            <div key={index} className="space-y-1">
              <h4 className="font-['Oswald'] font-bold text-xs md:text-sm lg:text-base uppercase tracking-wider">{service.title}</h4>
              <p className="text-gray-500 text-[10px] md:text-xs lg:text-sm leading-tight max-w-45 line-clamp-2 md:line-clamp-none">
                {service.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {/* About Modal - Fixed for Mobile Scroll */}
        {showAboutModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-2 md:p-4" onClick={() => setShowAboutModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              
              <button onClick={() => setShowAboutModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-white/10 hover:bg-red-500 rounded-full transition-colors">
                <X size={20} className="text-white" />
              </button>

              {/* Scrollable Container inside Modal */}
              <div className="h-full overflow-y-auto p-6 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  {/* Bio */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-['Oswald'] font-bold text-white uppercase mb-4">About <span className="text-gray-500">Me</span></h2>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        I am a passionate Full Stack Developer with a knack for identifying problems and solving them through code.
                        I specialize in building clean, modern, and responsive web applications.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {personalInfo.slice(0, 5).map((item, index) => (
                        <div key={index} className="flex justify-between border-b border-white/10 pb-2 text-xs md:text-sm">
                          <span className="text-gray-500">{item.label}</span>
                          <span className={`font-bold uppercase ${item.isGreen ? 'text-green-500' : 'text-white'}`}>{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Latest Experience */}
                    <div className="pt-4">
                      <h3 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Latest Experience</h3>
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                        <span className="text-green-500 text-[10px] font-bold tracking-widest uppercase mb-1 block">{experience[0].time}</span>
                        <h4 className="text-lg md:text-xl font-['Oswald'] text-white font-bold uppercase">{experience[0].title}</h4>
                        <p className="text-gray-400 text-xs md:text-sm mt-2">{experience[0].description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Stats & Skills */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {aboutStats.map((stat, index) => (
                        <div key={index} className="bg-white/5 p-4 md:p-6 rounded-2xl text-center border border-white/5">
                          <h3 className="text-2xl md:text-3xl font-bold text-white font-['Oswald']">{stat.number}<span className="text-green-500 text-lg">{stat.suffix}</span></h3>
                          <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1">{stat.text}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Core Technologies</h3>
                      <div className="grid grid-cols-4 gap-2 md:gap-4">
                        {skills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group" title={skill.label}>
                            <skill.icon size={24} style={{ color: skill.color }} className="filter grayscale group-hover:grayscale-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Contact Modal - Full Height on small screens */}
        {showContactModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            />

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#111] rounded-[2.5rem] border border-white/10 p-1 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#111] rounded-[2.3rem] p-6 md:p-8">
                <button onClick={() => setShowContactModal(false)} className="absolute top-6 right-6 p-2 text-white/40 hover:text-white bg-white/5 rounded-full">
                  <X size={18} />
                </button>

                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full border-2 border-green-500/30 p-1 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#222]">
                      <img src="/hero.png" alt="Zeeshan" className="w-full h-full object-cover object-top scale-125 translate-y-2" />
                    </div>
                  </div>
                  <h2 className="font-['Oswald'] text-2xl text-white tracking-tight">LET'S CONNECT</h2>
                  <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest">Typically responds within 2 hours</p>
                </div>

                <div className="space-y-3">
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-green-500/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                        <Mail size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Email Me</p>
                        <p className="text-xs text-gray-200 truncate max-w-[150px]">{CONTACT_INFO.EMAIL}</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-gray-600" />
                  </motion.a>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <FaWhatsapp size={20} />, url: SOCIAL_LINKS.WHATSAPP, color: "text-green-500 bg-green-500/10" },
                      { icon: <FaLinkedin size={20} />, url: SOCIAL_LINKS.LINKEDIN, color: "text-blue-500 bg-blue-500/10" },
                      { icon: <FaGithub size={20} />, url: SOCIAL_LINKS.GITHUB, color: "text-white bg-white/10" }
                    ].map((social, i) => (
                      <a key={i} href={social.url} target="_blank" className={`flex items-center justify-center p-4 rounded-2xl transition-all ${social.color}`}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;