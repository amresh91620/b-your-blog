import React, { useState, useEffect, useRef } from "react";
import { User, Feather, LogOut, ChevronDown, Settings, Bookmark, LayoutGrid, Menu, X } from "lucide-react";
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
    { name: "HOME", path: "/" },
    { name: "EXPLORE", path: "/blogs" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
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
          ? "bg-white/90 backdrop-blur-xl py-3 shadow-[0_2px_20px_rgba(0,0,0,0.02)]" 
          : "bg-transparent py-6 md:py-8"
      }`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex justify-between items-center">
          
          {/* LEFT: MOBILE MENU ICON & DESKTOP NAV */}
          <div className="flex items-center lg:w-1/3">
            <button 
              className="lg:hidden p-2 -ml-2 text-slate-900" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  to={item.path}
                  className={({ isActive }) => `relative group text-[11px] font-bold tracking-[0.2em] transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full opacity-0 group-[.active]:opacity-100 transition-opacity" />
                </NavLink>
              ))}
            </div>
          </div>

          {/* CENTER: LOGO */}
          <div className="flex justify-center flex-1 lg:w-1/3">
            <Link to="/" className="group flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif font-medium tracking-tighter text-slate-900">
                B-YOUR <span className="italic font-light text-slate-400 group-hover:text-teal-600 transition-colors">Journal.</span>
              </span>
            </Link>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center justify-end lg:w-1/3 gap-3 md:gap-8">
            <Link to="/write" className="hidden md:flex items-center gap-2.5 text-slate-900 group hover:opacity-70 transition-all">
              <div className="p-2 bg-slate-50 group-hover:bg-teal-50 rounded-full transition-colors">
                <Feather size={15} />
              </div>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Write</span>
            </Link>

            <div className="relative" ref={dropdownRef}>
              {user ? (
                <div className="flex items-center">
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 focus:outline-none">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 border-2 border-white ring-1 ring-slate-100 overflow-hidden">
                      {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User size={16} className="m-auto mt-2 text-slate-400" />}
                    </div>
                    <ChevronDown size={12} className={`hidden md:block text-slate-400 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-4 w-60 bg-white border border-slate-100 shadow-xl rounded-2xl overflow-hidden"
                      >
                        <div className="px-5 py-4 bg-slate-50/50 border-b border-slate-100">
                          <p className="text-[13px] font-semibold text-slate-900 truncate">{user?.name}</p>
                          <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
                        </div>
                        <div className="p-1.5">
                          <DropdownLink to="/dashboard" icon={<LayoutGrid size={14} />} label="Dashboard" />
                          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] text-red-500 hover:bg-red-50 rounded-lg font-medium">
                            <LogOut size={14} /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="text-[10px] md:text-[11px] font-bold tracking-widest text-white bg-slate-900 px-5 py-2.5 md:px-7 md:py-3 rounded-full">
                  SIGN IN
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[120] lg:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif font-bold text-xl tracking-tighter">B-YOUR.</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.name} to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif italic text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {item.name.toLowerCase()}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100">
                <Link 
                  to="/dashboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-blue-50 text-blue-700 rounded-2xl font-bold uppercase tracking-widest text-[11px] mb-4"
                >
                  <LayoutGrid size={16} /> Dashboard
                </Link>
                <Link 
                  to="/write" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-teal-50 text-teal-700 rounded-2xl font-bold uppercase tracking-widest text-[11px] mb-4"
                >
                  <Feather size={16} /> Start Writing
                </Link>
                
                {user && (
                  <button 
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-3 w-full py-3 text-red-600 border border-red-200 rounded-xl font-medium hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const DropdownLink = ({ to, icon, label }) => (
  <Link to={to} className="flex items-center gap-3 px-4 py-2.5 text-[12px] text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
    <span className="text-slate-400">{icon}</span> {label}
  </Link>
);

export default Navbar;