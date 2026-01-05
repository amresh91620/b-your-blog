import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, ShieldCheck, Fingerprint, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center mt-15 justify-center selection:bg-[#2d4a43] selection:text-white p-4">
      
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="flex w-full max-w-5xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden rounded-sm border border-black/5"
      >
        
        {/* LEFT SIDE: Editorial Branding */}
        <div className="hidden lg:flex w-1/2 bg-[#2d4a43] p-16 flex-col justify-between relative overflow-hidden text-white">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          
          <Link to="/" className="z-10 group">
            <span className="text-xl font-serif tracking-tighter text-white">
              B-YOUR <span className="italic font-light opacity-80">Journal.</span>
            </span>
          </Link>

          <div className="z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-7xl font-serif italic leading-[0.85] text-white">
                The <br /> Archive<span className="text-[#FAF9F6]/30">.</span>
              </h2>
              <div className="h-[1px] w-16 bg-white/30 mt-8" />
            </motion.div>
            <p className="text-[#FAF9F6]/60 text-[10px] leading-relaxed max-w-xs uppercase tracking-[0.4em] font-bold">
              Access your curated workspace and managed editorial content.
            </p>
          </div>

          <div className="z-10 flex justify-between items-center text-[9px] text-white/40 font-bold uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <ShieldCheck size={12} /> SECURED NODE
            </span>
            <span>Est. 2024</span>
          </div>

          {/* Large Background Watermark */}
          <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/[0.03] leading-none pointer-events-none uppercase tracking-tighter select-none">
            LOG
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 relative bg-white">
          
          <div className="max-w-sm w-full mx-auto space-y-10">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2d4a43]/5 rounded-full text-[#2d4a43]">
                  <Fingerprint size={20} />
                </div>
                <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Identity Bureau</span>
              </div>
              <h3 className="text-5xl font-serif text-[#1a1a1a] tracking-tight">Login.</h3>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Identify yourself to continue</p>
            </header>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                
                {/* Email Field */}
                <motion.div variants={itemVars} className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2d4a43] transition-colors">
                    Registry Email
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-0 text-slate-300 group-focus-within:text-[#2d4a43] transition-colors" size={16} />
                    <input 
                      type="email"
                      placeholder="alex@journal.com"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-black/10 focus:border-[#2d4a43] outline-none transition-all text-[#1a1a1a] font-serif text-lg placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVars} className="group space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-[#2d4a43] transition-colors">
                      Key Phrase
                    </label>
                    <Link to="#" className="text-[9px] font-bold text-slate-300 hover:text-[#2d4a43] uppercase tracking-widest transition-colors">Lost Key?</Link>
                  </div>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-0 text-slate-300 group-focus-within:text-[#2d4a43] transition-colors" size={16} />
                    <input 
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-black/10 focus:border-[#2d4a43] outline-none transition-all text-[#1a1a1a] font-serif text-lg placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full group relative flex justify-center items-center gap-4 bg-[#1a1a1a] text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all shadow-xl shadow-black/10"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Authorize Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Hover Background Slide */}
                <div className="absolute inset-0 bg-[#2d4a43] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </form>

            <footer className="text-center pt-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                New reader?{' '}
                <Link to="/register" className="text-[#2d4a43] hover:text-[#1a1a1a] transition-colors ml-2 border-b border-[#2d4a43]/20 pb-0.5">
                  Request Access
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;