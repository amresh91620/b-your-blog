import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, Minus, BookOpen, Clock } from 'lucide-react';

const blogs = [
  { 
    id: 1, 
    category: "Architecture", 
    title: "The Brutalist Revival in Modern Digital Spaces", 
    excerpt: "Exploring how heavy textures and raw materials are making a comeback in web aesthetics.",
    date: "Jan 12", 
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800",
    color: "bg-emerald-50"
  },
  { 
    id: 2, 
    category: "Design", 
    title: "Intentionality: Why Less is More in UI", 
    excerpt: "The psychological impact of negative space in high-end interface design.",
    date: "Jan 10", 
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600",
    color: "bg-orange-50"
  },
  { 
    id: 3, 
    category: "Tech", 
    title: "The Ethics of Neural Networks", 
    excerpt: "Discussing the boundary between human creativity and algorithmic generation.",
    date: "Jan 08", 
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600",
    color: "bg-blue-50"
  },
  { 
    id: 4, 
    category: "Culture", 
    title: "Digital Minimalism in the Age of Noise", 
    excerpt: "How to maintain focus in a world designed to capture your every second.",
    date: "Jan 05", 
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600",
    color: "bg-stone-100"
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pt-32 pb-20 selection:bg-[#2d4a43] selection:text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* HEADER SECTION - Soft Colors */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#2d4a43] mb-4">
                <Minus size={24} strokeWidth={3} />
                <span className="text-[11px] font-black tracking-[0.4em] uppercase">Volume 01 — Archive</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#1a1a1a]">
                Latest <span className="italic font-light text-[#2d4a43]">Stories.</span>
              </h1>
              <p className="mt-6 text-slate-500 font-medium uppercase text-[10px] tracking-[0.2em] max-w-sm leading-relaxed">
                A curated collection of thoughts on design, technology, and the future of digital culture.
              </p>
            </div>

            <div className="flex items-center bg-white border border-black/5 rounded-full px-6 py-3 shadow-sm group focus-within:ring-1 ring-[#2d4a43]/20 transition-all">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Find a topic..." 
                className="bg-transparent outline-none px-4 font-sans text-sm w-full md:w-48 placeholder:text-slate-300"
              />
            </div>
          </motion.div>
        </header>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {blogs.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${index === 0 ? 'lg:col-span-12 flex flex-col lg:flex-row' : 'lg:col-span-6'} group bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500`}
            >
              {/* Image Section */}
              <div className={`${index === 0 ? 'lg:w-3/5 h-[400px]' : 'h-64'} relative overflow-hidden`}>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#2d4a43] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-8 lg:p-10 flex flex-col justify-between ${index === 0 ? 'lg:w-2/5' : ''} ${post.color}/30`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    <Clock size={12} /> <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>5 MIN READ</span>
                  </div>
                  <h2 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-serif leading-tight text-[#1a1a1a] group-hover:text-[#2d4a43] transition-colors`}>
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#2d4a43]">
                    <BookOpen size={14} />
                    <span>Read Article</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#2d4a43] group-hover:text-white transition-all">
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEWSLETTER SECTION - Added color punch */}
        <section className="mt-32 p-12 bg-[#2d4a43] rounded-3xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-serif italic">Subscribe to the archive.</h2>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">No spam, just pure intellectual substance.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input type="email" placeholder="email@example.com" className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white text-sm outline-none focus:bg-white/20 w-full md:w-64" />
              <button className="bg-white text-[#2d4a43] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-stone-100 transition-colors">Join</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
        </section>

      </div>
    </div>
  );
};

export default BlogPage;