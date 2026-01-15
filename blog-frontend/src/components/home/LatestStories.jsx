import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const blogPreviews = [
  {
    title: "Minimalist Architecture",
    category: "Design",
    date: "OCT 12",
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Zen in Tokyo",
    category: "Travel",
    date: "OCT 10",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Decentralized Finance",
    category: "Finance",
    date: "OCT 08",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
  },
];

const LatestStories = () => {
  return (
    <section className="bg-[#FDFCF8] py-20 md:py-28 border-t border-[#1a1a1a]/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#94745c]">
               <div className="w-8 h-[1px] bg-[#94745c]/40" />
               <p className="text-[10px] font-bold tracking-[0.5em] uppercase">Editorial Picks</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] tracking-tighter">
              Latest <span className="italic font-light text-[#1ee2b4]">Stories.</span>
            </h2>
          </div>
          
          <Link to="/blogs" className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-[#1a1a1a] pb-1 border-b border-[#1a1a1a]/10 hover:border-[#236656] transition-all">
            View Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#236656]" />
          </Link>
        </div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {blogPreviews.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container - Colors are now naturally vivid */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f1ea] mb-8 rounded-[4px] shadow-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700" 
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 overflow-hidden">
                  <span className="block bg-[#236656] text-[#FDFCF8] text-[8px] font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 flex-grow px-1">
                <div className="flex items-center gap-3 text-[9px] font-bold text-[#94745c] tracking-widest uppercase">
                  <span>{post.date}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1ee2b4]" />
                  <span className="italic font-serif lowercase tracking-normal opacity-60">Vol. 04</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] leading-tight group-hover:text-[#236656] transition-colors duration-500">
                  {post.title}
                </h3>
                
                <p className="text-[14px] text-slate-500 font-serif italic leading-relaxed line-clamp-2">
                  Exploring the narrative through a lens of modern simplicity and the essence of {post.category.toLowerCase()}...
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-8 mt-auto px-1">
                <div className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-[#1a1a1a]">
                  <span className="relative pb-1">
                    Open Entry
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1ee2b4] group-hover:w-full transition-all duration-700" />
                  </span>
                  <ArrowUpRight size={14} className="text-[#236656] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;