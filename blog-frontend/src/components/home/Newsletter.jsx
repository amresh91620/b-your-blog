import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#FDFCF8] py-24 border-t border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Elegant Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#2D4A43]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#2D4A43]">
                Correspondence
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tighter">
              A weekly journal <br />
              <span className="italic font-light text-[#2D4A43]">for the refined.</span>
            </h2>

            <p className="max-w-md text-[#1A1A1A]/60 text-lg font-serif italic leading-relaxed">
              "Join 12,000 readers who value context over clutter. No noise, just hand-crafted perspectives delivered to your terminal."
            </p>
          </motion.div>

          {/* RIGHT: Sophisticated Input Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="bg-[#1A1A1A] p-10 md:p-16 relative shadow-2xl">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-6">
                <Mail className="text-[#FDFCF8]/20" size={40} strokeWidth={1} />
              </div>

              <div className="space-y-12">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-[#FDFCF8]/40 uppercase tracking-[0.4em]">
                    Membership Entry
                  </h4>
                  <div className="h-[1px] w-12 bg-[#2D4A43]" />
                </div>

                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b border-[#FDFCF8]/20 py-4 outline-none text-[11px] font-bold tracking-[0.3em] text-[#FDFCF8] placeholder:text-[#FDFCF8]/20 focus:border-[#FDFCF8] transition-all duration-500 uppercase"
                    />
                  </div>

                  <button className="group flex items-center justify-between w-full border border-[#FDFCF8]/30 px-8 py-5 hover:bg-[#FDFCF8] hover:text-[#1A1A1A] transition-all duration-700">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                      Request Access
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </form>

                <div className="flex items-center justify-between pt-8 border-t border-[#FDFCF8]/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 border border-[#1A1A1A] bg-[#FDFCF8]/10 rounded-full overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="user" className="grayscale" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-[#FDFCF8]/40 uppercase tracking-widest italic font-serif">
                    Private Community — 12.4K
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;