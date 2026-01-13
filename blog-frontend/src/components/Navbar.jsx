import React, { useState, useEffect, useRef } from "react";
import { User, LogOut, ChevronDown, LayoutGrid, Menu, X, Home, Search, Info, Mail } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state?.auth?.user || null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "HOME", path: "/", icon: Home },
    { name: "EXPLORE", path: "/blogs", icon: Search },
    { name: "ABOUT", path: "/about", icon: Info },
    { name: "CONTACT", path: "/contact", icon: Mail }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-slate-100/50" 
          : "bg-transparent py-6 md:py-8"
      }`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                className={({ isActive }) => `relative group text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
                  isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Logo */}
          <div className="flex justify-center flex-1 lg:w-1/3">
            <Link to="/" className="group flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif font-medium tracking-tighter text-slate-900 transition-all duration-300 group-hover:scale-105">
                B-YOUR <span className="italic font-light text-slate-600 group-hover:text-slate-800 transition-colors">Journal.</span>
              </span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center justify-end lg:w-1/3">
            <div className="relative" ref={dropdownRef}>
              {user ? (
                <div className="flex items-center">
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none group">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 border-2 border-white ring-2 ring-slate-100 overflow-hidden transition-all duration-300 group-hover:ring-slate-200 cursor-pointer">
                      {user?.avatar ? 
                        <img src={user.avatar} className="w-full h-full object-cover" alt="avatar" /> : 
                        <User size={16} className="m-auto mt-2 text-slate-400" />
                      }
                    </div>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-4 w-60 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl"
                      >
                        <div className="px-5 py-4 bg-slate-50/80 border-b border-slate-100">
                          <p className="text-[13px] font-semibold text-slate-900 truncate">{user?.name}</p>
                          <p className="text-[11px] text-slate-500 truncate">{user?.email}</p>
                        </div>
                        <div className="p-2">
                          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-[12px] text-slate-600 hover:bg-slate-50 rounded-lg transition-all duration-300">
                            <LayoutGrid size={14} /> Dashboard
                          </Link>
                          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors">
                            <LogOut size={14} /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="text-[10px] md:text-[11px] font-bold tracking-widest text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 md:px-7 md:py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
                  SIGN IN
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[110] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[120] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center p-8 pb-4 border-b border-slate-100">
                <span className="font-bold text-xl tracking-tighter text-slate-900">
                  B-YOUR <span className="italic font-light text-slate-600">Journal.</span>
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2.5 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col px-6 mt-6 space-y-3">
                <p className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">Navigation</p>
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavLink 
                      key={item.name} 
                      to={item.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <IconComponent size={18} className="text-slate-500" />
                      <span className="text-sm font-medium">
                        {item.name}
                      </span>
                    </NavLink>
                  );
                })}
              </div>

              <div className="mt-auto p-8 border-t border-slate-100 bg-slate-50/50">
                <div className="grid grid-cols-1 gap-3">
                  {user && (
                    <>
                      <Link 
                        to="/dashboard" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 w-full p-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium text-sm hover:border-slate-300 transition-all duration-300"
                      >
                        <LayoutGrid size={16} className="text-slate-500" /> 
                        Dashboard
                      </Link>
                      
                      <button 
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 w-full py-3 text-red-500 text-sm font-medium hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <LogOut size={14} /> Sign Out
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;