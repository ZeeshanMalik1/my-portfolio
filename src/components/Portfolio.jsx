import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Man-O-Man',
    category: 'Web App',
    tech: 'React • Node.js',
    description: 'The Clothing Brand Fashion you deserve.',
    link: 'https://github.com/ZeeshanMalik1/Man-O-Man',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'School Mgmt System',
    category: 'Full Stack',
    tech: 'MERN Stack',
    description: 'Comprehensive school management solution.',
    link: 'https://github.com/ZeeshanMalik1/school-mangemet-system',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'UOS Merit Check',
    category: 'Tools',
    tech: 'CSS • JavaScript',
    description: 'Merit calculation tool for UOS students.',
    link: 'https://github.com/ZeeshanMalik1/uos-merit-check',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'SIHS Portal',
    category: 'Web App',
    tech: 'JavaScript • Firebase',
    description: 'Student portal for SIHS institute.',
    link: 'https://github.com/ZeeshanMalik1/sihs-new-1',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'My Portfolio',
    category: 'Web App',
    tech: 'React • Framer Motion',
    description: 'Personal portfolio showcasing my work.',
    link: 'https://github.com/ZeeshanMalik1/my_portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Medical College',
    category: 'Website',
    tech: 'HTML • CSS • JS',
    description: 'Informational website for Sargodha Medical College.',
    link: 'https://github.com/ZeeshanMalik1/sargodha-medical-collage',
    image: 'https://images.unsplash.com/photo-1519494026892-80ba456f30f0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Harvard Clone',
    category: 'Website',
    tech: 'Frontend',
    description: 'Replica of the Harvard University website.',
    link: 'https://github.com/ZeeshanMalik1/harvard',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Usman\'s Gallery',
    category: 'Website',
    tech: 'Grid Layout',
    description: 'A curated photo gallery display.',
    link: 'https://github.com/ZeeshanMalik1/usman-s-gallery',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=600&auto=format&fit=crop'
  },
];

const filters = ['All', 'Web App', 'Full Stack', 'Website', 'Tools'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // Track which project is tapped on mobile
  const [tappedId, setTappedId] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (id) => {
    // If user taps the same project again, hide overlay
    // If they tap a new project, show that overlay
    setTappedId(tappedId === id ? null : id);
  };

  return (
    <section className="bg-[#E3E3E1] text-[#1a1a1a] py-16 md:py-24 min-h-screen w-[98.9vw] relative overflow-x-hidden font-['Oswald']">

      {/* Background Decorative Text */}
      <div className="absolute top-10 md:top-20 text-center w-full overflow-hidden pointer-events-none opacity-[0.04] select-none">
        <h1 className="text-[6rem] md:text-[15rem] font-bold uppercase whitespace-nowrap leading-none">
          PORTFOLIO
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center border w-fit px-4 py-1.5 text-white rounded-full bg-black gap-3 shadow-lg">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-50"></span>
                <div className="rounded-full h-2 w-2 bg-white"></div>
              </div>
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">My Showcase</span>
            </div>
            <h2 className="font-bold text-5xl lg:text-8xl uppercase leading-[0.9] tracking-tighter">
              FEATURED <br /> <span className="text-gray-400">CREATIONS</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setTappedId(null); // Reset mobile tap state on filter change
                }}
                className={`px-5 py-2 md:px-6 md:py-2 rounded-full border text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap
                  ${activeFilter === filter
                    ? 'bg-black text-white border-black shadow-md'
                    : 'border-gray-400/30 text-gray-500 hover:border-black hover:text-black'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              const isTapped = tappedId === project.id;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="group relative cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-md border border-transparent group-hover:border-green-500/50 transition-colors duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 
                        ${isTapped ? 'grayscale-0 scale-105' : ''}`}
                    />

                    {/* Overlay - Triggers on group-hover (PC) or isTapped (Mobile) */}
                    <div className={`absolute inset-0 bg-black/80 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-6 md:p-8
                      ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                          <span className={`text-green-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase block transform transition-all duration-500
                            ${isTapped ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                            {project.category}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-bold text-white uppercase transform transition-all duration-500 delay-100
                            ${isTapped ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                            {project.title}
                          </h3>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent toggling the overlay off
                              window.open(project.link, '_blank');
                            }}
                            className="p-2.5 md:p-3 bg-white/10 rounded-full hover:bg-green-500 transition-colors text-white"
                          >
                            <ExternalLink size={16} />
                          </button>
                        </div>
                      </div>

                      <p className={`text-gray-300 text-xs mb-4 line-clamp-2 font-sans transition-opacity duration-500 delay-150
                        ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                          {project.description}
                      </p>

                      <div className={`pt-4 border-t border-white/10 flex items-center justify-between transition-opacity duration-500 delay-200
                        ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <span className="font-sans text-[10px] md:text-[11px] text-gray-400 italic">{project.tech}</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1} / Project
                    </span>
                    <div className="h-[1px] flex-grow mx-4 bg-gray-400/20"></div>
                    <Search size={12} className={isTapped ? "text-green-500" : "text-gray-400"} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="h-24 md:hidden" />
    </section>
  );
};

export default Portfolio;