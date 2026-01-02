import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Minus, Copyright } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-20 px-6 lg:px-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] leading-none pointer-events-none select-none">
        B.Y
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-slate-800/50">
          
          {/* Left Side: Brand & Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-1 group w-fit">
                <span className="text-3xl font-black tracking-tighter text-white uppercase group-hover:text-orange-500 transition-colors">
                  B-YOUR
                </span>
                <span className="text-3xl font-serif italic text-orange-500 group-hover:text-white transition-colors">.</span>
              </Link>
              <div className="flex items-center gap-3 text-orange-500">
                <Minus size={20} strokeWidth={4} />
                <p className="text-[10px] font-black uppercase tracking-[0.5em]">
                  The Digital Anthology
                </p>
              </div>
            </div>
            
            <p className="max-w-lg text-lg text-slate-400 leading-relaxed font-light italic font-serif">
              "Curating the space where <span className="text-white">human artistry</span> meets <span className="text-white">machine intelligence</span>. Each word is chosen with purpose, each story told with intent."
            </p>

            <div className="flex gap-10 pt-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Editor-In-Chief</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Siddharth B.</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Location</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Ahmedabad, IN</p>
              </div>
            </div>
          </div>

          {/* Right Side: Navigation & Socials */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 border-b border-orange-500/20 pb-2">Menu</h4>
              <nav className="flex flex-col gap-4">
                {['Archive', 'About Us', 'Contact', 'Membership'].map((item) => (
                  <Link 
                    key={item} 
                    to={`/${item.toLowerCase().replace(" ", "")}`} 
                    className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 border-b border-orange-500/20 pb-2">Social</h4>
              <div className="flex flex-col gap-4">
                {['Instagram', 'Twitter', 'LinkedIn', 'Medium'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all duration-300"
                  >
                    {social}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-orange-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
          
          <div className="flex items-center gap-2 text-slate-500 order-2 md:order-1">
            <Copyright size={12} />
            <p className="text-[9px] font-black tracking-[0.2em] uppercase">
              2026 <span className="text-slate-700 mx-2">|</span> All Rights Reserved
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 order-1 md:order-2"
          >
            <div className="relative">
               <span className="text-[9px] font-black tracking-[0.5em] uppercase text-orange-500 group-hover:text-white transition-colors">
                Scroll to Zenith
              </span>
            </div>
            <div className="h-10 w-[1px] bg-slate-700 group-hover:bg-orange-500 group-hover:h-14 transition-all duration-700" />
          </button>

          <div className="text-center md:text-right order-3">
            <p className="text-[9px] font-black tracking-[0.2em] uppercase text-slate-500">
              Coded with purpose by <br className="md:hidden" />
              <span className="text-white hover:text-orange-500 transition-colors cursor-pointer decoration-orange-500/30 underline underline-offset-4">
                Siddharth B.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;