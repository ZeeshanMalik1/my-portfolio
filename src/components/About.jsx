import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, GraduationCap, ArrowUpRight } from 'lucide-react';
import { personalInfo, stats, skills, experience, education } from '../constants/aboutData';

// --- Sub-Components ---

const CircularSkill = ({ label, value, icon: Icon, color }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="group flex flex-col items-center justify-center p-2 md:p-4">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%" cy="50%" r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-gray-300/30"
                    />
                    <motion.circle
                        cx="50%" cy="50%" r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                        size={24}
                        style={{ color: color }}
                        className="transition-transform duration-300 group-hover:scale-125 md:size-[28px]"
                    />
                </div>
            </div>
            <div className="mt-3 text-center">
                <p className="font-['Oswald'] font-bold text-[10px] md:text-xs uppercase tracking-widest text-[#1a1a1a]">{label}</p>
                <p className="font-mono text-[9px] md:text-[10px] text-gray-400 font-bold">{value}%</p>
            </div>
        </div>
    );
};

const ResumeItem = ({ time, title, subtitle, description }) => (
    <div className="group relative pl-6 md:pl-8 pb-10 last:pb-0 border-l border-gray-400/30">
        <div className="absolute -left-[1px] top-0 h-full w-[1px] bg-black scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#E3E3E1] border-2 border-gray-400 group-hover:border-black transition-colors" />
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{time}</span>
        <h3 className="font-['Oswald'] font-bold text-base md:text-lg mt-1 uppercase text-[#1a1a1a] leading-tight">
            {title} <br className="md:hidden" /> 
            <span className="text-gray-400 font-['Oswald'] normal-case font-medium md:ml-1">— {subtitle}</span>
        </h3>
        <p className="text-gray-500 mt-2 text-xs md:text-[13px] font-sans leading-relaxed max-w-sm">{description}</p>
    </div>
);

const CVPreview = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        const handleEsc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-[#E3E3E1] rounded-3xl overflow-hidden shadow-2xl flex flex-col font-['Oswald']"
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-5 md:px-8 py-4 bg-[#1a1a1a] text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></span>
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"></span>
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]"></span>
                                </div>
                                <div className="h-5 w-px bg-white/20 mx-1 hidden md:block" />
                                <a
                                    href="/Zeeshan_Siddique_Resume-1.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-sans text-xs md:text-sm text-gray-300 hover:text-white transition-colors truncate max-w-[160px] md:max-w-none hidden sm:block"
                                >
                                    Zeeshan_Siddique_Resume-1.pdf
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="/Zeeshan_Siddique_Resume-1.pdf"
                                    download
                                    className="group flex items-center gap-2 bg-green-500 text-black px-4 md:px-5 py-2 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-green-400 transition-colors"
                                >
                                    <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                                    Download
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="Close preview"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Preview */}
                        <div className="flex-1 bg-white overflow-auto p-4 md:p-6">
                            <iframe
                                src="/Zeeshan_Siddique_Resume-1.pdf"
                                title="Resume Preview"
                                className="w-full h-full rounded-xl border border-gray-200"
                                allow="fullscreen"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const About = () => {
    const [cvPreviewOpen, setCvPreviewOpen] = useState(false);

    return (
        <section className="bg-[#E3E3E1] w-[98.9vw] text-[#1a1a1a] py-16 md:py-24 relative overflow-x-hidden font-['Oswald'] selection:bg-black selection:text-white">
            
            {/* Background Decorative Text - Adjusted for Mobile */}
            <div className="absolute top-10 md:top-20 text-center w-full overflow-hidden pointer-events-none opacity-[0.04]">
                <h1 className="text-[6rem] sm:text-[10rem] md:text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
                    RESUME
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center border w-fit px-4 py-1.5 md:py-2 text-white rounded-full bg-black gap-3 shadow-lg">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-40"></span>
                                <div className="rounded-full h-2 w-2 bg-white"></div>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">A Bit About Me</span>
                        </div>
                        <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
                            PERSONAL <br /> <span className="text-gray-400">HISTORY</span>
                        </h2>
                    </div>
                    
                    <button
                        onClick={() => setCvPreviewOpen(true)}
                        className="group relative bg-[#1a1a1a] text-white px-8 md:px-10 py-4 md:py-5 rounded-full overflow-hidden transition-all hover:shadow-xl w-full md:w-auto h-14 md:h-16 min-w-[200px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <Eye size={24} />
                        </div>
                        <span className="font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0 block">
                            Preview CV
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">

                    {/* Column 1: Bio & Stats */}
                    <div className="lg:col-span-4 space-y-10 md:space-y-12">
                        <div className="space-y-6">
                            <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400">Biography</h4>
                            <div className="space-y-3 font-sans">
                                {personalInfo.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-gray-400/20 pb-2 text-xs md:text-sm gap-4">
                                        <span className="text-gray-500 shrink-0">{item.label}</span>
                                        <span className={`font-bold uppercase text-right ${item.isGreen ? 'text-green-600' : ''}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Grid - 2x2 on all screens */}
                        <div className="grid grid-cols-2 gap-px bg-gray-400/30 rounded-3xl overflow-hidden border border-gray-400/20 shadow-sm">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-[#E3E3E1] p-6 md:p-8 flex flex-col items-center text-center group hover:bg-white transition-colors duration-500">
                                    <h5 className="font-bold text-3xl md:text-4xl">
                                        {stat.number}<span className="text-green-500 text-lg md:text-xl">{stat.suffix}</span>
                                    </h5>
                                    <p className="text-[8px] md:text-[9px] leading-tight text-gray-500 uppercase mt-2 tracking-widest">{stat.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Skills & Experience */}
                    <div className="lg:col-span-8 space-y-16 md:space-y-20">
                        {/* Circle Skills Grid */}
                        <div className="space-y-8 md:space-y-12">
                            <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 flex items-center gap-4">
                                Tech Stack <div className="h-[1px] flex-grow bg-gray-400/20"></div>
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                                {skills.map((skill, index) => (
                                    <CircularSkill key={index} {...skill} />
                                ))}
                            </div>
                        </div>

                        {/* Experience & Education Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400">Experience</h4>
                                <div className="mt-4">
                                    {experience.map((item, index) => (
                                        <ResumeItem key={index} {...item} />
                                    ))}
                                </div>
                            </div>

                            {/* Academic Background Card */}
                            <div className="bg-[#1a1a1a] text-white rounded-[40px] md:rounded-t-[100px] md:rounded-b-3xl p-8 md:p-10 flex flex-col justify-end min-h-[350px] md:min-h-[400px] group relative overflow-hidden">
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.03] transition-transform duration-700 group-hover:scale-110">
                                    <GraduationCap size={150} className="md:size-[180px]" />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-green-500 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Academic Background</span>
                                    {education.map((item, index) => (
                                        <div key={index} className="mt-4">
                                            <h3 className="font-bold text-xl md:text-2xl uppercase leading-tight tracking-tight">{item.title}</h3>
                                            <p className="font-sans text-gray-400 text-[11px] md:text-xs mt-3 font-light leading-relaxed">{item.description}</p>
                                            <div className="mt-6 flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-green-500">
                                                {item.time} <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Safe area for mobile navigation if needed */}
            <div className="h-10 md:hidden" />

            <CVPreview isOpen={cvPreviewOpen} onClose={() => setCvPreviewOpen(false)} />
        </section>
    );
};

export default About;