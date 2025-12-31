import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-white flex selection:bg-indigo-500 selection:text-white">
      
      {/* Left: Content Side */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:px-32 py-12 border-r border-slate-50">
        <div className="max-w-sm w-full mx-auto space-y-12">
          <div className="space-y-2">
            <h3 className="text-4xl font-serif italic tracking-tight text-slate-900">Join Us</h3>
            <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">Create your digital profile</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-6">
              <div className="group border-b border-slate-100 py-2 focus-within:border-indigo-500 transition-all">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-focus-within:text-indigo-500">Full Name</label>
                <input type="text" placeholder="Julian Ross" className="w-full bg-transparent outline-none py-2 font-serif italic text-sm text-slate-800" />
              </div>
              <div className="group border-b border-slate-100 py-2 focus-within:border-indigo-500 transition-all">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-focus-within:text-indigo-500">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-transparent outline-none py-2 font-serif italic text-sm text-slate-800" />
              </div>
              <div className="group border-b border-slate-100 py-2 focus-within:border-indigo-500 transition-all">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-focus-within:text-indigo-500">Create Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none py-2 font-serif italic text-sm text-slate-800" />
              </div>
            </div>

            <button className="w-full group flex justify-between items-center bg-[#0a0a0a] text-white p-6 hover:bg-indigo-600 transition-all duration-700 mt-4">
              <span className="text-[11px] font-black tracking-[0.4em] uppercase">Create Profile</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <p className="text-center text-[10px] tracking-widest uppercase text-slate-400">
            Already a curator? <Link to="/login" className="ml-2 text-indigo-600 font-black border-b border-indigo-200 pb-0.5">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right: Abstract/Brand Side (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#fcfcfc] p-20 flex-col justify-between relative overflow-hidden">
        <div className="z-10 text-right">
          <Link to="/" className="text-2xl font-serif italic text-slate-900 tracking-tighter">B-Your <span className="text-indigo-500">.</span></Link>
        </div>
        <div className="z-10 space-y-6 text-right">
          <div className="flex items-center justify-end gap-4 text-indigo-600">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">New Narrative</span>
            <Minus size={24} strokeWidth={3} />
          </div>
          <h2 className="text-7xl font-serif italic text-slate-900 leading-tight tracking-tighter">Start your <br /> <span className="text-slate-200 transition-colors hover:text-indigo-500 duration-700">Journey.</span></h2>
        </div>
        <div className="z-10 text-[9px] tracking-[0.4em] text-slate-300 uppercase text-right italic font-serif">Edition 04 — Digital Identity</div>
        <div className="absolute top-20 -right-20 text-[25vw] font-black text-slate-500/[0.03] leading-none pointer-events-none italic">UP</div>
      </div>
    </div>
  );
};

export default Register;