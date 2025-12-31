import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const blogPreviews = [
  { title: "The Silent Growth of Minimalist Architecture", category: "Design", date: "Oct 12", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" },
  { title: "Finding Zen in the Heart of Tokyo", category: "Travel", date: "Oct 10", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800" },
  { title: "Future of Decentralized Finance", category: "Finance", date: "Oct 08", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800" },
];

const LatestStories = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 lg:py-32 bg-white">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
        <div>
          <span className="text-[10px] font-black tracking-[0.4em] text-indigo-500 uppercase">Archive</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-900 mt-2">Latest Stories</h2>
        </div>
        {/* Progress line hidden on small screens to save space */}
        <div className="hidden md:flex items-center gap-4 flex-grow max-w-md">
           <div className="h-[1px] flex-grow bg-slate-100"></div>
           <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">Vol. 04 / 2025</span>
        </div>
      </div>

      {/* Main Grid: Stacks on mobile (12 cols), side-by-side on LG (7+5) */}
      <div className="grid grid-cols-12 gap-y-12 md:gap-y-16 lg:gap-16">
        
        {/* LEFT: MAIN FEATURE STORY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-7 xl:col-span-8 group"
        >
          {/* Rounded-sm kept for design, but shadow softened for mobile */}
          <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-video mb-6 md:mb-8 rounded-sm shadow-xl shadow-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              alt="Feature article"
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-900 text-white px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[9px] font-bold tracking-widest uppercase">
              Feature
            </div>
          </div>
          
          <div className="max-w-2xl">
            <span className="text-[10px] md:text-[11px] font-bold text-indigo-600 tracking-widest uppercase">Editorial</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-slate-900 mt-3 mb-4 md:mb-5 leading-tight group-hover:text-indigo-600 transition-colors">
              Why we choose to write in an era of AI dominance.
            </h3>
            <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
              Exploring the irreplaceable soul of human narrative and why personal blogging is seeing a massive resurgence. In a world of automated content, the human perspective has become the ultimate luxury...
            </p>
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-4 text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase group/link"
            >
              Read Full Story 
              <MoveRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform text-indigo-500" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: SIDEBAR STORIES */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-12">
          <div className="space-y-10 md:space-y-12">
            {blogPreviews.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 md:gap-6 group cursor-pointer"
              >
                {/* Responsive width for sidebar thumbnails */}
                <div className="w-20 h-20 md:w-32 md:h-24 flex-shrink-0 relative overflow-hidden rounded-sm bg-slate-100 shadow-sm">
                  <img 
                    src={post.img} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    alt={post.title}
                  />
                </div>
                
                <div className="flex flex-col py-0.5 md:py-1">
                  <span className="text-[8px] md:text-[9px] text-indigo-500 font-bold tracking-widest uppercase mb-1 md:mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-xs md:text-sm lg:text-base font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="mt-2 md:mt-auto pt-2 flex items-center gap-2 md:gap-3">
                    <span className="text-[9px] md:text-[10px] text-slate-400 font-medium">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                    <span className="text-[9px] md:text-[10px] text-slate-400 font-medium uppercase">5 Min</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestStories;