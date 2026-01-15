import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Mail, Instagram, Send, MapPin, Feather, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#FDFCF8] text-[#1a1a1a] selection:bg-[#236656] selection:text-white min-h-screen font-sans">
      
      {/* Global Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* 1. HERO SECTION */}
        <section className="pt-28 pb-16 border-b border-[#1a1a1a]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-[#94745c]"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Contact Bureau</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]"
              >
                Start a <br /> 
                <span className="italic font-light text-[#1ee2b4]">Dialogue.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-5 lg:pb-4"
            >
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-serif italic border-l-2 border-[#1ee2b4] pl-6 uppercase tracking-widest">
                "Whether it's a submission or a strategic inquiry, we value the clarity of human connection."
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. MAIN INTERACTION AREA */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: The Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-12 flex items-center gap-5">
                <div className="p-4 bg-[#236656] rounded-2xl text-[#1ee2b4] shadow-lg shadow-[#236656]/10">
                  <Feather size={20} />
                </div>
                <div>
                    <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#94745c] mb-1">Electronic Transmission</h3>
                    <p className="text-2xl font-serif italic text-[#1a1a1a]">Compose your narrative</p>
                </div>
              </div>

              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <label className="block text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-[#236656] transition-colors">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-3 outline-none focus:border-[#1ee2b4] transition-all font-serif text-lg text-[#1a1a1a] placeholder:text-slate-200" placeholder="e.g. Julian V." />
                  </div>
                  <div className="group relative">
                    <label className="block text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-[#236656] transition-colors">Your Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-3 outline-none focus:border-[#1ee2b4] transition-all font-serif text-lg text-[#1a1a1a] placeholder:text-slate-200" placeholder="hello@domain.com" />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-[#236656] transition-colors">Nature of Inquiry</label>
                  <select className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-4 outline-none focus:border-[#1ee2b4] transition-all font-serif italic text-lg text-[#1a1a1a] appearance-none cursor-pointer">
                    <option>General Correspondence</option>
                    <option>Editorial Submission</option>
                    <option>Partnership Proposal</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="block text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-[#236656] transition-colors">Message Body</label>
                  <textarea rows="4" className="w-full bg-transparent border-b border-[#1a1a1a]/10 py-3 outline-none focus:border-[#1ee2b4] transition-all font-serif text-lg text-[#1a1a1a] resize-none placeholder:text-slate-200" placeholder="Share your thoughts..."></textarea>
                </div>

                <button className="relative overflow-hidden group bg-[#236656] text-[#FDFCF8] px-12 py-6 flex items-center gap-6 rounded-full active:scale-95 transition-all shadow-xl shadow-[#236656]/20">
                  <span className="relative z-10 text-[10px] font-bold tracking-[0.5em] uppercase">Initialize Send</span>
                  <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#1ee2b4]" />
                  <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </motion.div>

            {/* Right Column: Information Cards */}
            <div className="lg:col-span-5 space-y-12 lg:border-l lg:border-[#1a1a1a]/5 lg:pl-20">
              
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#94745c]">Direct Access</h3>
                
                <a href="mailto:hello@b-yourblog.com" className="flex items-center justify-between p-8 bg-white rounded-2xl border border-[#1a1a1a]/5 group hover:border-[#1ee2b4] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#236656]/5">
                   <div>
                      <p className="text-[8px] font-bold tracking-[0.3em] text-[#236656] uppercase mb-2">Digital Mail</p>
                      <p className="font-serif text-xl italic text-[#1a1a1a]">hello@b-your.com</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#1ee2b4]/10 transition-colors">
                      <Mail size={18} className="text-slate-400 group-hover:text-[#236656] transition-colors" />
                   </div>
                </a>

                <a href="#" className="flex items-center justify-between p-8 bg-white rounded-2xl border border-[#1a1a1a]/5 group hover:border-[#1ee2b4] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#236656]/5">
                   <div>
                      <p className="text-[8px] font-bold tracking-[0.3em] text-[#236656] uppercase mb-2">Studio Update</p>
                      <p className="font-serif text-xl italic text-[#1a1a1a]">@byour_journal</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#1ee2b4]/10 transition-colors">
                      <Instagram size={18} className="text-slate-400 group-hover:text-[#236656] transition-colors" />
                   </div>
                </a>
              </div>

              <div className="pt-12 border-t border-[#1a1a1a]/5 space-y-8">
                <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#1ee2b4]" />
                    <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#94745c]">The Bureau HQ</h3>
                </div>
                
                <div className="group cursor-default">
                  <h4 className="text-[11px] font-bold uppercase mb-3 text-[#1a1a1a] tracking-[0.2em]">New Delhi, India</h4>
                  <p className="text-lg text-slate-500 font-serif italic leading-relaxed group-hover:text-[#236656] transition-colors">
                    124 Creative Plaza, South Ext.<br />
                    DLF Phase II, 110001
                  </p>
                </div>
              </div>

              {/* Aesthetic Background Watermark */}
              <div className="pt-10 opacity-[0.03] pointer-events-none select-none hidden lg:block">
                 <h2 className="text-9xl font-serif italic leading-none tracking-tighter text-[#236656]">Dialogue</h2>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;