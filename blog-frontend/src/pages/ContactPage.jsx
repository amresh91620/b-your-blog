import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Mail, Instagram, Send, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#fafafa] text-slate-900 selection:bg-orange-500 selection:text-white min-h-screen font-sans">
      
      {/* Global Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* 1. HERO SECTION: Editorial Impact */}
        <section className="pt-32 pb-20 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8 text-orange-600"
              >
                <Minus size={24} strokeWidth={4} />
                <span className="text-[11px] font-black tracking-[0.5em] uppercase">Contact Bureau</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-slate-900 uppercase"
              >
                Start a <br /> 
                <span className="font-serif italic font-light lowercase text-orange-500">Dialogue.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 lg:pt-24"
            >
              <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium border-l-2 border-orange-500 pl-8 uppercase tracking-wider">
                Our editorial team is ready to listen. Whether it's a submission or a strategic inquiry, we value the human connection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. MAIN CONTENT: High Contrast Form & Info */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Line-Style Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="mb-16 flex items-center gap-4">
                <Send className="text-orange-500" size={20} />
                <div>
                    <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-slate-400">Electronic Mail</h3>
                    <p className="text-2xl font-serif italic text-slate-900">Send us a digital transmission</p>
                </div>
              </div>

              <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="group">
                    <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-orange-500 transition-colors">Nominal Name</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-orange-500 transition-all font-medium text-xl text-slate-900 placeholder:text-slate-200" placeholder="Alex Rivers" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-orange-500 transition-colors">Registry Email</label>
                    <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-orange-500 transition-all font-medium text-xl text-slate-900 placeholder:text-slate-200" placeholder="hello@studio.com" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-orange-500 transition-colors">Subject of Inquiry</label>
                  <select className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-orange-500 transition-all font-serif italic text-xl text-slate-900 appearance-none cursor-pointer">
                    <option>General Transmission</option>
                    <option>Editorial Submission</option>
                    <option>Partnership Proposal</option>
                    <option>Bug Report</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-2 group-focus-within:text-orange-500 transition-colors">Message Context</label>
                  <textarea rows="4" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-orange-500 transition-all font-medium text-xl text-slate-900 resize-none placeholder:text-slate-200" placeholder="Write your narrative here..."></textarea>
                </div>

                {/* Themed Button */}
                <button className="relative overflow-hidden group bg-slate-900 text-white px-12 py-7 flex items-center gap-6 shadow-2xl active:scale-95 transition-all">
                  <span className="relative z-10 text-[11px] font-black tracking-[0.4em] uppercase">Initialize Transmission</span>
                  <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-orange-500" />
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </motion.div>

            {/* Right Column: Bold Info Blocks */}
            <div className="lg:col-span-5 space-y-16 lg:border-l lg:border-slate-100 lg:pl-16">
              
              <div className="space-y-8">
                <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-slate-400">Direct Access</h3>
                
                <a href="mailto:hello@b-yourblog.com" className="flex items-center justify-between p-8 bg-white border border-slate-100 group hover:border-orange-500 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                   <div>
                      <p className="text-[9px] font-black tracking-[0.2em] text-orange-500 uppercase mb-1">Send Mail</p>
                      <p className="font-serif text-xl italic text-slate-900">hello@b-your.com</p>
                   </div>
                   <Mail size={24} className="text-slate-200 group-hover:text-orange-500 transition-colors" />
                </a>

                <a href="#" className="flex items-center justify-between p-8 bg-white border border-slate-100 group hover:border-orange-500 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                   <div>
                      <p className="text-[9px] font-black tracking-[0.2em] text-orange-500 uppercase mb-1">Instagram Portfolio</p>
                      <p className="font-serif text-xl italic text-slate-900">@byour_journal</p>
                   </div>
                   <Instagram size={24} className="text-slate-200 group-hover:text-orange-500 transition-colors" />
                </a>
              </div>

              {/* Physical Locations */}
              <div className="pt-12 border-t border-slate-100 space-y-10">
                <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-orange-500" />
                    <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-slate-400">Bureaus</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-12">
                  <div className="group">
                    <h4 className="text-[11px] font-black uppercase mb-3 text-slate-900 tracking-widest">HQ — New Delhi</h4>
                    <p className="text-lg text-slate-500 font-serif italic leading-relaxed group-hover:text-slate-900 transition-colors">
                      124 Creative Plaza, South Ext.<br />
                      DLF Phase II, 110001
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-[11px] font-black uppercase mb-3 text-slate-900 tracking-widest">Digital Archive</h4>
                    <p className="text-lg text-slate-500 font-serif italic group-hover:text-slate-900 transition-colors">
                      Always Operating / Cloud Based<br />
                      Response Time: &lt; 24 Hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Watermark for Right Column */}
              <div className="pt-10 opacity-[0.03] pointer-events-none select-none">
                 <h2 className="text-9xl font-black uppercase leading-none tracking-tighter">Talk</h2>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;