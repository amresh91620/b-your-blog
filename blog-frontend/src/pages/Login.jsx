import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex selection:bg-indigo-500 selection:text-white">
      
      {/* Left: Branding Side (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#0a0a0a] p-20 flex-col justify-between relative overflow-hidden">
        <div className="z-10">
          <Link to="/" className="text-2xl font-serif italic text-white tracking-tighter">B-Your <span className="text-indigo-500">.</span></Link>
        </div>
        <div className="z-10 space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 text-indigo-500">
            <Minus size={24} strokeWidth={3} />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/50">Journal Access</span>
          </motion.div>
          <h2 className="text-7xl font-serif italic text-white leading-tight tracking-tighter">The Archive <br /> <span className="text-white/20">Awaits.</span></h2>
        </div>
        <div className="z-10 text-[9px] tracking-[0.4em] text-white/20 uppercase">© 2025 Edition 04</div>
        <div className="absolute -bottom-10 -left-10 text-[25vw] font-black text-white/[0.02] leading-none pointer-events-none italic">IN</div>
      </div>

      {/* Right: Form Side */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:px-32 py-12 bg-white">
        <div className="max-w-sm w-full mx-auto space-y-12">
          <div className="space-y-2">
            <h3 className="text-4xl font-serif italic tracking-tight text-slate-900">Sign In</h3>
            <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">Enter your credentials to proceed</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-6">
              <div className="group border-b border-slate-100 py-2 focus-within:border-indigo-500 transition-all">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-focus-within:text-indigo-500">Email Address</label>
                <input type="email" placeholder="hello@b-your.com" className="w-full bg-transparent outline-none py-2 font-serif italic text-sm text-slate-800" />
              </div>
              <div className="group border-b border-slate-100 py-2 focus-within:border-indigo-500 transition-all">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-focus-within:text-indigo-500">Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none py-2 font-serif italic text-sm text-slate-800" />
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" size={14} className="text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-indigo-600 transition-colors">Forgot?</Link>
            </div>

            <button className="w-full group flex justify-between items-center bg-[#0a0a0a] text-white p-6 hover:bg-indigo-600 transition-all duration-700">
              <span className="text-[11px] font-black tracking-[0.4em] uppercase">Authorize</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <p className="text-center text-[10px] tracking-widest uppercase text-slate-400">
            New to the journal? <Link to="/register" className="ml-2 text-indigo-600 font-black border-b border-indigo-200 pb-0.5">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;