import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#1A1A1A] pt-20 pb-10 px-6 border-t border-[#1A1A1A]/5">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 pb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 md:pr-16 md:border-r border-[#1A1A1A]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight group">
                B-YOUR <span className="italic font-light text-[#1ee2b4] group-hover:text-[#236656] transition-colors duration-500">Journal.</span>
              </Link>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs font-bold uppercase tracking-[0.2em]">
                Authentic storytelling at the intersection of life and design.
              </p>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 md:px-12 md:border-r border-[#1A1A1A]/5 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94745c]">Directory</h4>
            <div className="flex flex-col gap-3">
              {['About Us', 'All Blogs', 'Write a Story', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to="/" 
                  className="text-[12px] font-bold text-[#1A1A1A]/60 hover:text-[#236656] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 md:px-12 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94745c]">Follow</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Instagram', icon: <Instagram size={12} /> },
                { name: 'Twitter', icon: <Twitter size={12} /> },
                { name: 'LinkedIn', icon: <Linkedin size={12} /> }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="text-[12px] font-bold text-[#1A1A1A]/60 hover:text-[#236656] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#1ee2b4] group-hover:text-[#236656] transition-colors">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-end items-end">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#236656] group-hover:border-[#236656] transition-all duration-500">
                <ArrowUp size={16} className="group-hover:-translate-y-1 group-hover:text-white transition-all" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#94745c]">Zenith</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-10 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <p className="text-[9px] text-slate-400 tracking-[0.3em] uppercase font-bold">
              © 2026 BYJ
            </p>
            <p className="text-[9px] text-slate-400 tracking-[0.3em] uppercase font-bold cursor-pointer hover:text-[#236656] transition-colors">
              Privacy Policy
            </p>
          </div>
          
          <div>
            <p className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-medium">
              Handcrafted by <span className="text-[#236656] font-bold border-b border-[#1ee2b4] pb-0.5">Amresh Kumar.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;