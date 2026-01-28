import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";
import { SOCIAL_LINKS } from '../constants/socials';

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: SOCIAL_LINKS.GITHUB, label: 'Codebase', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: FaLinkedin, url: SOCIAL_LINKS.LINKEDIN, label: 'Professional', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: FaInstagram, url: SOCIAL_LINKS.INSTAGRAM, label: 'Stories', color: 'hover:text-pink-500' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: SOCIAL_LINKS.WHATSAPP, label: 'Quick Chat', color: 'hover:text-green-500' },
    { name: 'Facebook', icon: FaFacebook, url: SOCIAL_LINKS.FACEBOOK, label: 'Community', color: 'hover:text-blue-600' },
    { name: 'Youtube', icon: FaYoutube, url: SOCIAL_LINKS.YOUTUBE, label: 'Videos', color: 'hover:text-red-600' },
];

const Links = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#E3E3E1] text-[#1a1a1a] w-[98.9vw] py-16 md:py-24 min-h-screen relative overflow-x-hidden font-['Oswald'] selection:bg-black selection:text-white">

            {/* Faded Background Decorative Text */}
            <div className="absolute top-10 md:top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <h1 className="text-[5rem] sm:text-[10rem] md:text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
                    SOCIAL NETWORK CONNECT
                </h1>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center border w-fit px-4 py-1.5 text-white rounded-full bg-black gap-3 shadow-lg">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <div className="rounded-full h-2 w-2 bg-green-500"></div>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Live Status: Online</span>
                        </div>
                        <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
                            STAY <br /> <span className="text-gray-400">CONNECTED</span>
                        </h2>
                    </div>

                    {/* System Info - Now visible on mobile in a condensed way */}
                    <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 w-full md:w-auto justify-between md:justify-end border-t border-gray-300 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-2"><Wifi size={14} className="text-green-600" /> <span className="hidden sm:inline">100% Signal</span></div>
                        <div className="flex items-center gap-2"><Battery size={14} className="text-green-600" /> <span className="hidden sm:inline">Charged</span></div>
                        <div className="bg-white px-4 py-2 rounded-full text-black shadow-sm font-mono tracking-normal">
                            {currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Center Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative order-1 lg:order-1 flex justify-center"
                    >
                        {/* Decorative glow behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-white/60 rounded-full blur-3xl -z-10"></div>
                        <div className="relative group">
                            <img
                                src="/link.png"
                                alt="Zeeshan"
                                className="w-full max-w-[280px] sm:max-w-md rounded-full  group-hover:grayscale-0 transition-all duration-700 pointer-events-none border-4 border-white shadow-2xl"
                            />
                            {/* Decorative badge on image */}
                            {/* <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-xl md:hidden">
                                <ArrowUpRight size={20} />
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Social Grid */}
                    <div className="lg:col-span-7 order-2 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-white/50 backdrop-blur-md border border-white p-5 md:p-6 rounded-[2rem] flex items-center justify-between hover:bg-black transition-all duration-500 shadow-sm hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className={`p-3 md:p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-500 ${link.color}`}>
                                        <link.icon size={22} className="md:size-[24px]" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-green-500 transition-colors">{link.label}</p>
                                        <h3 className="text-lg md:text-xl font-bold uppercase group-hover:text-white transition-colors truncate">{link.name}</h3>
                                    </div>
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-green-500 group-hover:rotate-45 transition-all duration-500 shrink-0">
                                    <ArrowUpRight size={16} className="group-hover:text-green-500 md:size-[18px]" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Footer Sync */}
                <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-center md:text-left">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        © 2026  <span className="mx-2 text-gray-300">|</span>
                        CRAFTED BY ZEESHAN SIDDIQUE.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-tighter">
                        <span className="flex items-center gap-1.5 cursor-help hover:text-black transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Availability: 24/7
                        </span>
                        <span className="cursor-help hover:text-black transition-colors underline decoration-gray-300">Based: Sargodha, PK</span>
                        <span className="cursor-help hover:text-black transition-colors underline decoration-gray-300">Status: Open for work</span>
                    </div>
                </div>
            </div>

            <div className="h-10 md:hidden" />
        </section>
    );
};

export default Links;