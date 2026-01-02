import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Quote, Fingerprint, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#fafafa] text-slate-900 selection:bg-orange-500 selection:text-white min-h-screen font-sans">
      
      {/* Global Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* 1. HERO SECTION: Editorial Header */}
        <section className="relative pt-24 pb-16 border-b border-slate-200 bg-white -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-6 text-orange-600"
                >
                  <Minus size={24} strokeWidth={4} />
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase">Est. MMXXIV</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-slate-900 uppercase"
                >
                  The <br /> 
                  <span className="font-serif italic font-light text-orange-500">Manifesto.</span>
                </motion.h1>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-4 lg:pb-4"
              >
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium border-l-2 border-orange-500 pl-6 uppercase tracking-wider">
                  B-Your Blog is a curated digital anthology where human creativity meets industrial precision.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. VISION & STATS: Refined Layout */}
        <section className="py-24 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80" 
                  alt="Minimal Workspace" 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.15)]">
                <p className="text-4xl font-serif italic text-orange-500 leading-none">120K+</p>
                <p className="text-[9px] tracking-[0.3em] uppercase font-black text-slate-400 mt-2">Active Readers</p>
                <Globe className="absolute top-2 right-2 text-white/5" size={40} />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 space-y-10">
              <div className="space-y-4">
                <Quote className="text-orange-500 opacity-20" size={48} />
                <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                  Substance <br /> <span className="font-serif italic font-light lowercase text-orange-500">over</span> Noise.
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                In an era of infinite scrolls, we choose <span className="text-slate-900 underline decoration-orange-500 decoration-2 underline-offset-8">intentionality</span>. Every article is a deep dive, every visual is engineered, and every story is a legacy.
              </p>
              
              <div className="flex gap-16 pt-8 border-t border-slate-100 w-fit">
                  <div>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">1.5K</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-orange-500 font-bold mt-1">Volumes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">42</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-orange-500 font-bold mt-1">Thinkers</p>
                  </div>
                  <Fingerprint className="text-slate-100" size={50} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES: Sharp Minimalist Grid */}
        <section className="py-24 border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Intellect", d: "Research-driven insights on complex subjects that define our generation." },
              { t: "Engineering", d: "Visual architecture designed to maximize clarity and focus." },
              { t: "Legacy", d: "Content that remains relevant long after the trends have faded." }
            ].map((item, i) => (
              <div key={i} className="group relative pt-12">
                <span className="absolute top-0 left-0 text-7xl font-black text-slate-50 group-hover:text-orange-100/50 transition-colors duration-500 select-none">
                  0{i+1}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-orange-600">{item.t}</h4>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">{item.d}</p>
                  <div className="mt-6 h-[1px] w-12 bg-slate-900 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TEAM SECTION: The Bureau */}
        <section className="py-24 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">The <br /> Bureau.</h2>
               <div className="h-1 w-12 bg-orange-500 mt-4" />
               <p className="text-[11px] text-slate-400 mt-6 font-bold uppercase tracking-[0.3em]">Curators of Digital Culture.</p>
            </div>
            
            <div className="lg:col-span-8 divide-y divide-slate-200">
              {[
                { n: "Siddharth B.", r: "FOUNDER & CHIEF EDITOR" },
                { n: "Elena Rossi", r: "CREATIVE ARCHITECT" },
                { n: "Marcus Thorne", r: "CULTURAL STRATEGIST" },
                { n: "Sarah Jenkins", r: "HEAD OF NARRATIVE" }
              ].map((person, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 15 }}
                  className="group flex justify-between items-center py-8 cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <h3 className="text-3xl md:text-4xl font-serif italic text-slate-400 group-hover:text-slate-900 transition-all duration-300">
                      {person.n}
                    </h3>
                    <p className="text-[10px] font-black tracking-[0.4em] uppercase text-orange-500 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                      {person.r}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-300 group-hover:text-orange-500 transition-colors uppercase tracking-widest">Profile</span>
                    <ArrowUpRight size={28} className="text-slate-200 group-hover:text-orange-500 group-hover:rotate-45 transition-all duration-500" />
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