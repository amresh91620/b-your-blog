import React, { useState } from "react";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Finance"];

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-8 py-5 grid grid-cols-3 items-center sticky top-0 z-50 shadow-sm">
      {/* LEFT: Logo with subtle hover scale */}
      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-start cursor-pointer">
        <h1
          className="text-3xl font-serif italic text-gray-900 leading-none"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        >
          B-Your Blog
        </h1>
      </motion.div>

      {/* CENTER: Navigation with Animated Underlines */}
      <div className="hidden md:flex justify-center space-x-8 items-center">
        {["HOME", "BLOGS", "ABOUT US", "CONTACT"].map((item) => (
          <NavLink
            key={item}
            to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className={({ isActive }) =>
              `relative py-1 text-[11px] font-bold tracking-[0.2em] transition-colors ${
                isActive ? "text-black" : "text-[#555] hover:text-black"
              } group`
            }
          >
            {({ isActive }) => (
              <>
                {item}
                {/* Animated underline that appears on hover/active */}
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

        {/* Categories Dropdown with smoother logic */}
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
                className="absolute top-full left-0 w-48 mt-4 bg-white border border-gray-100 rounded-lg shadow-xl py-3 z-50 overflow-hidden"
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

      {/* RIGHT: Search & Login */}
      <div className="flex items-center justify-end space-x-8">
        <motion.div 
          initial={false}
          whileFocusWithin={{ width: 220 }}
          className="relative hidden lg:block transition-all duration-300"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-1.5 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-xs transition-all placeholder:text-gray-400"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={14}
          />
        </motion.div>

        {user ? (
          <NavLink
            to="/profile"
            className="text-[11px] font-bold tracking-[0.2em] text-[#555] hover:text-black transition-colors border-l pl-8 border-gray-200"
          >
            {user.name.toUpperCase()}
          </NavLink>
        ) : (
          <motion.div whileHover={{ x: 3 }} className="border-l pl-8 border-gray-200">
            <NavLink
              to="/login"
              className="text-[11px] font-bold tracking-[0.2em] text-[#555] hover:text-black transition-colors"
            >
              LOGIN
            </NavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;