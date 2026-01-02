import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Lock, ShieldPlus, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVars = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center selection:bg-orange-500 selection:text-white p-4 md:p-6">
      
      {/* Main Container */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="flex w-full max-w-6xl bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100"
      >

        {/* Left Side: Visual Branding - Matching Hero Theme */}
        <div className="hidden lg:flex w-5/12 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full -ml-32 -mt-32" />
          
          <motion.div variants={fadeUp} className="z-10">
            <Link to="/" className="flex items-center gap-1 group">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                B-YOUR
              </span>
              <span className="text-2xl font-serif italic text-orange-500">.</span>
            </Link>
          </motion.div>

          <div className="z-10 space-y-6">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <Hash className="text-orange-500" size={18} />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">Directory / 002</span>
              </div>
              <h2 className="text-5xl xl:text-6xl font-serif italic text-white leading-[1.1]">
                Join the <br /> 
                <span className="text-orange-500">Community.</span>
              </h2>
              <div className="h-[2px] w-12 bg-orange-500 mt-8" />
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-slate-400 text-[10px] max-w-xs leading-relaxed uppercase tracking-[0.3em] font-bold border-l border-slate-800 pl-4">
              Access curated stories, digital art, and premium tech insights.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="z-10 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <ShieldPlus size={12} className="text-orange-500" /> Secure Protocol
            </span>
            <span>Est. 2024</span>
          </motion.div>

          {/* Large Watermark */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase tracking-tighter select-none"
          >
            JOIN
          </motion.div>
        </div>

        {/* Right Side: Form Section */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 bg-white relative">
          <div className="max-w-sm w-full mx-auto space-y-10">

            {/* Header */}
            <motion.header variants={itemVars} className="space-y-3">
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Register</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest italic font-serif">Begin your digital anthology.</p>
            </motion.header>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVars} className="group space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-orange-500 transition-colors">Nominal Name</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-0 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      placeholder="Alex Rivers"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVars} className="group space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-orange-500 transition-colors">Registry Email</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-0 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input 
                      type="email" 
                      placeholder="user@journal.com"
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-b-2 border-slate-100 focus:border-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-200"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVars} className="group space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-orange-500 transition-colors">Security Key</label>
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

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative flex justify-center items-center gap-4 bg-slate-900 text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all shadow-2xl hover:shadow-orange-200/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Create Account <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </form>

            {/* Bottom Link */}
            <motion.p variants={itemVars} className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Already a member?{' '}
              <Link to="/login" className="text-orange-600 hover:text-slate-900 transition-colors ml-2 underline underline-offset-4">
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