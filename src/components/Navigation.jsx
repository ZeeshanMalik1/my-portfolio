import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, FileText, Contact2Icon, Link, Menu, ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'ME', icon: User },
  { id: 'about', label: 'About', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Contact2Icon },
  { id: 'links', label: 'Links', icon: Link },
];

function Navigation({ activeSection, setActiveSection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileHidden, setIsMobileHidden] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    // DESKTOP AUTO-HIDE (Unchanged)
    if (!isHovered && isDesktop) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }

    // MOBILE AUTO-HIDE (New Logic)
    if (!isDesktop) {
      const mobileTimer = setTimeout(() => {
        setIsMobileHidden(true);
      }, 4000); // Hides after 4 seconds of inactivity
      return () => clearTimeout(mobileTimer);
    }
  }, [isHovered, activeSection]); // Reset timer when user changes section

  const navVariants = {
    hidden: {
      width: 50,
      height: 50,
      borderRadius: 50,
      opacity: 0.4,
      scale: 0.8,
    },
    visible: {
      width: 'auto',
      height: 'auto',
      borderRadius: 9999,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      {/* MOBILE TOGGLE ARROW (Only visible when mobile nav is hidden) */}
      <AnimatePresence>
        {isMobileHidden && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={() => setIsMobileHidden(false)}
            className="fixed md:hidden bottom-0 left-1/2 -translate-x-1/2 z-[60] bg-black/80 text-white p-2 rounded-t-xl border-t border-x border-white/20"
          >
            <ChevronUp size={20} className="animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial="hidden"
        animate={isVisible || isHovered ? "visible" : "hidden"}
        variants={navVariants}
        // Added Mobile hidden animation: slides down below the screen
        style={window.innerWidth < 768 ? { 
          y: isMobileHidden ? 100 : 0,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" 
        } : {}}
        className="fixed z-50 bottom-4 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl cursor-pointer w-[90%] md:w-auto"
      >
        <div className="relative flex items-center justify-around md:justify-center gap-1 md:gap-2 p-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-full h-full w-full">
          
          <AnimatePresence>
            {(!isVisible && !isHovered) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 items-center justify-center hidden md:flex"
              >
                <Menu className="text-white" size={24} />
              </motion.div>
            )}
          </AnimatePresence>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => {
                  setActiveSection(item.id);
                  // On mobile, keep it visible for a bit after click then let it auto-hide
                  setIsMobileHidden(false); 
                }}
                className={`relative flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-white hover:text-gray-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <item.icon size={18} className="relative z-10" />

                <span className={`relative z-10 font-medium text-[10px] md:text-sm md:hidden sm:block ${ (isVisible || isHovered) ? 'block' : 'hidden md:block'}`}>
                  {item.label}
                </span>
                
                <span className="relative z-10 font-medium text-sm hidden md:block">
                    {(isVisible || isHovered) && item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}

export default Navigation;