import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, ShieldCheck, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center selection:bg-orange-500 selection:text-white p-4 md:p-6">
      
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="flex w-full max-w-5xl bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100"
      >
        
        {/* Left Side: Editorial Branding - Matching Hero/Nav */}
        <div className="hidden lg:flex w-5/12 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <Link to="/" className="flex items-center gap-1 z-10">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              B-YOUR
            </span>
            <span className="text-2xl font-serif italic text-orange-500">.</span>
          </Link>

          <div className="z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-6xl font-serif italic text-white leading-tight">
                Secure <br /> Entry<span className="text-orange-500">.</span>
              </h2>
              <div className="h-[2px] w-12 bg-orange-500 mt-6" />
            </motion.div>
            <p className="text-slate-400 text-[10px] leading-relaxed max-w-xs uppercase tracking-[0.3em] font-bold">
              Exclusive Content & Member Management Portal
            </p>
          </div>

          <div className="z-10 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-orange-500"/> Verified Node
            </span>
            <span>Est. 2024</span>
          </div>

          {/* Large Watermark */}
          <div className="absolute -bottom-10 -left-10 text-[18vw] font-black text-white/[0.03] leading-none pointer-events-none uppercase tracking-tighter">
            Auth
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 relative">
          
          <div className="max-w-sm w-full mx-auto space-y-12">
            <header className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <Fingerprint className="text-orange-500" size={24} />
                <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Identity</span>
              </div>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Login</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Identify yourself to continue.</p>
            </header>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                
                {/* Email Field */}
                <motion.div variants={itemVars} className="group space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-orange-500 transition-colors">
                    Registry Email
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-0 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input 
                      type="email"
                      placeholder="user@journal.com"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-200 placeholder:font-normal"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVars} className="group space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">
                      Key Phrase
                    </label>
                    <Link to="#" className="text-[9px] font-bold text-slate-400 hover:text-orange-500 uppercase tracking-widest transition-colors">Lost Key?</Link>
                  </div>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-0 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input 
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button - Matching Hero Action */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative flex justify-center items-center gap-4 bg-slate-900 text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all shadow-2xl hover:shadow-orange-200/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Authorize Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </form>

            <footer className="text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                New reader?{' '}
                <Link to="/register" className="text-orange-600 hover:text-slate-900 transition-colors ml-2 underline underline-offset-4">
                  Request Access
                </Link>
              </p>
            </footer>
          </div>

          {/* Floating Aesthetic Element for Mobile */}
          <div className="absolute bottom-4 right-4 text-slate-50 lg:hidden pointer-events-none -z-10">
            <Fingerprint size={120} strokeWidth={1} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;