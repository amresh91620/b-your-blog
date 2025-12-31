import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative max-w-[1400px] mx-auto px-6 py-10 lg:py-20 overflow-hidden bg-white">
      {/* 01. WATERMARK - Hidden on small mobile to avoid clutter */}
      <div className="absolute top-10 left-10 text-[8rem] md:text-[12rem] font-bold text-slate-50 select-none pointer-events-none leading-none z-0">
        01
      </div>

      <div className="grid grid-cols-12 gap-4 relative z-10">
        
        {/* LEFT: Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:flex col-span-1 flex-col justify-between py-4 border-r border-slate-100">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] tracking-[0.5em] uppercase text-indigo-300 [writing-mode:vertical-lr] rotate-180 font-bold"
          >
            Est. MMXXIV — Vol. 04
          </motion.p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-16 bg-indigo-100" />
            <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest rotate-180 [writing-mode:vertical-lr]">
              Scroll
            </span>
          </div>
        </div>

        {/* CENTER: Main Content */}
        <div className="col-span-12 lg:col-span-8 lg:pl-16 flex flex-col justify-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 uppercase mb-4 block">
              Digital Anthology
            </span>

            <div className="relative mb-6 md:mb-8">
              {/* THE SCRIPT */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic text-indigo-600/90 leading-none absolute -top-8 md:-top-16 -left-1 z-30 drop-shadow-sm"
                style={{ fontFamily: "Brush Script MT, cursive" }}
              >
                B-Your
              </motion.h1>

              {/* THE BOLD TEXT */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-[8.5rem] font-black tracking-tighter text-slate-900 leading-[0.8] uppercase relative z-20"
              >
                Journal
              </motion.h1>
            </div>

            {/* Content Box - Reduced width on mobile */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="relative max-w-xl my-8 md:my-12 group"
            >
              <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-600 via-indigo-400 to-transparent group-hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all duration-500" />

              <div className="pl-6 md:pl-8 space-y-4">
                <p className="text-base md:text-xl text-slate-800 font-serif leading-snug">
                  Documenting the intersection of{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-bold italic">human creativity</span>
                    <span className="absolute bottom-1 left-0 w-full h-1.5 md:h-2 bg-indigo-50 -z-0" />
                  </span>{" "}
                  and the digital frontier.
                </p>

                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed tracking-wide hidden sm:block">
                  Fresh perspectives delivered weekly. From insightful stories
                  to trend analyses. Curated editorials designed to inspire.
                </p>

                {/* Stats Row */}
                <div className="flex gap-4 md:gap-6 pt-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-slate-400">Updates</span>
                    <span className="text-[10px] md:text-xs font-bold text-slate-900">Weekly Ed.</span>
                  </div>
                  <div className="w-[1px] h-6 bg-slate-200" />
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-slate-400">Focus</span>
                    <span className="text-[10px] md:text-xs font-bold text-slate-900">Digital Culture</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Button Row */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                to="/blogs"
                className="w-full sm:w-auto text-center group relative px-8 md:px-10 py-4 bg-slate-900 text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-indigo-600 shadow-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  Explore <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-slate-200" />
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Issue 2025
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Image - Positioned under text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="col-span-12 lg:col-span-3 relative mt-16 lg:mt-0"
        >
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -top-4 -right-4 w-full h-full border border-indigo-100 z-0 hidden lg:block" />

            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
                className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover contrast-110"
                alt="Journal Cover"
              />
              <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Float Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 right-2 lg:-bottom-10 lg:-left-12 bg-white p-4 md:p-5 shadow-2xl border border-slate-50 max-w-[140px] md:max-w-[180px] z-20"
            >
              <div className="w-8 h-1 bg-indigo-500 mb-3" />
              <p className="text-[9px] md:text-[10px] font-black text-slate-900 uppercase leading-tight">
                AI & The Future of Blogs
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;