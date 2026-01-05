import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { name: "Technology", count: "24", tag: "Future" },
  { name: "Travel", count: "18", tag: "Escape" },
  { name: "Design", count: "12", tag: "Form" },
  { name: "Cinema", count: "27", tag: "Vision" },
];

const CategoriesSection = () => {
  return (
    <section className="bg-[#FDFCF8] py-20 border-t border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* SECTION TITLE: Minimalist & Small */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-[#1A1A1A]">
            02 — Category Archive
          </h2>
          <div className="w-1/2 h-[1px] bg-[#1A1A1A]/10" />
        </div>

        {/* THE MONOLITH GRID: Vertical Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-[#1A1A1A]/10 border-x border-[#1A1A1A]/10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <Link 
                to={`/categories/${cat.name.toLowerCase()}`}
                className="group block p-10 h-72 hover:bg-[#1A1A1A] transition-all duration-700 ease-in-out"
              >
                {/* TOP: Tiny Tag */}
                <span className="block text-[9px] font-bold text-[#94745C] uppercase tracking-[0.4em] mb-12">
                  {cat.tag}
                </span>

                {/* MIDDLE: The Headline */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-[#1A1A1A] group-hover:text-[#FDFCF8] group-hover:italic transition-all duration-500">
                    {cat.name}
                  </h3>
                  <div className="w-6 h-[1px] bg-[#1A1A1A] group-hover:bg-[#FDFCF8] group-hover:w-full transition-all duration-700" />
                </div>

                {/* BOTTOM: The Stats */}
                <div className="absolute bottom-10 left-10">
                  <p className="text-[10px] font-black text-[#1A1A1A]/30 group-hover:text-[#FDFCF8]/50 uppercase tracking-widest">
                    Index — {cat.count}
                  </p>
                </div>

                {/* Subtle Hover Reveal: Arrow */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-10px] transition-all duration-500 text-[#FDFCF8]">
                  <span className="text-sm">VIEW</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* THE "LESS IS MORE" FOOTER */}
        <div className="mt-16 text-center">
          <Link 
            to="/categories" 
            className="group relative overflow-hidden inline-block px-12 py-4 border border-[#1A1A1A]"
          >
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A] group-hover:text-[#FDFCF8] transition-colors duration-500">
              See Complete Index
            </span>
            <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;