import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Lock, ShieldPlus, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVars = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center mt-15 selection:bg-[#2d4a43] selection:text-white p-4">
      
      {/* Main Container - Slimmer Max Width */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="flex w-full max-w-5xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden rounded-sm border border-black/5"
      >

        {/* LEFT SIDE: Visual Branding */}
        <div className="hidden lg:flex w-5/12 bg-[#2d4a43] p-12 flex-col justify-between relative overflow-hidden text-white">
          
          {/* Subtle Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          
          <motion.div variants={fadeUp} className="z-10">
            <Link to="/" className="group">
              <span className="text-xl font-serif tracking-tighter text-white">
                B-YOUR <span className="italic font-light opacity-80">Journal.</span>
              </span>
            </Link>
          </motion.div>

          <div className="z-10 space-y-6">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <Hash className="text-white/40" size={14} />
                <span className="text-[9px] font-black uppercase text-white/40 tracking-[0.4em]">Directory / 002</span>
              </div>
              <h2 className="text-5xl xl:text-6xl font-serif italic leading-[1] text-white">
                Join the <br /> 
                <span className="opacity-90">Community.</span>
              </h2>
              <div className="h-[1px] w-12 bg-white/30 mt-8" />
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-white/50 text-[10px] max-w-[240px] leading-relaxed uppercase tracking-[0.3em] font-bold border-l border-white/10 pl-4">
              Access curated stories, digital art, and premium tech insights.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="z-10 flex justify-between items-center text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <ShieldPlus size={12} /> SECURE PROTOCOL
            </span>
            <span>Est. 2024</span>
          </motion.div>

          {/* Large Watermark */}
          <div className="absolute -bottom-6 -left-6 text-[18vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase tracking-tighter select-none">
            JOIN
          </div>
        </div>

        {/* RIGHT SIDE: Form Section */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 bg-white relative">
          <div className="max-w-sm w-full mx-auto space-y-10">

            {/* Header */}
            <motion.header variants={itemVars} className="space-y-3">
              <h3 className="text-5xl font-serif text-[#1a1a1a] tracking-tight">Register.</h3>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest italic font-serif">Begin your digital anthology</p>
            </motion.header>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVars} className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2d4a43] transition-colors">Nominal Name</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-0 text-slate-300 group-focus-within:text-[#2d4a43] transition-colors" size={16} />
                    <input 
                      type="text" 
                      placeholder="Alex Rivers"
                      className="w-full pl-8 pr-4 py-2.5 bg-transparent border-b border-black/10 focus:border-[#2d4a43] outline-none transition-all text-[#1a1a1a] font-serif text-lg placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVars} className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2d4a43] transition-colors">Registry Email</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-0 text-slate-300 group-focus-within:text-[#2d4a43] transition-colors" size={16} />
                    <input 
                      type="email" 
                      placeholder="user@journal.com"
                      className="w-full pl-8 pr-4 py-2.5 bg-transparent border-b border-black/10 focus:border-[#2d4a43] outline-none transition-all text-[#1a1a1a] font-serif text-lg placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVars} className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2d4a43] transition-colors">Security Key</label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-0 text-slate-300 group-focus-within:text-[#2d4a43] transition-colors" size={16} />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full pl-8 pr-4 py-2.5 bg-transparent border-b border-black/10 focus:border-[#2d4a43] outline-none transition-all text-[#1a1a1a] font-serif text-lg placeholder:text-slate-200"
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
                  Create Account <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#2d4a43] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </form>

            {/* Bottom Link */}
            <motion.p variants={itemVars} className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">
              Already a member?{' '}
              <Link to="/login" className="text-[#2d4a43] hover:text-[#1a1a1a] transition-colors ml-2 border-b border-[#2d4a43]/20 pb-0.5">
                Sign In
              </Link>
            </motion.p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Register;