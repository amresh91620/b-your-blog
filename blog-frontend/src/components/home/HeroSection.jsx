import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, PenTool } from "lucide-react";

const HeroSection = () => {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const revealVariant = {
    initial: { y: 120, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, 0.4, 0.95],
        type: "tween",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FDFCF8] overflow-hidden flex items-center pt-32 lg:pt-28 selection:bg-[#2d4a43] selection:text-white">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT - Personal Blogging Context */}
        <div className="col-span-12 lg:col-span-7 space-y-10">
          
          <motion.div variants={containerVars} initial="initial" animate="animate">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 text-[#94745c] mb-8"
            >
              <PenTool size={14} />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">
                A Space for Your Voice
              </span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1 
                variants={revealVariant}
                className="text-7xl md:text-9xl lg:text-[9rem] font-serif text-[#1a1a1a] leading-[0.8] tracking-tighter"
              >
                Shape Your
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1 
                variants={revealVariant}
                className="text-7xl md:text-9xl lg:text-[9rem] font-serif leading-[0.8] tracking-tighter text-[#1ee2b4]"
              >
                <span className="italic font-light">Narrative.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-md text-lg text-slate-500/90 leading-relaxed font-serif italic"
          >
            A minimal platform built for thinkers, writers, and storytellers. Share your perspectives, inspire the community, and document your journey.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-8 pt-4 items-center"
          >
            <Link to="/write" className="bg-[#236656] text-[#FDFCF8] px-8 py-4 rounded-full text-xs font-bold tracking-widest text-[#1ee2b4] transition-all duration-300">
              START WRITING
            </Link>
            
            <Link to="/blogs" className="group flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:border-[#1a1a1a] transition-all">
                <ArrowUpRight size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                Read Stories
              </span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION - Updated for Blog Context */}
        <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="relative w-full max-w-[420px]"
          >
            {/* The Main Image Arch - Using a more reliable "Writing" aesthetic image */}
            <div className="aspect-[4/5.5] overflow-hidden rounded-t-[200px] shadow-2xl relative z-20 bg-slate-100">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2 }}
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop" 
                alt="Blogger Writing"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"; // Fallback image if main fails
                }}
              />
            </div>

            {/* Background Decorative Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#94745c]/20 rounded-t-[200px] -z-10" />
            
            {/* Minimal Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#236656] text-[#FDFCF8] p-6 hidden md:block z-30 shadow-xl">
               <p className="text-[8px] tracking-[0.3em] uppercase opacity-60 mb-1">Community</p>
               <p className="text-xl font-serif">500+ Writers</p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;