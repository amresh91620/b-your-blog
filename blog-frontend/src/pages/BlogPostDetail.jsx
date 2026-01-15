import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, MessageSquare, Share2, Heart, User, Calendar, Send, Twitter, Linkedin, Instagram, ArrowLeft, Bookmark } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  
  const post = {
    title: "The Brutalist Revival in Modern Digital Spaces",
    subtitle: "How raw textures and structural honesty are redefining the premium web experience.",
    author: "Siddharth B.",
    date: "Jan 12, 2026",
    category: "Architecture",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600",
    content: postContent()
  };

  return (
    <div className="bg-[#FDFCF8] min-h-screen selection:bg-[#236656] selection:text-white overflow-x-hidden">      
      {/* Hero Section */}
      <header className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            className="w-full h-full object-cover opacity-50 md:opacity-50 grayscale-[0.2]" 
            alt="Hero" 
          />
          {/* Stronger Gradient for clear text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-black/30 to-black/10" />
        </div>

        <div className="relative h-full flex items-end container mx-auto px-5 md:px-10 pb-10 md:pb-16">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {/* Category Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#1ee2b4]"></span>
                <span className="text-[#1ee2b4] text-xs font-black uppercase tracking-[0.3em] drop-shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Main Title - Crystal Clear */}
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight md:leading-[1.1] tracking-tight mb-8 drop-shadow-xl">
                {post.title}
              </h1>

              {/* Metadata - Fixed Blurriness */}
              <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-white border-t border-white/20 pt-8 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1ee2b4] flex items-center justify-center text-black font-bold text-sm">SB</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter opacity-70 leading-none mb-1">Written by</p>
                    <p className="text-sm font-bold tracking-tight">{post.author}</p>
                  </div>
                </div>
                
                <div className="h-8 w-[1px] bg-white/20 hidden sm:block"></div>

                <div>
                  <p className="text-[10px] uppercase tracking-tighter opacity-70 leading-none mb-1">Published on</p>
                  <p className="text-sm font-bold tracking-tight flex items-center gap-2">
                    <Calendar size={14} className="text-[#1ee2b4]" /> {post.date}
                  </p>
                </div>

                <div className="h-8 w-[1px] bg-white/20 hidden sm:block"></div>

                <div>
                  <p className="text-[10px] uppercase tracking-tighter opacity-70 leading-none mb-1">Reading time</p>
                  <p className="text-sm font-bold tracking-tight flex items-center gap-2">
                    <Clock size={14} className="text-[#1ee2b4]" /> {post.readTime}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24">
        
        {/* Social Interaction (Desktop) */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 flex flex-col items-center gap-8 border-r border-slate-100 pr-10">
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className={`group flex flex-col items-center gap-2 transition-all ${isLiked ? 'text-red-500' : 'text-slate-300 hover:text-slate-900'}`}
            >
              <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
              <span className="text-[10px] font-bold uppercase">2.4k</span>
            </button>
            <div className="w-4 h-[1px] bg-slate-200"></div>
            <Twitter size={20} className="text-slate-300 hover:text-[#236656] cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-slate-300 hover:text-[#236656] cursor-pointer transition-colors" />
          </div>
        </aside>

        {/* Article Content */}
        <main className="lg:col-span-8 lg:col-start-3">
          <article>
            <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-snug mb-12 italic border-l-4 border-[#1ee2b4] pl-6 md:pl-10">
              {post.subtitle}
            </p>
            
            <div className="font-serif text-lg md:text-xl text-slate-700 leading-[1.8] space-y-8">
              {post.content}
            </div>
          </article>

          {/* Comment System */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="flex items-center gap-4 mb-10">
              <MessageSquare size={28} className="text-[#236656]" />
              <h3 className="text-3xl font-serif">Dialogue</h3>
            </div>
            
            <div className="bg-white border border-slate-200 p-1 rounded-2xl mb-12 shadow-sm focus-within:ring-2 ring-[#1ee2b4]/20 transition-all">
              <textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your perspective..." 
                className="w-full bg-transparent border-none resize-none p-5 text-slate-700 outline-none min-h-[120px]"
              />
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Posting as Guest</span>
                <button className="bg-[#236656] text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#236656]/20">
                  Send <Send size={14} />
                </button>
              </div>
            </div>

            {/* Simple Threaded Comments */}
            <div className="space-y-10">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex-shrink-0 border border-slate-200 flex items-center justify-center font-bold text-slate-400">R</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">Reader_{i}</h4>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Jan 14, 2026</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[15px]">
                      This is a masterclass in modern digital philosophy. The way you described the "honesty" of Brutalism really clicked for me.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Related Blogs Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-24">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
                Related <span className="italic font-light text-[#1ee2b4]">Stories</span>
              </h2>
              <p className="text-slate-600 font-serif italic">Continue exploring our curated collection</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedBlogs.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#236656] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl md:text-2xl font-serif text-[#1a1a1a] group-hover:text-[#236656] transition-colors leading-tight mb-2">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#236656] mt-4">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
          <div className="flex gap-8">
          </div>
        </div>
      </footer>
    </div>
  );
};

const postContent = () => (
  <>
    Brutalist architecture, once a symbol of post-war reconstruction, is finding a second life in the digital realm. In this deep dive, we explore how raw textures and heavy grids are replacing the soft gradients of the past decade.
    <br /><br />
    The philosophy is simple: honesty. Just as concrete buildings show their structural bones, modern web design is moving towards showing the mechanics of the interface. It's a rejection of the hyper-polished, "safe" aesthetics that have dominated our screens for years.
  </>
);

const relatedBlogs = [
  { id: 2, title: "The Ethics of Neural Networks", category: "Tech", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600" },
  { id: 3, title: "Digital Minimalism in Global Noise", category: "Culture", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600" },
  { id: 4, title: "Psychology of Space & Color", category: "Design", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600" },
];

export default BlogPostDetail;