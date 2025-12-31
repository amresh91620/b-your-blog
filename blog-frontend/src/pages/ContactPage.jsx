import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Mail, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#fafafa] text-slate-900 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* 1. HERO: The Inquiry */}
      <section className="relative pt-32 pb-16 md:pt-20 md:pb-24 px-6 lg:px-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6 text-indigo-600"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase">Connect With Us</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter"
              >
                Let’s start a <br /> <span className="text-slate-300">Dialogue.</span>
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4"
            >
              <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-light max-w-xs">
                Whether you have a story to tell, a question to ask, or a collaboration in mind, our doors are always open.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT: Form & Info */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Editorial Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Send a Message</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 transition-colors group-focus-within:text-indigo-600">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-indigo-500 transition-colors font-serif italic" placeholder="e.g. Julian Ross" />
                </div>
                <div className="group relative">
                  <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 transition-colors group-focus-within:text-indigo-600">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-indigo-500 transition-colors font-serif italic" placeholder="hello@example.com" />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 transition-colors group-focus-within:text-indigo-600">Subject</label>
                <select className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-indigo-500 transition-colors font-serif italic appearance-none">
                  <option>General Inquiry</option>
                  <option>Story Submission</option>
                  <option>Partnership</option>
                  <option>Advertising</option>
                </select>
              </div>

              <div className="group relative">
                <label className="text-[9px] font-black tracking-widest uppercase text-slate-400 transition-colors group-focus-within:text-indigo-600">Your Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-indigo-500 transition-colors font-serif italic resize-none" placeholder="Write your thoughts here..."></textarea>
              </div>

              <button className="group flex items-center gap-4 text-[11px] font-black tracking-[0.3em] uppercase bg-[#0a0a0a] text-white px-10 py-5 hover:bg-indigo-600 transition-all duration-500">
                Send Message
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Contact Details */}
          <div className="lg:pl-20 space-y-20">
            {/* Quick Contact */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Direct Contact</h3>
              <div className="space-y-6">
                <a href="mailto:hello@b-yourblog.com" className="group flex items-center gap-6 p-6 border border-slate-100 bg-white hover:border-indigo-200 transition-all">
                  <div className="p-3 bg-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase">Email Us</p>
                    <p className="text-sm font-serif italic">hello@b-yourblog.com</p>
                  </div>
                </a>
                <div className="group flex items-center gap-6 p-6 border border-slate-100 bg-white hover:border-indigo-200 transition-all">
                  <div className="p-3 bg-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase">Social Media</p>
                    <p className="text-sm font-serif italic">@byour_blog</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bureau Locations */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Our Bureaus</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-tight">Main Hub</p>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-light mt-2 italic font-serif">
                    124 Creative Plaza,<br />New Delhi, India
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-tight">Digital Bureau</p>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-light mt-2 italic font-serif">
                    Available Everywhere<br />b-yourblog.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;