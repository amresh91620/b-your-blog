import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Minus } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#fafafa] text-slate-900 selection:bg-indigo-500 selection:text-white">

      {/* 1. HERO: The Statement */}
      <section className="relative pt-32 pb-16 md:pt-15 md:pb-24 px-6 lg:px-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6 text-indigo-600"
              >
                <Minus size={20} strokeWidth={3} />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase">Est. 2025</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter"
              >
                Stories that <br /> <span className="text-slate-300">Resonate.</span>
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4"
            >
              <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-light max-w-xs">
                B-Your Blog is a curated digital space where writers, thinkers, and creators converge. 
                Our mission is to deliver content that informs, inspires, and engages readers in thoughtful dialogue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VISION: Visual & Stat Blend */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with Premium Border */}
          <div className="relative p-4 border border-slate-100 rounded-sm">
            <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80" 
                alt="Workspace" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0a0a0a] text-white p-6 hidden md:block">
              <p className="text-[24px] font-serif italic">120K+</p>
              <p className="text-[9px] tracking-widest uppercase opacity-50">Global Readers</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-serif italic leading-tight">Authenticity over Trends.</h2>
            <p className="text-sm text-slate-500 leading-loose font-light">
              We started with a simple belief: the world doesn't need more content; it needs more <span className="text-indigo-600 font-medium">context</span>. 
              Every article, review, and opinion piece is carefully curated to provide insight and value to our readers.
            </p>
            <p className="text-sm text-slate-500 leading-loose font-light">
              At B-Your Blog, writers are encouraged to explore topics deeply, whether it's technology, lifestyle, culture, or philosophy. 
              Readers are not just consumers—they are part of a growing community of thoughtful individuals engaging in meaningful conversation.
            </p>
            <div className="flex gap-12 pt-4">
               <div>
                  <p className="text-xl font-bold tracking-tight text-slate-900">1.5K+</p>
                  <p className="text-[9px] tracking-widest uppercase text-slate-400">Editions Published</p>
               </div>
               <div>
                  <p className="text-xl font-bold tracking-tight text-slate-900">42</p>
                  <p className="text-[9px] tracking-widest uppercase text-slate-400">Contributors Worldwide</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-20 bg-white border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            { t: "Intellect", d: "We provide research-driven insights and original perspectives on a wide range of subjects." },
            { t: "Design", d: "Every post is designed to be visually engaging, enhancing readability and experience." },
            { t: "Community", d: "We foster discussions between readers and writers across diverse topics and cultures." }
          ].map((item, i) => (
            <div key={i} className="py-8 md:py-0 md:px-12 first:pl-0">
              <span className="text-[10px] font-black text-indigo-600 tracking-widest">0{i+1}</span>
              <h4 className="text-lg font-bold uppercase mt-4 mb-2 tracking-tight">{item.t}</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TEAM */}
      <section className="py-10 px-6 lg:px-5 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-serif italic mb-2">The Team Behind B-Your Blog</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light max-w-xl">
              Our team is composed of passionate writers, editors, and strategists dedicated to creating high-quality content and engaging experiences for our readers. Each member brings unique expertise to make B-Your Blog a trusted platform.
            </p>
            <div className="h-[1px] w-20 bg-indigo-600 mt-4" />
          </div>

          <div className="space-y-1">
            {[
              { n: "Siddharth B.", r: "Founder & Editor" },
              { n: "Elena Rossi", r: "Creative Director" },
              { n: "Marcus Thorne", r: "Strategy & Tech" },
              { n: "Sarah Jenkins", r: "Content Lead" }
            ].map((person, i) => (
              <div 
                key={i} 
                className="group flex justify-between items-center py-6 border-b border-slate-200 hover:border-indigo-500 transition-all duration-500"
              >
                <div>
                  <h3 className="text-xl md:text-xl font-serif italic text-slate-400 group-hover:text-slate-900 transition-colors">
                    {person.n}
                  </h3>
                  <p className="text-[9px] font-black tracking-widest uppercase text-indigo-500/50 group-hover:text-indigo-500">
                    {person.r}
                  </p>
                </div>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-indigo-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
