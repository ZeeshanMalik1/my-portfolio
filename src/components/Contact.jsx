import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/socials';

const Contact = () => {
    return (
        <section className="bg-[#E3E3E1] text-[#1a1a1a] w-[98.9vw] py-16 md:py-24 min-h-screen relative overflow-x-hidden font-['Oswald'] selection:bg-black selection:text-white">

            {/* Background Decorative Text (Responsive Scaling) */}
            <div className="absolute top-10 md:top-20 right-0 w-full overflow-hidden pointer-events-none opacity-[0.03] text-right">
                <h1 className="text-[6rem] sm:text-[10rem] md:text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
                    GET IN TOUCH
                </h1>
            </div>

            <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center border w-fit px-4 py-1.5 text-white rounded-full bg-black gap-3 shadow-lg">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-50"></span>
                                <div className="rounded-full h-2 w-2 bg-white"></div>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Connection</span>
                        </div>
                        <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
                            LET'S START <br /> <span className="text-gray-400">A PROJECT</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 space-y-10 md:space-y-12 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400">Contact & Availability</h4>
                            <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm">
                                I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative injection, let's chat.
                            </p>
                        </div>

                        {/* Contact Details Cards */}
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { icon: MapPin, label: "Location", value: CONTACT_INFO.ADDRESS },
                                { icon: Mail, label: "Email", value: CONTACT_INFO.EMAIL },
                                { icon: Phone, label: "WhatsApp", value: CONTACT_INFO.PHONE }
                            ].map((item, index) => (
                                <div key={index} className="group flex items-center gap-5 md:gap-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center text-gray-400 group-hover:text-green-500 group-hover:scale-110 transition-all duration-300 shadow-sm shrink-0">
                                        <item.icon size={18} />
                                    </div>
                                    <div className="min-w-0"> {/* Prevents overflow on small screens */}
                                        <span className="block text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
                                        <span className="font-bold text-base md:text-lg uppercase break-words block">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 md:pt-8 flex flex-wrap gap-3 md:gap-4">
                            {[
                                { icon: Github, url: SOCIAL_LINKS.GITHUB },
                                { icon: Linkedin, url: SOCIAL_LINKS.LINKEDIN },
                                { icon: Twitter, url: SOCIAL_LINKS.TWITTER },
                                { icon: Instagram, url: SOCIAL_LINKS.INSTAGRAM }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400/20 flex items-center justify-center text-[#1a1a1a] hover:bg-black hover:text-white transition-all duration-300 group"
                                >
                                    <item.icon size={16} className="group-hover:rotate-12 transition-transform md:size-[18px]" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-white/50 backdrop-blur-sm rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-sm border border-white order-1 lg:order-2"
                    >
                        <form className="space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                {/* Full Name Field */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 md:py-4 focus:border-green-500 focus:outline-none transition-colors duration-300 uppercase text-xs md:text-sm font-bold tracking-widest"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 top-3 md:top-4 text-gray-400 uppercase text-[10px] md:text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 
                    peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 
                    peer-focus:-top-4 peer-focus:text-[9px] md:peer-focus:text-[10px] peer-focus:text-green-500
                    peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]"
                                    >
                                        Full Name
                                    </label>
                                </div>

                                {/* Email Field */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 md:py-4 focus:border-green-500 focus:outline-none transition-colors duration-300 uppercase text-xs md:text-sm font-bold tracking-widest"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-3 md:top-4 text-gray-400 uppercase text-[10px] md:text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 
                    peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 
                    peer-focus:-top-4 peer-focus:text-[9px] md:peer-focus:text-[10px] peer-focus:text-green-500
                    peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]"
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 md:py-4 focus:border-green-500 focus:outline-none transition-colors duration-300 uppercase text-xs md:text-sm font-bold tracking-widest"
                                />
                                <label
                                    htmlFor="subject"
                                    className="absolute left-0 top-3 md:top-4 text-gray-400 uppercase text-[10px] md:text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 
                peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 
                peer-focus:-top-4 peer-focus:text-[9px] md:peer-focus:text-[10px] peer-focus:text-green-500
                peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]"
                                >
                                    Subject
                                </label>
                            </div>

                            {/* Message Field */}
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 md:py-4 focus:border-green-500 focus:outline-none transition-colors duration-300 uppercase text-xs md:text-sm font-bold tracking-widest resize-none"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-3 md:top-4 text-gray-400 uppercase text-[10px] md:text-sm font-bold tracking-widest pointer-events-none transition-all duration-300 
                peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 
                peer-focus:-top-4 peer-focus:text-[9px] md:peer-focus:text-[10px] peer-focus:text-green-500
                peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]"
                                >
                                    Your Message
                                </label>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="group relative bg-[#1a1a1a] text-white px-10 md:px-12 py-5 md:py-6 rounded-full overflow-hidden transition-all hover:shadow-xl w-full md:w-auto h-14 md:h-16 min-w-[200px]">
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <Send size={20} className="text-green-500" />
                                    </div>
                                    <span className="font-bold tracking-widest uppercase text-[11px] md:text-xs transition-all duration-300 group-hover:translate-y-[150%] group-hover:opacity-0 block">
                                        Send Message
                                    </span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            {/* Safe area for mobile navigation */}
            <div className="h-20 md:hidden" />
        </section>
    );
};

export default Contact;