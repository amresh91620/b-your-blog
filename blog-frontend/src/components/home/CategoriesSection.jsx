import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Technology", count: "24", tag: "Future" },
  { name: "Travel", count: "18", tag: "Escape" },
  { name: "Design", count: "12", tag: "Form" },
  { name: "Cinema", count: "27", tag: "Vision" },
];

const CategoriesSection = () => {
  return (
    <section className="bg-[#FDFCF8] py-24 border-t border-[#1A1A1A]/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex items-end justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#94745c]">
               <div className="w-8 h-[1px] bg-[#94745c]/40" />
               <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Archive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] tracking-tighter">
              Explore by <span className="italic text-[#236656]">Topic</span>
            </h2>
          </div>
          <div className="hidden md:block w-1/3 h-[1px] bg-[#1A1A1A]/5 mb-4" />
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/5 border border-[#1A1A1A]/5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <Link 
                to={`/categories/${cat.name.toLowerCase()}`}
                className="group relative block bg-[#FDFCF8] p-10 h-80 hover:bg-[#236656] transition-all duration-700 ease-in-out overflow-hidden"
              >
                {/* Background Accent on Hover */}
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <span className="text-8xl font-serif text-[#1ee2b4] pointer-events-none uppercase">
                     {cat.name.charAt(0)}
                   </span>
                </div>

                {/* TOP: Tag */}
                <span className="relative z-10 block text-[9px] font-bold text-[#94745c] group-hover:text-[#1ee2b4] uppercase tracking-[0.4em] mb-12 transition-colors duration-500">
                  {cat.tag}
                </span>

                {/* MIDDLE: Name */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-3xl font-serif text-[#1A1A1A] group-hover:text-[#FDFCF8] group-hover:italic transition-all duration-500">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#1ee2b4] group-hover:w-full transition-all duration-700" />
                </div>

                {/* BOTTOM: Stats */}
                <div className="absolute bottom-10 left-10 z-10">
                  <p className="text-[10px] font-black text-[#1A1A1A]/20 group-hover:text-[#FDFCF8]/40 uppercase tracking-widest transition-colors duration-500">
                    Index — {cat.count}
                  </p>
                </div>

                {/* Hover Reveal: Arrow */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#1ee2b4]">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-20 text-center">
          <Link 
            to="/categories" 
            className="group relative inline-flex items-center gap-6 px-12 py-5 rounded-full border border-[#1A1A1A]/10 hover:border-[#236656] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
              View All Categories
            </span>
            <ArrowRight size={14} className="relative z-10 group-hover:text-[#1ee2b4] group-hover:translate-x-2 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#236656] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;