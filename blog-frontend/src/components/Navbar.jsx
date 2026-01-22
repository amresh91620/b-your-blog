import React, { useState, useEffect, useRef } from "react";
import {
  User,
  LogOut,
  LayoutGrid,
  Menu,
  X,
  Home,
  Search,
  Info,
  Mail,
} from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../features/auth/authSlice";
import { fetchProfile } from "../features/auth/profileSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const authUser = useSelector((state) => state.auth?.user || null);
  const profileUser = useSelector((state) => state.profile?.user || null);
  const user = profileUser || authUser;
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
    { name: "CONTACT", path: "/contact", icon: Mail },
  ];


  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
      setIsProfileOpen(false);
      setIsMobileMenuOpen(false);
      toast.success("You are successfully logged out");
      window.location.href = "/";
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]  border-slate-100"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Mobile Menu Button - Left Side */}
          <button
            className="lg:hidden p-2 -ml-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Links - Left Side (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center space-x-10 lg:w-1/3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
                    isActive ? "text-[#236656]" : "text-slate-400 hover:text-slate-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex justify-center flex-1 lg:w-1/3">
            <Link to="/" className="group flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif font-medium tracking-tighter text-slate-900 transition-all duration-300">
                B-YOUR <span className="italic font-light text-[#236656]">Journal.</span>
              </span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center justify-end lg:w-1/3">
            <div className="relative" ref={dropdownRef}>
              {user ? (
                <div className="flex items-center gap-3">
                  {/* Profile Avatar */}
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="relative focus:outline-none transition-transform active:scale-95"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 p-[2px] hover:border-[#236656] transition-colors">
                      <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center">
                        {user?.profileImage ? (
                          <img
                            src={user.profileImage}
                            alt="profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={18} className="text-slate-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Name & Email (Desktop only) */}
                  <div className="hidden md:block text-left max-w-[150px]">
                    <p className="text-[12px] font-bold text-slate-900 leading-tight truncate">
                      {user?.name}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate lowercase font-medium">
                      {user?.email}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        className="absolute right-0 top-full mt-3 w-56 bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden"
                      >
                        <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/30">
                          <p className="text-[13px] font-bold text-slate-900 truncate">
                            {user?.name}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">{user?.email}</p>
                        </div>
                        <div className="p-2">
                          <Link
                            to="/dashboard"
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-[12px] text-slate-600 hover:bg-[#236656]/5 hover:text-[#236656] rounded-xl transition-all font-medium"
                          >
                            <LayoutGrid size={15} strokeWidth={1.5} /> Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] text-rose-500 hover:bg-rose-50 rounded-xl font-medium transition-colors mt-1"
                          >
                            <LogOut size={15} strokeWidth={1.5} /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Login/Signup Buttons (Hidden on Mobile Header) */
                <div className="hidden lg:flex items-center gap-6">
                  <Link
                    to="/login"
                    className="text-[12px] font-bold text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    LOG IN
                  </Link>
                  <Link
                    to="/register"
                    className="text-[11px] font-bold text-white bg-slate-900 px-7 py-2.5 rounded-full hover:bg-[#236656] shadow-sm transition-all"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[110] lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs bg-white z-[120] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-50">
                <span className="text-xl md:text-2xl font-serif font-medium tracking-tighter text-slate-900 transition-all duration-300">
                B-YOUR <span className="italic font-light text-[#236656]">Journal.</span>
              </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:bg-slate-50 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col px-4 mt-6 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-3.5 px-4 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    <item.icon size={18} strokeWidth={1.5} />
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Auth Button Section */}
              <div className="mt-auto p-6 border-t border-slate-50">
                {user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-2 mb-2">
                       <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          {user?.profileImage ? (
                            <img src={user.profileImage} className="w-full h-full object-cover" alt="mobile-profile" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400"><User size={20}/></div>
                          )}
                       </div>
                       <div className="overflow-hidden">
                          <p className="text-sm font-bold truncate">{user?.name}</p>
                          <p className="text-[10px] text-slate-500 truncate lowercase">{user?.email}</p>
                       </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 w-full py-3.5 text-rose-500 font-bold text-xs bg-rose-50 rounded-xl"
                    >
                      <LogOut size={16} /> SIGN OUT
                    </button>
                  </div>
                ) : (
                  /* Mobile Only: Single Clean Login Button */
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block py-4 bg-slate-900 text-white text-center rounded-2xl font-bold text-xs tracking-widest hover:bg-[#236656] transition-colors"
                  >
                    LOG IN
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;