import React, { useState, useEffect } from "react";
import { Search, Menu, X, User, Edit3, Feather } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  // Safe selector check (added fallback if redux state isn't ready)
  const user = useSelector((state) => state?.auth?.user || null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Finance"];
  const navItems = ["HOME", "BLOGS", "ABOUT", "CONTACT"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-black/5" 
          : "bg-transparent py-6"
      }`}>
        
        <div className="container mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
          {/* CENTER: Logo (Responsive Text size) */}
          <div className="flex justify-start lg:justify-center w-auto lg:w-1/2">
            <NavLink to="/" className="group flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif tracking-tighter text-[#1a1a1a] flex items-center gap-2">
                B-YOUR <span className="italic font-light text-[#2d4a43]">Journal.</span>
              </span>
              <motion.div 
                className="h-[1.5px] bg-[#2d4a43]" 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </NavLink>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center justify-end w-auto lg:w-1/4 gap-3 md:gap-6">
            
            {/* Nav Links (Desktop) */}
            <div className="hidden xl:flex items-center space-x-6 mr-4">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-[10px] font-bold tracking-[0.2em] transition-all relative py-1 ${
                      isActive ? "text-[#2d4a43]" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>

            {/* Write Button (Hidden on very small screens) */}
            <Link 
              to="/write" 
              className="hidden sm:flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-[#2d4a43] transition-all duration-300 shadow-lg shadow-black/5 active:scale-95"
            >
              <Feather size={14} />
              <span className="text-[10px] font-black tracking-widest uppercase">Write</span>
            </Link>

            {/* Account Profile */}
            <Link 
              to={user ? "/profile" : "/login"} 
              className="flex items-center gap-3 group sm:border-l border-black/10 sm:pl-6"
            >
              <div className="hidden sm:block text-right">
                <p className="text-[10px] font-bold text-[#1a1a1a] leading-none uppercase tracking-tighter">
                  {user ? user.name.split(' ')[0] : "Sign In"}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/5 border border-black/5 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-500 overflow-hidden">
                {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" alt="p" /> : <User size={18} />}
              </div>
            </Link>

            {/* Mobile Toggle Button */}
            <button 
              className="lg:hidden p-2 text-[#1a1a1a] hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FDFCF8] z-[110] flex flex-col lg:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-black/5">
               <span className="text-xl font-serif italic">Menu.</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-black text-white rounded-full">
                 <X size={20} />
               </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item}
                >
                  <NavLink
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-serif text-[#1a1a1a] hover:text-[#2d4a43] transition-colors"
                  >
                    {item === "HOME" ? "Index" : item}
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-10 border-t border-black/5">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-6">Categories</p>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <Link 
                      key={cat} 
                      to={`/categories/${cat.toLowerCase()}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#2d4a43]"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-10">
               <Link 
                to="/write" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex justify-center items-center gap-3 bg-[#2d4a43] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs"
               >
                 <Edit3 size={16} /> Start Writing
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;