import React, { useState } from "react";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Finance"];
  const navItems = ["HOME", "BLOGS", "ABOUT", "CONTACT"];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.98 },
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-5 flex md:grid md:grid-cols-3 items-center sticky top-0 z-50 justify-between">
      
      {/* LEFT: Logo - Matching Hero Theme */}
      <motion.div whileHover={{ x: 5 }} className="flex justify-start cursor-pointer z-50">
        <NavLink to="/" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            B-YOUR
          </span>
          <span className="text-2xl font-serif italic text-orange-500">
            Blog.
          </span>
        </NavLink>
      </motion.div>

      {/* CENTER: Desktop Navigation */}
      <div className="hidden md:flex justify-center space-x-10 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className={({ isActive }) =>
              `relative py-1 text-[10px] font-bold tracking-[0.3em] transition-colors ${
                isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-orange-500"
                  initial={{ width: isActive ? "100%" : "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </NavLink>
        ))}

        {/* Categories Dropdown */}
        <div
          className="relative py-1 text-[10px] font-bold tracking-[0.3em] text-slate-400 hover:text-slate-900 cursor-pointer group"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
        >
          <span className="flex items-center gap-1 uppercase">Categories</span>
          <AnimatePresence>
            {categoriesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-4 bg-slate-900 text-white shadow-2xl py-4 z-50 border-t-4 border-orange-500"
              >
                {categories.map((cat) => (
                  <NavLink
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="block px-8 py-3 text-[9px] font-bold tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all uppercase"
                  >
                    {cat}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: Search, Login & Mobile Toggle */}
      <div className="flex items-center justify-end space-x-6">
        {/* Minimal Search */}
        <div className="relative hidden lg:block group">
          <input
            type="text"
            placeholder="Search..."
            className="w-32 focus:w-48 bg-transparent border-b border-slate-200 focus:border-orange-500 py-1 text-[11px] outline-none transition-all duration-500 placeholder:text-slate-300"
          />
          <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={14} />
        </div>

        {/* Auth Section */}
        <div className="hidden md:block">
          <NavLink 
            to={user ? "/profile" : "/login"} 
            className="text-[10px] font-black tracking-widest text-slate-900 bg-slate-50 px-5 py-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            {user ? user.name.toUpperCase() : "LOGIN"}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] bg-white z-40 md:hidden flex flex-col px-8 py-10 space-y-10 overflow-y-auto"
          >
            {/* Nav Links */}
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black tracking-tighter text-slate-900 uppercase flex justify-between items-center group"
                >
                  {item}
                  <ChevronRight size={24} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              ))}
            </div>

            {/* Mobile Categories Divider */}
            <div className="h-[1px] bg-slate-100 w-full" />

            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <NavLink
                  key={cat}
                  to={`/categories/${cat.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  {cat}
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth Button */}
            <NavLink
              to={user ? "/profile" : "/login"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-auto py-5 bg-slate-900 text-white text-center text-[11px] font-bold tracking-[0.3em] uppercase transition-transform active:scale-95"
            >
              {user ? `Account: ${user.name}` : "Login / Register"}
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;