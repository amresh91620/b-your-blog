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
  const navItems = ["HOME", "BLOGS", "ABOUT US", "CONTACT"];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 md:px-8 py-4 md:py-5 flex md:grid md:grid-cols-3 items-center sticky top-0 z-50 shadow-sm justify-between">
      
      {/* LEFT: Logo */}
      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-start cursor-pointer z-50">
        <h1
          className="text-2xl md:text-3xl font-serif italic text-gray-900 leading-none"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        >
          B-Your Blog
        </h1>
      </motion.div>

      {/* CENTER: Desktop Navigation */}
      <div className="hidden md:flex justify-center space-x-8 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className={({ isActive }) =>
              `relative py-1 text-[11px] font-bold tracking-[0.2em] transition-colors ${
                isActive ? "text-black" : "text-[#555] hover:text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 h-[1.5px] bg-black"
                  initial={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </NavLink>
        ))}

        {/* Categories Dropdown */}
        <div
          className="relative py-1 text-[11px] font-bold tracking-[0.2em] text-[#555] hover:text-black cursor-pointer group"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
        >
          <span>CATEGORIES</span>
          <motion.span 
             className="absolute bottom-0 left-0 h-[1.5px] bg-black"
             animate={{ width: categoriesOpen ? "100%" : "0%" }}
          />
          <AnimatePresence>
            {categoriesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 w-48 mt-4 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-50"
              >
                {categories.map((cat) => (
                  <NavLink
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="block px-6 py-2 text-[10px] font-semibold tracking-widest text-gray-600 hover:bg-gray-50 hover:text-black transition-all border-l-2 border-transparent hover:border-black"
                  >
                    {cat.toUpperCase()}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: Search, Login & Mobile Toggle */}
      <div className="flex items-center justify-end space-x-4 md:space-x-8">
        <motion.div className="relative hidden lg:block transition-all duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 focus:w-56 pl-9 pr-4 py-1.5 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-xs transition-all placeholder:text-gray-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        </motion.div>

        {/* User / Login Section (Desktop) */}
        <div className="hidden md:block">
          {user ? (
            <NavLink to="/profile" className="text-[11px] font-bold tracking-[0.2em] text-[#555] border-l pl-8 border-gray-200">
              {user.name.toUpperCase()}
            </NavLink>
          ) : (
            <NavLink to="/login" className="text-[11px] font-bold tracking-[0.2em] text-[#555] border-l pl-8 border-gray-200">
              LOGIN
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[65px] bg-white z-40 md:hidden flex flex-col px-6 py-8 space-y-8 overflow-y-auto"
          >
            {/* Search in Mobile */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-black/5"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold tracking-[0.1em] text-gray-900 border-b border-gray-50 pb-2 flex justify-between items-center"
                >
                  {item}
                  <ChevronRight size={16} className="text-gray-300" />
                </NavLink>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="pt-4">
              <p className="text-[10px] font-black tracking-widest text-indigo-500 uppercase mb-4">Categories</p>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <NavLink
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-2 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-600 text-center"
                  >
                    {cat}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Auth */}
            <div className="mt-auto pt-10">
              <NavLink
                to={user ? "/profile" : "/login"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-black text-white text-center rounded-xl text-xs font-bold tracking-widest uppercase"
              >
                {user ? `GO TO PROFILE (${user.name})` : "LOGIN TO YOUR ACCOUNT"}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;