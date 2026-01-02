import React from "react";
import { motion } from "framer-motion";
import { Send, Minus, ShieldCheck } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative py-32 bg-white border-t border-slate-100 overflow-hidden">
      {/* Structural Watermark: High Impact Background Text */}
      <div className="absolute -bottom-12 -left-12 text-[18rem] font-black text-slate-50 select-none pointer-events-none leading-none z-0 tracking-tighter">
        JOIN
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Headline & Intent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="flex items-center gap-4 text-orange-600">
              <Minus size={28} strokeWidth={4} />
              <span className="text-[11px] font-black tracking-[0.6em] uppercase">
                The Weekly Dispatch
              </span>
            </div>

            <h2 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase">
              Stay <br /> 
              <span className="font-serif italic font-light lowercase text-orange-500">Informed.</span>
            </h2>

            <div className="space-y-6">
                <p className="max-w-lg text-slate-500 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-orange-500 pl-8">
                  Join <span className="text-slate-900 font-bold">12,000+ thinkers</span> receiving high-context stories on the intersection of 
                  <span className="text-slate-900 italic font-serif"> human creativity </span> 
                  and <span className="text-slate-900 italic font-serif"> industrial evolution</span>.
                </p>
                <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck size={14} className="text-orange-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Zero Spam • Editorial Quality • Weekly Pulse</span>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Dark Minimalist Input Desk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 p-10 md:p-14 shadow-[40px_40px_80px_rgba(0,0,0,0.15)] relative">
              {/* Top Accent Icon */}
              <div className="absolute top-0 right-10 w-14 h-14 bg-orange-500 flex items-center justify-center text-white shadow-xl -translate-y-1/2">
                <Send size={20} strokeWidth={3} className="rotate-12" />
              </div>

              <label className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-12 block">
                Subscription Terminal / Vol. 2026
              </label>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder="ENTER EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-slate-700 py-6 outline-none text-xs font-black tracking-[0.3em] text-white placeholder:text-slate-600 focus:border-orange-500 transition-all duration-700 uppercase"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-orange-500 w-0 group-focus-within:w-full transition-all duration-700" />
                </div>

                <button className="w-full group relative overflow-hidden bg-white py-6 text-[11px] font-black tracking-[0.5em] uppercase text-slate-900 transition-all">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Join the Collective
                  </span>
                  <div className="absolute inset-0 bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                </button>
              </form>

              {/* Social Proof: Clean & Grayscale */}
              <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 border-2 border-slate-900 rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="reader" />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-right">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">
                      12.4K Subscribed
                    </p>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                      Trusted Global Reach
                    </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center">
              Protocol: No algorithms. No clutter. Just <span className="text-orange-600 underline underline-offset-4 decoration-1">pure narrative</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;