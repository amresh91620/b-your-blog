import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Mail, Instagram, Send, MapPin, Feather } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#2d4a43] selection:text-white min-h-screen font-sans">
      
      {/* Container - Reduced max-width for tighter look */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* 1. HERO: Tighter Spacing & Green Theme */}
        <section className="pt-28 pb-12 border-b border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-4 text-[#2d4a43]"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase">Contact Bureau</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#1a1a1a]"
              >
                Start a <br /> 
                <span className="italic font-light text-[#2d4a43]">Dialogue.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 pb-2"
            >
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium border-l border-[#2d4a43] pl-6 uppercase tracking-wider">
                Whether it's a submission or a strategic inquiry, we value the human connection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. MAIN CONTENT: Tighter Grid & Professional Inputs */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-10 flex items-center gap-4">
                <div className="p-3 bg-[#2d4a43]/5 rounded-full text-[#2d4a43]">
                  <Feather size={18} />
                </div>
                <div>
                    <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 leading-none mb-1">Electronic Mail</h3>
                    <p className="text-xl font-serif italic text-[#1a1a1a]">Send a digital transmission</p>
                </div>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label className="block text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 mb-1 group-focus-within:text-[#2d4a43]">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-[#2d4a43] transition-all font-serif text-lg text-[#1a1a1a] placeholder:text-slate-300" placeholder="Alex Rivers" />
                  </div>
                  <div className="group">
                    <label className="block text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 mb-1 group-focus-within:text-[#2d4a43]">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-[#2d4a43] transition-all font-serif text-lg text-[#1a1a1a] placeholder:text-slate-300" placeholder="hello@studio.com" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 mb-1 group-focus-within:text-[#2d4a43]">Subject</label>
                  <select className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-[#2d4a43] transition-all font-serif italic text-lg text-[#1a1a1a] appearance-none cursor-pointer">
                    <option>General Transmission</option>
                    <option>Editorial Submission</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 mb-1 group-focus-within:text-[#2d4a43]">Message</label>
                  <textarea rows="3" className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-[#2d4a43] transition-all font-serif text-lg text-[#1a1a1a] resize-none placeholder:text-slate-300" placeholder="Write your narrative..."></textarea>
                </div>

                <button className="relative overflow-hidden group bg-[#1a1a1a] text-white px-10 py-5 flex items-center gap-4 rounded-sm active:scale-95 transition-all shadow-xl shadow-black/10">
                  <span className="relative z-10 text-[10px] font-black tracking-[0.3em] uppercase">Initialize Send</span>
                  <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#2d4a43]" />
                  <div className="absolute inset-0 bg-[#2d4a43] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </motion.div>

            {/* Right: Info Blocks */}
            <div className="lg:col-span-5 space-y-10 lg:border-l lg:border-black/5 lg:pl-16">
              
              <div className="space-y-6">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Direct Access</h3>
                
                <a href="mailto:hello@b-yourblog.com" className="flex items-center justify-between p-6 bg-white border border-black/5 group hover:border-[#2d4a43] transition-all shadow-sm">
                   <div>
                      <p className="text-[8px] font-black tracking-widest text-[#2d4a43] uppercase mb-1">Email</p>
                      <p className="font-serif text-lg italic text-[#1a1a1a]">hello@b-your.com</p>
                   </div>
                   <Mail size={20} className="text-slate-300 group-hover:text-[#2d4a43] transition-colors" />
                </a>

                <a href="#" className="flex items-center justify-between p-6 bg-white border border-black/5 group hover:border-[#2d4a43] transition-all shadow-sm">
                   <div>
                      <p className="text-[8px] font-black tracking-widest text-[#2d4a43] uppercase mb-1">Social</p>
                      <p className="font-serif text-lg italic text-[#1a1a1a]">@byour_journal</p>
                   </div>
                   <Instagram size={20} className="text-slate-300 group-hover:text-[#2d4a43] transition-colors" />
                </a>
              </div>

              <div className="pt-8 border-t border-black/5 space-y-6">
                <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-[#2d4a43]" />
                    <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Location</h3>
                </div>
                
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase mb-2 text-[#1a1a1a] tracking-widest">HQ — New Delhi</h4>
                  <p className="text-base text-slate-500 font-serif italic leading-snug group-hover:text-[#1a1a1a] transition-colors">
                    124 Creative Plaza, South Ext.<br />
                    DLF Phase II, 110001
                  </p>
                </div>
              </div>

              {/* Minimal Watermark */}
              <div className="pt-6 opacity-[0.03] pointer-events-none select-none hidden lg:block">
                 <h2 className="text-8xl font-black uppercase leading-none tracking-tighter">Talk</h2>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;