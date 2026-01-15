import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus, Quote, Fingerprint, Sparkles, Feather } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#FDFCF8] text-[#1a1a1a] selection:bg-[#236656] selection:text-white min-h-screen font-sans">
      
      {/* Global Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* 1. HERO SECTION: Refined Typography */}
        <section className="relative pt-28 pb-16 border-b border-[#1a1a1a]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-[#94745c]"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Est. MMXXIV</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]"
              >
                The <br /> 
                <span className="italic font-light text-[#1ee2b4]">Manifesto.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4 lg:pb-4"
            >
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-serif italic border-l-2 border-[#1ee2b4] pl-6">
                "B-Your Blog is a curated digital anthology where human creativity meets industrial precision. We believe in the power of slow-form content."
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. VISION & STATS: Enhanced with Theme Colors */}
        <section className="py-24 border-b border-[#1a1a1a]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden bg-white relative group rounded-2xl shadow-2xl shadow-[#236656]/5">
                <img 
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80" 
                  alt="Minimal Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                {/* Decorative Frame match with Hero */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#1ee2b4] rounded-tr-xl pointer-events-none" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 bg-[#236656] text-[#FDFCF8] p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-serif italic text-[#1ee2b4] leading-none">120K+</p>
                <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-white/60 mt-3">Monthly Readers</p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 space-y-10">
              <div className="space-y-4">
                <Sparkles className="text-[#1ee2b4]" size={32} />
                <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] leading-tight tracking-tighter">
                  Substance <span className="italic font-light text-[#236656]">over</span> Noise.
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-serif italic">
                In an era of infinite scrolls, we choose <span className="text-[#1a1a1a] not-italic font-bold border-b-2 border-[#1ee2b4]">intentionality</span>. Every article is a deep dive, every visual is curated, and every story is designed to last.
              </p>
              
              <div className="flex gap-16 pt-10 border-t border-[#1a1a1a]/5">
                  <div>
                    <p className="text-3xl font-bold text-[#1a1a1a] tracking-tighter uppercase">1.5K</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#236656] font-bold mt-1">Volumes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#1a1a1a] tracking-tighter uppercase">42</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#236656] font-bold mt-1">Thinkers</p>
                  </div>
                  <Fingerprint className="text-[#1ee2b4]/30 ml-auto" size={48} strokeWidth={1} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES: High-End Hover Effects */}
        <section className="py-24 border-b border-[#1a1a1a]/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Intellect", d: "Research-driven insights on complex subjects that define our generation." },
              { t: "Engineering", d: "Visual architecture designed to maximize clarity and focus for the modern reader." },
              { t: "Legacy", d: "Content that remains relevant long after the ephemeral trends have faded away." }
            ].map((item, i) => (
              <div key={i} className="group relative pt-12 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-[#236656]/5 transition-all duration-500">
                <span className="absolute top-4 left-8 text-7xl font-serif italic text-[#1ee2b4]/10 group-hover:text-[#1ee2b4]/20 transition-colors">
                  0{i+1}
                </span>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#94745c]">{item.t}</h4>
                  <p className="text-base text-slate-600 leading-relaxed font-serif italic">{item.d}</p>
                  <div className="h-[2px] w-8 bg-[#236656] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TEAM SECTION: Interactive & Clean */}
        <section className="py-24 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-6">
               <h2 className="text-5xl font-serif text-[#1a1a1a] tracking-tighter">The <br /> <span className="italic text-[#1ee2b4]">Bureau.</span></h2>
               <div className="h-[3px] w-12 bg-[#236656]" />
               <p className="text-[10px] text-[#94745c] font-bold uppercase tracking-[0.4em]">Curators of Digital Culture.</p>
            </div>
            
            <div className="lg:col-span-8 divide-y divide-[#1a1a1a]/5 border-t border-[#1a1a1a]/5">
              {[
                { n: "Amresh Kumar", r: "FOUNDER & CHIEF EDITOR" },
                { n: "Elena Rossi", r: "CREATIVE ARCHITECT" },
                { n: "Sarah Jenkins", r: "HEAD OF NARRATIVE" }
              ].map((person, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 16 }}
                  className="group flex justify-between items-center py-8 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h3 className="text-3xl md:text-4xl font-serif text-slate-300 group-hover:text-[#236656] transition-all duration-500">
                      {person.n}
                    </h3>
                    <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1ee2b4] opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {person.r}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[9px] font-bold text-slate-300 group-hover:text-[#94745c] transition-colors uppercase tracking-[0.3em]">View Bio</span>
                    <div className="w-12 h-12 rounded-full border border-[#1a1a1a]/5 flex items-center justify-center group-hover:bg-[#236656] transition-all duration-500">
                      <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#1ee2b4] group-hover:rotate-45 transition-all" />
                    </div>
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