import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight, Plus, ScrollText } from "lucide-react";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative max-w-[1400px] mx-auto px-6 py-16 lg:py-28 overflow-hidden bg-[#fafafa] selection:bg-orange-100">
      
      {/* 01. BACKGROUND DECOR - Subtle & Modern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 z-0" />
      <div className="absolute top-10 left-10 text-[12rem] md:text-[20rem] font-black text-black/[0.02] select-none pointer-events-none leading-none z-0">
        MXXV
      </div>

      <div className="grid grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT: Sidebar - Minimalist */}
        <div className="hidden lg:flex col-span-1 flex-col justify-between py-4">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100px" }}
            className="w-[1px] bg-slate-300 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] tracking-[0.6em] uppercase text-slate-400 [writing-mode:vertical-lr] rotate-180 font-medium py-8"
          >
            Philosophy — Art — Future
          </motion.p>
          <div className="flex flex-col items-center gap-6">
             <ScrollText size={14} className="text-slate-300" />
          </div>
        </div>

        {/* CENTER: Main Content */}
        <div className="col-span-12 lg:col-span-7 lg:pl-10 flex flex-col justify-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-8 bg-orange-500" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-orange-600 uppercase">
                Volume 04 / Issue 2026
              </span>
            </div>

            <div className="relative mb-12">
              {/* Overlapping Text Effect */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-4xl md:text-6xl font-serif italic text-slate-800 mb-[-1.5rem] ml-1 z-30 relative"
              >
                The Modern
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.8] uppercase"
              >
                Journal<span className="text-orange-500">.</span>
              </motion.h1>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7 }}
              className="max-w-xl space-y-8"
            >
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Exploring the <span className="text-slate-900 font-medium italic">unseen narratives</span> of digital evolution and human craft.
              </p>

              <div className="flex flex-wrap gap-12 py-6 border-y border-slate-200/60">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Curator</p>
                  <p className="text-sm font-medium text-slate-800 underline decoration-orange-200 underline-offset-4">Alex Rivers</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Reading Time</p>
                  <p className="text-sm font-medium text-slate-800">12 Mins / Avg</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link
                  to="/blogs"
                  className="group relative px-8 py-4 bg-slate-900 text-white overflow-hidden transition-all duration-300 hover:pr-12"
                >
                  <span className="relative z-10 flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase">
                    Begin Reading <MoveRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-orange-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <button className="text-[11px] font-bold tracking-widest uppercase border-b-2 border-slate-200 hover:border-orange-500 transition-colors py-1">
                  View Archive
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Featured Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="col-span-12 lg:col-span-4 relative mt-16 lg:mt-0"
        >
          <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto group">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-slate-200 z-0 group-hover:inset-0 transition-all duration-500" />
            
            <div className="relative h-full w-full overflow-hidden bg-slate-200 z-10">
              <img
                src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                alt="Journal Aesthetic"
              />
              
              {/* Image Overlay Label */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 py-1">
                 <p className="text-[9px] font-black tracking-widest uppercase text-slate-900">Cover Story</p>
              </div>
            </div>

            {/* Float Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-6 shadow-2xl z-20 hidden md:block"
            >
              <Plus className="mb-4 text-orange-200" />
              <p className="text-xs font-bold leading-tight uppercase tracking-tighter">
                New Perspectives<br/>On Generative Art
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;