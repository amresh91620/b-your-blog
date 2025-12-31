import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Technology", count: "24" },
  { name: "Travel", count: "18" },
  { name: "Food", count: "12" },
  { name: "Lifestyle", count: "30" },
  { name: "Finance", count: "15" },
  { name: "Education", count: "21" },
  { name: "Health", count: "10" },
  { name: "Entertainment", count: "27" },
];

const CategoriesSection = () => {
  return (
    <section className="bg-[#fafafa] border-t border-slate-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-md">
            <span className="text-[10px] tracking-[0.4em] text-indigo-500 font-black uppercase">
              Taxonomy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900 mt-2">
              Explore Disciplines
            </h2>
          </div>
          <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest">
            Vol. 04 Anthology
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200/60">
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
                className="group relative flex flex-col justify-between p-6 md:p-6 h-32 border-r border-b border-slate-200/60 hover:bg-white transition-all duration-500 overflow-hidden rounded-lg"
              >
                {/* Background Index */}
                <span className="absolute top-4 right-6 text-xs font-serif italic text-slate-100 group-hover:text-indigo-100 transition-colors">
                  Index. 0{i + 1}
                </span>

                {/* Article Count */}
                <div className="z-10">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-300 group-hover:text-indigo-400 uppercase transition-colors">
                    {cat.count} Articles
                  </span>
                </div>

                {/* Name + Arrow */}
                <div className="z-10 flex items-center justify-between w-full">
                  <h3 className="text-base md:text-base font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Left Border Accent */}
                <div className="absolute left-0 top-0 h-0 w-[3px] bg-indigo-600 group-hover:h-full transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-10 flex justify-center">
            <Link to="/categories" className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 tracking-[0.3em] uppercase flex items-center gap-3 transition-colors group">
                <div className="w-6 h-[1px] bg-slate-200 group-hover:w-10 group-hover:bg-indigo-200 transition-all" />
                View Full Directory
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
