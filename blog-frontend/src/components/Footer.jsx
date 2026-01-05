import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FFFFFF] py-14 px-6 lg:px-12 border-t-2 border-[#FFFFFF]/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ROW 1: BRAND & NAV - Sharper & Thicker */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-[#FFFFFF]/20 gap-8">
          <div className="group">
            <Link to="/" className="text-5xl font-serif italic tracking-tighter text-[#FFFFFF] hover:text-[#4ade80] transition-all duration-500 block">
              B-Your.
            </Link>
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#4ade80] mt-3">
              The Digital Anthology — 2026
            </p>
          </div>

          <nav className="flex gap-x-10 gap-y-4 flex-wrap">
            {['Archive', 'Disciplines', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                className="text-[13px] font-black uppercase tracking-widest text-[#FFFFFF] hover:text-[#4ade80] transition-all border-b-2 border-transparent hover:border-[#4ade80] pb-1"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* ROW 2: INFO GRID - Bold Text */}
        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-12">
          <div className="md:col-span-2 space-y-5">
            <span className="text-[11px] font-black text-[#4ade80] uppercase tracking-[0.3em]">The Vision</span>
            <p className="text-xl font-serif italic text-[#FFFFFF] leading-relaxed max-w-md">
              "Curating the space where human artistry meets machine intelligence with absolute intent."
            </p>
          </div>

          <div className="space-y-5">
            <span className="text-[11px] font-black text-[#4ade80] uppercase tracking-[0.3em]">Connect</span>
            <div className="flex flex-col gap-3">
              {['Instagram', 'LinkedIn', 'Medium'].map((social) => (
                <a key={social} href="#" className="text-[14px] font-bold text-[#FFFFFF]/80 hover:text-[#FFFFFF] transition-all w-fit">
                  {social} — ↗
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 md:text-right">
            <span className="text-[11px] font-black text-[#4ade80] uppercase tracking-[0.3em]">Legal</span>
            <div className="flex flex-col gap-3 md:items-end">
              <span className="text-[13px] font-bold text-[#FFFFFF]/80 cursor-pointer hover:text-[#FFFFFF]">Privacy Policy</span>
              <span className="text-[13px] font-bold text-[#FFFFFF]/80 cursor-pointer hover:text-[#FFFFFF]">Terms of Service</span>
            </div>
          </div>
        </div>

        {/* ROW 3: BOTTOM BAR - High Visibility */}
        <div className="pt-10 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-black text-[#FFFFFF] uppercase tracking-[0.2em]">
            © 2026 B-YOUR. <span className="text-[#4ade80]">Ahmedabad, IN.</span>
          </p>

          {/* Bold Scroll Top Button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 group px-8 py-3 bg-[#FFFFFF] text-[#0A0A0A] rounded-none hover:bg-[#4ade80] transition-all duration-500"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Back to Zenith</span>
            <ArrowUp size={16} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-[11px] font-black text-[#FFFFFF] uppercase tracking-[0.2em]">
            Handcrafted by <span className="underline decoration-[#4ade80] decoration-2 underline-offset-4">Siddharth B.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;