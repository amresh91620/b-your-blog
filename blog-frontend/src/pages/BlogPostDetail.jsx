import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Clock, MessageSquare, Share2, ArrowLeft, Heart, Bookmark, Twitter, Linkedin, Instagram } from 'lucide-react';

const BlogPostDetail = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const yImage = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const post = {
    title: "The Brutalist Revival in Modern Digital Spaces",
    subtitle: "How raw textures and structural honesty are redefining the premium web experience.",
    author: "Siddharth B.",
    role: "Editorial Lead",
    date: "January 12, 2024",
    category: "Architecture & Design",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600",
    content: `Brutalist architecture, once a symbol of post-war reconstruction, is finding a second life in the digital realm. In this deep dive, we explore how raw textures and heavy grids are replacing the soft gradients of the past decade. The philosophy is simple: honesty. Just as concrete buildings show their structural bones, modern web design is moving towards showing the mechanics of the interface. It's a rejection of the hyper-polished, "safe" aesthetics that have dominated our screens for years.`
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen selection:bg-[#1a1a1a] selection:text-white font-serif">
      
      {/* Premium Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#1a1a1a] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation - Minimal & Elegant */}
      <nav className="fixed top-0 w-full bg-[#FDFCFB]/80 backdrop-blur-md z-[90] px-8 py-8 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <button className="flex items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-black/60 hover:text-black transition-all">
            <ArrowLeft size={14} /> Back to Journal
          </button>
          <div className="text-xl font-black tracking-tighter uppercase font-sans italic">The Archive<span className="text-red-600">.</span></div>
          <div className="flex gap-6 items-center">
            <Bookmark size={18} strokeWidth={1.5} className="cursor-pointer hover:fill-black transition-all" />
            <Share2 size={18} strokeWidth={1.5} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-60 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-sans text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-8 block"
          >
            {post.category}
          </motion.span>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[105px] font-medium leading-[0.95] text-[#1a1a1a] tracking-tight mb-12"
          >
            {post.title}
          </motion.h1>

          <motion.p 
            style={{ opacity: opacityText }}
            className="text-xl md:text-2xl font-light text-stone-500 max-w-2xl mx-auto leading-relaxed mb-16 italic"
          >
            "{post.subtitle}"
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 font-sans pt-12 border-t border-stone-200">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">Written by</p>
              <p className="text-sm font-bold uppercase tracking-widest">{post.author}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">Published on</p>
              <p className="text-sm font-bold uppercase tracking-widest">{post.date}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">Time to read</p>
              <p className="text-sm font-bold uppercase tracking-widest">{post.readTime}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Full-bleed parallax image */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-stone-200">
        <motion.img 
          style={{ y: yImage }}
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-[2s]"
        />
      </div>

      {/* Content Layout */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pt-32">
        
        {/* Left Sidebar - Floating Socials */}
        <aside className="hidden lg:block lg:col-span-2">
          <div className="sticky top-40 space-y-12">
            <div className="space-y-8 flex flex-col items-start border-l border-stone-200 pl-6">
              <button onClick={() => setIsLiked(!isLiked)} className="group flex items-center gap-4 hover:translate-x-2 transition-transform">
                <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : "text-stone-300"} />
                <span className="font-sans text-[10px] font-bold tracking-widest">2.4K</span>
              </button>
              <button className="text-stone-300 hover:text-black transition-colors"><Twitter size={20} /></button>
              <button className="text-stone-300 hover:text-black transition-colors"><Linkedin size={20} /></button>
              <button className="text-stone-300 hover:text-black transition-colors"><Instagram size={20} /></button>
            </div>
          </div>
        </aside>

        {/* Main Article Body */}
        <main className="lg:col-span-7 lg:col-start-4">
          <article className="prose prose-stone max-w-none">
            <p className="text-3xl md:text-4xl leading-[1.6] text-stone-800 mb-12 first-letter:text-8xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-black">
              {post.content}
            </p>

            <div className="space-y-12 text-xl text-stone-600 leading-[1.9]">
              <p>
                In the digital landscape, <strong>Brutalism</strong> is a reaction against the artificiality of modern UI. It values truth to materials—in this case, code, grids, and typography. While standard design seeks to comfort the user, Brutalism seeks to awaken them.
              </p>

              <blockquote className="my-20 border-y border-stone-200 py-16 text-center">
                <p className="text-4xl md:text-5xl italic font-medium text-black leading-tight">
                  "Authenticity is the new luxury in a world of infinite filters."
                </p>
                <cite className="font-sans text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-8 block">— Editorial Studio</cite>
              </blockquote>

              <p>
                The future of the premium web isn't more animations or flashier colors. It's about clarity. It's about building spaces that feel permanent in a world that is increasingly ephemeral.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-24 flex gap-3">
              {['Design', 'Digital Art', 'Brutalism', 'UI/UX'].map(tag => (
                <span key={tag} className="px-4 py-1.5 border border-stone-200 font-sans text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Elegant Newsletter/Comment Section */}
          <section className="mt-40 border-t border-stone-900 pt-24 pb-32">
            <h3 className="text-5xl font-medium mb-12 tracking-tighter">The Conversation<span className="text-stone-300"> (12)</span></h3>
            <div className="relative">
              <textarea 
                placeholder="Leave your thoughts..."
                className="w-full bg-transparent border-b border-stone-200 py-4 text-2xl font-light focus:border-black outline-none transition-colors resize-none h-32"
              />
              <button className="mt-8 font-sans text-[11px] font-black uppercase tracking-[0.5em] bg-black text-white px-10 py-5 hover:bg-stone-800 transition-all">
                Publish Thought
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* Recommended Posts - Clean Grid */}
      <section className="bg-stone-100 py-40">
        <div className="max-w-screen-2xl mx-auto px-10">
          <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.6em] text-stone-400 mb-20 text-center">Next in Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + (i*1000)}?q=80&w=800`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    alt="Read next"
                  />
                </div>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-4">Design / Vol 0{i}</p>
                <h4 className="text-3xl leading-snug font-medium group-hover:underline underline-offset-8 transition-all">
                  The Architecture of Minimalist Living Spaces
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-stone-200">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400">
          © 2024 The Archive Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default BlogPostDetail;