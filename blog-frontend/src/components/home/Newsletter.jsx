import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#FDFCF8] py-24 border-t border-[#1A1A1A]/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Typography & Context */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="flex items-center gap-3 text-[#94745c]">
              <MessageCircle size={16} strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">
                Direct Dialogue
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tighter">
              Curious minds <br />
              <span className="italic font-light text-[#1ee2b4]">ask better questions.</span>
            </h2>

            <p className="max-w-md text-slate-500/90 text-lg font-serif italic leading-relaxed">
              "Koi sawal ho ya koi naya idea? Feel free to reach out. Main har thoughtful message ka jawab personally deta hoon."
            </p>
          </motion.div>

          {/* RIGHT: Minimalist Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative group p-1">
              {/* Subtle Decorative Frame (Hero design match) */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#94745c]/20 rounded-tr-[40px] pointer-events-none" />
              
              <div className="space-y-10 bg-white/50 p-8 md:p-12 rounded-2xl border border-[#1A1A1A]/5 shadow-sm">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-[0.4em]">
                    Start a Conversation
                  </h4>
                  <div className="h-[1px] w-12 bg-[#1ee2b4]" />
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="YOUR NAME"
                        className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 outline-none text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#1ee2b4] transition-all duration-500 uppercase"
                      />
                    </div>
                    <div className="relative">
                      <textarea
                        required
                        rows={1}
                        placeholder="WHAT'S ON YOUR MIND?"
                        className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 outline-none text-[11px] font-bold tracking-[0.3em] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#1ee2b4] transition-all duration-500 uppercase resize-none"
                      />
                    </div>
                  </div>

                  <button className="group flex items-center justify-between w-full bg-[#236656] text-[#FDFCF8] px-8 py-5 rounded-full hover:bg-[#1a4d41] transition-all duration-500 shadow-xl shadow-[#236656]/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em]">
                      Send Message
                    </span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-[#1ee2b4]" />
                  </button>
                </form>

                <div className="flex items-center justify-between pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1ee2b4] animate-pulse" />
                    <span className="text-[9px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest italic font-serif">
                      Usually responds in 24h
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] font-bold text-[#236656]">
                      GET IN TOUCH
                    </span>
                  </div>
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