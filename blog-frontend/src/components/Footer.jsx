import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a2a] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/5 pb-12">
          
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif italic tracking-tight text-indigo-400">
              B-Your Blog.
            </h2>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
              Curating stories at the intersection of <strong>human creativity</strong> & <strong>digital evolution</strong>.
            </p>
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {['Archive', 'About', 'Contact', 'Privacy'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-indigo-400 transition-colors"
                  aria-label={`Go to ${item} page`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Action */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-6">
              {['Instagram', 'Twitter'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-indigo-400 transition-all"
                  aria-label={`Follow on ${social}`}
                >
                  {social}
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="text-[9px] font-black tracking-[0.4em] uppercase text-indigo-500 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              ↑ Scroll to Top
            </button>
          </div>
        </div>

        {/* Bottom Credits & Extra Info */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[9px] font-medium tracking-[0.3em] text-white/20 uppercase">
          <p>© 2025 All Rights Reserved</p>
          <p className="italic font-serif text-[10px] text-white/30">
            The Archive of Human Thought — Edition 04
          </p>
          <p>Handcrafted by <span className="text-indigo-400 font-bold">B-Your Team</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
