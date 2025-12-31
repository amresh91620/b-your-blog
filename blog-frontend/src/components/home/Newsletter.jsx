import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 opacity-30 z-0 hidden lg:block rounded-l-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black tracking-[0.5em] text-indigo-600 uppercase">
              The Weekly Dispatch
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-indigo-900 leading-tight">
              Stay <br /> Inspired.
            </h2>
            <p className="max-w-md text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Join a community of 10,000+ creators exploring the intersection of
              <strong className="text-indigo-600"> human creativity </strong>
              and{" "}
              <strong className="text-indigo-600"> digital evolution</strong>,
              delivered every Sunday with curated insights and stories.
            </p>
          </motion.div>

          {/* Right Side: Interactive Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Subtle Input Label */}
              <label className="text-[9px] font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4 block">
                Subscription Desk
              </label>

              <div className="flex items-center border-b-2 border-indigo-300 pb-4 group-focus-within:border-indigo-500 transition-colors duration-500">
                <input
                  type="email"
                  placeholder="EMAIL@ADDRESS.COM"
                  className="flex-grow bg-transparent outline-none text-xs md:text-sm font-bold tracking-[0.2em] text-indigo-900 placeholder:text-indigo-300"
                />
                <button className="flex items-center gap-2 group/btn">
                  <span className="hidden sm:block text-[10px] font-black tracking-[0.2em] uppercase text-indigo-900 group-hover/btn:text-black transition-colors">
                    Sign Up
                  </span>
                  <div className="p-3 bg-indigo-600 text-white rounded-full scale-90 group-hover/btn:scale-100 group-hover/btn:bg-indigo-700 transition-all duration-300">
                    <Send size={16} />
                  </div>
                </button>
              </div>

              {/* Social Proof / Avatars */}
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-medium text-indigo-400 uppercase tracking-widest">
                  Trusted by{" "}
                  <span className="text-indigo-900 font-bold">
                    10k+ Readers
                  </span>
                </p>
              </div>
            </div>

            {/* Floating Decorative Card */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
