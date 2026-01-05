import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Quote, Fingerprint, Globe, Feather } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#2d4a43] selection:text-white min-h-screen font-sans">
      
      {/* Global Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* 1. HERO SECTION: Spacing Reduced & Color Synced */}
        <section className="relative pt-24 pb-12 border-b border-black/5 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4 text-[#2d4a43]"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase">Est. MMXXIV</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#1a1a1a]"
              >
                The <br /> 
                <span className="italic font-light text-[#2d4a43]">Manifesto.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4 lg:pb-2"
            >
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium border-l border-[#2d4a43] pl-6 uppercase tracking-wider">
                B-Your Blog is a curated digital anthology where human creativity meets industrial precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. VISION & STATS: Tightened layout */}
        <section className="py-16 border-b border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden bg-white relative group border border-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80" 
                  alt="Minimal Workspace" 
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#2d4a43]/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Floating Stat Card - More Minimal */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] text-white p-6 shadow-xl">
                <p className="text-3xl font-serif italic text-[#2d4a43] leading-none">120K+</p>
                <p className="text-[8px] tracking-[0.2em] uppercase font-black text-slate-400 mt-2">Active Readers</p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 space-y-8">
              <div className="space-y-3">
                <Quote className="text-[#2d4a43] opacity-20" size={40} />
                <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
                  Substance <span className="italic font-light text-[#2d4a43]">over</span> Noise.
                </h2>
              </div>
              
              <p className="text-base text-slate-600 leading-relaxed max-w-lg">
                In an era of infinite scrolls, we choose <span className="text-[#1a1a1a] font-bold border-b border-[#2d4a43]">intentionality</span>. Every article is a deep dive, every visual is engineered, and every story is a legacy.
              </p>
              
              <div className="flex gap-12 pt-6 border-t border-black/5 w-fit">
                  <div>
                    <p className="text-2xl font-bold text-[#1a1a1a] tracking-tighter uppercase">1.5K</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#2d4a43] font-black mt-1">Volumes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1a1a1a] tracking-tighter uppercase">42</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#2d4a43] font-black mt-1">Thinkers</p>
                  </div>
                  <Fingerprint className="text-slate-200" size={40} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES: Reduced vertical padding */}
        <section className="py-16 border-b border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Intellect", d: "Research-driven insights on complex subjects that define our generation." },
              { t: "Engineering", d: "Visual architecture designed to maximize clarity and focus." },
              { t: "Legacy", d: "Content that remains relevant long after the trends have faded." }
            ].map((item, i) => (
              <div key={i} className="group relative pt-10">
                <span className="absolute top-0 left-0 text-6xl font-black text-black/[0.03] group-hover:text-[#2d4a43]/5 transition-colors duration-500">
                  0{i+1}
                </span>
                <div className="relative z-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#2d4a43]">{item.t}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
                  <div className="mt-4 h-[1px] w-8 bg-[#1a1a1a] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TEAM SECTION: Compact & Refined */}
        <section className="py-16 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
               <h2 className="text-4xl font-serif text-[#1a1a1a]">The <br /> <span className="italic text-[#2d4a43]">Bureau.</span></h2>
               <div className="h-[2px] w-10 bg-[#2d4a43] mt-4" />
               <p className="text-[9px] text-slate-400 mt-4 font-black uppercase tracking-[0.3em]">Curators of Digital Culture.</p>
            </div>
            
            <div className="lg:col-span-8 divide-y divide-black/5 border-t border-black/5">
              {[
                { n: "Siddharth B.", r: "FOUNDER & CHIEF EDITOR" },
                { n: "Elena Rossi", r: "CREATIVE ARCHITECT" },
                { n: "Sarah Jenkins", r: "HEAD OF NARRATIVE" }
              ].map((person, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="group flex justify-between items-center py-6 cursor-pointer"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-slate-300 group-hover:text-[#1a1a1a] transition-all duration-300">
                      {person.n}
                    </h3>
                    <p className="text-[8px] font-black tracking-[0.3em] uppercase text-[#2d4a43] mt-1 opacity-0 group-hover:opacity-100 transition-all">
                      {person.r}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold text-slate-300 group-hover:text-[#2d4a43] transition-colors uppercase tracking-widest">Profile</span>
                    <ArrowUpRight size={20} className="text-slate-200 group-hover:text-[#2d4a43] group-hover:rotate-45 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;