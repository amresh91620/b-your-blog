import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, Minus, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  { 
    id: 1, 
    category: "Architecture", 
    title: "The Brutalist Revival in Modern Digital Spaces", 
    excerpt: "Exploring how heavy textures and raw materials are making a comeback in web aesthetics, moving away from flat design into something more tactile.",
    date: "Jan 12", 
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800",
    readTime: "8 MIN READ"
  },
  { 
    id: 2, 
    category: "Design", 
    title: "Intentionality: Why Less is More in UI", 
    excerpt: "The psychological impact of negative space in high-end interface design and how it drives focus.",
    date: "Jan 10", 
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600",
    readTime: "5 MIN READ"
  },
  { 
    id: 3, 
    category: "Tech", 
    title: "The Ethics of Neural Networks", 
    excerpt: "Discussing the boundary between human creativity and algorithmic generation in the 2026 landscape.",
    date: "Jan 08", 
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600",
    readTime: "12 MIN READ"
  },
  { 
    id: 4, 
    category: "Culture", 
    title: "Digital Minimalism in the Age of Noise", 
    excerpt: "How to maintain focus in a world designed to capture your every second through intentional habits.",
    date: "Jan 05", 
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600",
    readTime: "6 MIN READ"
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#FDFCF8] min-h-screen pt-32 pb-20 selection:bg-[#236656] selection:text-white font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HEADER SECTION */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3 text-[#94745c]">
                <Minus size={24} strokeWidth={3} />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Volume 01 — Archive</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter text-[#1a1a1a]">
                Latest <span className="italic font-light text-[#1ee2b4]">Stories.</span>
              </h1>
              <p className="text-slate-500 font-serif italic text-lg max-w-md border-l-2 border-[#1ee2b4] pl-6">
                A curated digital anthology on design, technology, and the evolving landscape of culture.
              </p>
            </div>

            {/* Search Bar - Refined */}
            <div className="flex items-center bg-white border border-[#1a1a1a]/5 rounded-full px-6 py-4 shadow-sm group focus-within:border-[#236656] transition-all w-full md:w-80">
              <Search size={18} className="text-[#94745c]" />
              <input 
                type="text" 
                placeholder="Search the archive..." 
                className="bg-transparent outline-none px-4 font-sans text-sm w-full placeholder:text-slate-300"
              />
            </div>
          </motion.div>
        </header>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {blogs.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`${index === 0 ? 'lg:col-span-12 flex flex-col lg:flex-row' : 'lg:col-span-6'} group bg-white border border-[#1a1a1a]/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#236656]/5 transition-all duration-700`}
            >
              {/* Image Section */}
              <div className={`${index === 0 ? 'lg:w-[60%] h-[450px]' : 'h-72'} relative overflow-hidden`}>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#236656] text-[#FDFCF8] px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-10 flex flex-col justify-between ${index === 0 ? 'lg:w-[40%]' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#94745c] text-[9px] font-bold uppercase tracking-[0.2em]">
                    <Clock size={12} className="text-[#1ee2b4]" /> 
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1ee2b4]"></span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className={`${index === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'} font-serif leading-tight text-[#1a1a1a] group-hover:text-[#236656] transition-colors duration-500`}>
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-500 text-base leading-relaxed line-clamp-3 font-serif italic">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-[#1a1a1a]/5 flex items-center justify-between">
                  <Link to={`/blogs/${post.id}`} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]">
                    <span className="relative pb-1">
                      Read Entry
                      <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1ee2b4] group-hover:w-full transition-all duration-700" />
                    </span>
                  </Link>
                  <Link to={`/blogs/${post.id}`} className="w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:bg-[#236656] group-hover:border-[#236656] transition-all duration-500">
                    <ArrowUpRight size={20} className="text-[#236656] group-hover:text-[#1ee2b4] group-hover:rotate-45 transition-all duration-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;