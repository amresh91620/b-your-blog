import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-stone-900 pt-16 pb-8 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 pb-12">
          
          {/* Brand - Section 1 (5 Cols) */}
          <div className="md:col-span-5 md:pr-12 md:border-r border-stone-100 flex flex-col justify-between">
            <div>
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight group">
                B-YOUR <span className="italic font-light text-stone-400 group-hover:text-stone-900 transition-colors duration-500">Journal.</span>
              </Link>
              <p className="text-[13px] text-stone-400 leading-relaxed max-w-xs mt-4 font-medium uppercase tracking-tight">
                Authentic storytelling at the intersection of life and design.
              </p>
            </div>
          </div>

          {/* Links - Section 2 (3 Cols) */}
          <div className="md:col-span-3 md:px-12 md:border-r border-stone-100 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-900">Directory</h4>
            <div className="flex flex-col gap-2.5">
              {['About Us', 'All Blogs', 'Write a Story', 'Contact'].map((item) => (
                <Link key={item} to="/" className="text-[12px] font-medium text-stone-500 hover:text-stone-900 hover:translate-x-1 transition-all duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social - Section 3 (2 Cols) */}
          <div className="md:col-span-2 md:px-12 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-900">Follow</h4>
            <div className="flex flex-col gap-2.5">
              {['Instagram', 'Twitter', 'LinkedIn'].map((item) => (
                <a key={item} href="#" className="text-[12px] font-medium text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 group">
                  {item} 
                </a>
              ))}
            </div>
          </div>

          {/* Action - Section 4 (2 Cols) */}
          <div className="md:col-span-2 flex flex-col justify-end items-end">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-stone-900 transition-all duration-500">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Zenith</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits - Sleeker Layout */}
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6">
            <p className="text-[9px] text-stone-400 tracking-widest uppercase font-bold">
              © 2026 BYJ
            </p>
            <p className="text-[9px] text-stone-400 tracking-widest uppercase font-bold cursor-pointer hover:text-stone-900 transition-colors">
              Privacy Policy
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-[10px] text-stone-400 tracking-widest uppercase">
              Handcrafted by <span className="text-stone-900 font-bold border-b border-stone-900/10 pb-0.5">Amresh Kumar.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;