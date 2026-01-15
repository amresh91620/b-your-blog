import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, PenTool } from "lucide-react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const user = useSelector((state) => state?.auth?.user || null);
  const navigate = useNavigate();

  const handleStartWriting = () => {
    if (user) {
      navigate('/dashboard', { state: { activeTab: 'create' } });
    } else {
      navigate('/login');
    }
  };

  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const revealVariant = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, 0.4, 0.95],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FDFCF8] overflow-hidden flex items-center pt-28 pb-20 lg:py-0 selection:bg-[#2d4a43] selection:text-white">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="container mx-auto px-6 sm:px-10 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-12 items-center">
          
          {/* LEFT CONTENT - Stays on TOP in Mobile/Tablet */}
          <div className="col-span-12 lg:col-span-7 space-y-6 md:space-y-8 order-1 relative z-30">
            
            <motion.div variants={containerVars} initial="initial" animate="animate">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center gap-4 text-[#94745c] mb-4"
              >
                <PenTool size={14} />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                  A Space for Your Voice
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 
                  variants={revealVariant}
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[9rem] font-serif text-[#1a1a1a] leading-[0.85] tracking-tighter"
                >
                  Shape Your
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1 
                  variants={revealVariant}
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[9rem] font-serif leading-[0.85] tracking-tighter text-[#1ee2b4]"
                >
                  <span className="italic font-light">Narrative.</span>
                </motion.h1>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-md text-base md:text-lg text-slate-600 leading-relaxed font-serif italic"
            >
              A minimal platform built for thinkers, writers, and storytellers. Share your perspectives and document your journey.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-4 items-center"
            >
              <button 
                onClick={handleStartWriting}
                className="bg-[#236656] text-[#FDFCF8] px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                START WRITING
              </button>
              
              <Link to="/blogs" className="group flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:border-[#1a1a1a] transition-all">
                  <ArrowUpRight size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Read Stories</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE SECTION - Overlaps on Mobile/Tablet */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end order-2 mt-[-40px] sm:mt-[-80px] lg:mt-0 z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px]"
            >
              {/* Image Arch */}
              <div className="aspect-[4/5] overflow-hidden rounded-t-[140px] sm:rounded-t-[200px] shadow-2xl bg-white border-[8px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Blogger Writing"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Stat Card - Positioned differently for overlap feel */}
              <div className="absolute -bottom-6 right-0 sm:-left-10 bg-[#236656] text-white p-5 sm:p-6 z-40 shadow-2xl">
                 <p className="text-[7px] tracking-[0.3em] uppercase opacity-60">Community</p>
                 <p className="text-lg sm:text-xl font-serif">500+ Writers</p>
              </div>

              {/* Decorative background circle for more "Overlap" depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1ee2b4]/5 rounded-full -z-10 blur-3xl lg:hidden" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;