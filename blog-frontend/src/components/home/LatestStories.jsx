import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight, Minus, ArrowUpRight } from "lucide-react";

const blogPreviews = [
  { title: "The Silent Growth of Minimalist Architecture", category: "Design", date: "Oct 12", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" },
  { title: "Finding Zen in the Heart of Tokyo", category: "Travel", date: "Oct 10", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800" },
  { title: "Future of Decentralized Finance", category: "Finance", date: "Oct 08", img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800" },
];

const LatestStories = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-32 bg-white">
      
      {/* SECTION HEADER: Bold Editorial Style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 border-b border-slate-100 pb-12">
        <div>
          <div className="flex items-center gap-3 text-orange-600 mb-4">
            <Minus size={24} strokeWidth={4} />
            <span className="text-[11px] font-black tracking-[0.5em] uppercase">Archive</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Latest <br /> <span className="font-serif italic font-light lowercase text-orange-500">Stories.</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-8">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Edition 04</p>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Autumn MMXXV</p>
            </div>
            <Link to="/blogs" className="group relative overflow-hidden bg-slate-900 text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest shadow-2xl transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Explore All <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-orange-500" />
              </span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-20 lg:gap-20">
        
        {/* LEFT: MAIN FEATURE STORY */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-7 xl:col-span-8 group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[16/9] mb-10 bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              alt="Feature article"
            />
            <div className="absolute top-0 left-0 bg-orange-500 text-white px-6 py-3 text-[10px] font-black tracking-[0.4em] uppercase">
              Leading Feature
            </div>
            {/* Subtle Overlay */}
            <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/0 transition-all duration-700" />
          </div>
          
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[11px] font-black text-orange-600 tracking-[0.4em] uppercase">Editorial</span>
               <div className="h-[1px] w-12 bg-slate-200" />
               <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-[9px]">8 Min Read</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase group-hover:text-orange-500 transition-colors duration-500">
              Why we write in the <br /> <span className="font-serif italic font-light lowercase">age of automation.</span>
            </h3>
            <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed max-w-2xl font-serif italic">
              "Exploring the irreplaceable soul of human narrative. In a world of automated noise, the personal perspective has become the new ultimate luxury."
            </p>
            <div className="pt-4">
               <span className="inline-flex items-center gap-6 text-[12px] font-black tracking-[0.4em] uppercase group-hover:gap-10 transition-all duration-500 text-slate-900">
                  Read Analysis <MoveRight className="w-5 h-5 text-orange-500" />
               </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: SIDEBAR STORIES */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:border-l lg:border-slate-100 lg:pl-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Current Intelligence</h4>
          </div>
          
          <div className="space-y-12">
            {blogPreviews.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group cursor-pointer pb-12 border-b border-slate-50 last:border-0"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-slate-100">
                  <img 
                    src={post.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:rotate-3 group-hover:scale-125 transition-all duration-700"
                    alt={post.title}
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] text-orange-600 font-black tracking-[0.3em] uppercase">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-serif italic font-medium text-slate-900 leading-tight group-hover:text-orange-500 transition-colors decoration-orange-500/30 group-hover:underline underline-offset-4 decoration-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <span className="text-slate-200">/</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Archive</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 p-10 bg-slate-900 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <MoveRight size={80} className="text-white" />
            </div>
            <p className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Newsletter</p>
            <p className="relative z-10 text-xl font-serif italic text-white leading-tight mb-8">
              Deep dives delivered to your terminal weekly.
            </p>
            <button className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white border-b border-orange-500 pb-2 hover:gap-6 transition-all">
              Subscribe to Bureau <ArrowUpRight size={14} className="text-orange-500" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestStories;