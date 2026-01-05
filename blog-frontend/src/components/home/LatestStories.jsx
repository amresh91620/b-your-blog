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
    <section className="bg-[#FDFCF8] py-16 md:py-24 border-t border-[#1a1a1a]/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER: Clean & Balanced */}
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
               <div className="w-8 h-[1px] bg-[#94745c]/40" />
               <p className="text-[10px] font-bold tracking-[0.4em] text-[#94745c] uppercase">Editorial Picks</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight">
              Latest <span className="italic font-light text-[#2d4a43]">Stories.</span>
            </h2>
          </div>
          <Link to="/blogs" className="hidden md:flex items-center gap-3 group text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a]">
            View Archive <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* GRID: Natural Colors & Sophisticated Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPreviews.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container: High-End Minimal */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f1ea] mb-6 rounded-[2px]">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-700"
                />
                {/* Subtle Floating Category */}
                <div className="absolute top-4 left-4 overflow-hidden">
                  <span className="block bg-[#FDFCF8]/90 backdrop-blur-sm text-[#1a1a1a] text-[8px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text: Elegant Hierarchy */}
              <div className="space-y-4 flex-grow px-1">
                <div className="flex items-center gap-3 text-[9px] font-bold text-[#94745c]/60 tracking-widest uppercase">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-[#94745c]/30" />
                  <span className="italic font-serif lowercase tracking-normal">Vol. 04</span>
                </div>
                
                <h3 className="text-2xl font-serif text-[#1a1a1a] leading-snug group-hover:text-[#2d4a43] transition-colors duration-500">
                  {post.title}
                </h3>
                
                <p className="text-[13px] text-[#1a1a1a]/50 font-serif italic leading-relaxed line-clamp-2">
                  Exploring the narrative through a lens of modern simplicity and {post.category.toLowerCase()}...
                </p>
              </div>

              {/* Link: Understated Luxury */}
              <div className="pt-6 mt-auto px-1">
                <div className="inline-flex items-center gap-3 text-[9px] font-black tracking-[0.2em] uppercase text-[#1a1a1a]">
                  <span className="relative">
                    Open Entry
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#2d4a43]/20 group-hover:bg-[#2d4a43] transition-colors" />
                  </span>
                  <ArrowUpRight size={12} className="text-[#2d4a43] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
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