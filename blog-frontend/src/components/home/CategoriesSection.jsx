import { Link } from "react-router-dom";
import { ArrowUpRight, Minus, Hash } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Technology", count: "24" },
  { name: "Travel", count: "18" },
  { name: "Design", count: "12" },
  { name: "Lifestyle", count: "30" },
  { name: "Economics", count: "15" },
  { name: "Culture", count: "21" },
  { name: "Health", count: "10" },
  { name: "Cinema", count: "27" },
];

const CategoriesSection = () => {
  return (
    <section className="bg-white border-t border-slate-100 py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header: Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-50 pb-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-orange-600 mb-4">
              <Minus size={24} strokeWidth={4} />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-orange-500">
                Taxonomy
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Explore <br /> <span className="font-serif italic font-light lowercase text-orange-500">Disciplines.</span>
            </h2>
          </div>
          <div className="text-right flex flex-col items-end">
             <Hash size={24} className="text-slate-100 mb-4" />
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
               System Index 04
             </p>
             <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">
               Curated Anthology
             </p>
          </div>
        </div>

        {/* Grid: High Contrast Industrial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/categories/${cat.name.toLowerCase()}`} 
                className="group relative flex flex-col justify-between p-10 h-52 border-r border-b border-slate-100 hover:bg-slate-900 transition-all duration-700 overflow-hidden"
              >
                {/* Index Number: Watermark Style */}
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 group-hover:text-white/5 transition-colors duration-700 select-none tracking-tighter">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>

                {/* Article Count */}
                <div className="z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-orange-500 uppercase">
                      {cat.count} Volumes
                    </span>
                  </div>
                </div>

                {/* Name + Arrow */}
                <div className="z-10 flex items-end justify-between w-full">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-white uppercase transition-all duration-500">
                    {cat.name}
                  </h3>
                  <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight size={28} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Left Accent Accent */}
                <div className="absolute top-0 left-0 w-0 h-full bg-orange-600 group-hover:w-1.5 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link: Minimalist & Centered */}
        <div className="mt-20 flex justify-center">
            <Link to="/categories" className="group flex flex-col items-center gap-4">
                <span className="text-[11px] font-black text-slate-400 group-hover:text-slate-900 tracking-[0.6em] uppercase transition-all duration-300">
                  Access Full Directory
                </span>
                <div className="relative w-16 h-0.5 bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;