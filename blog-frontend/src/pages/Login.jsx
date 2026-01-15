import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence add kiya
import { Mail, Lock, Eye, EyeOff, Feather, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loginThunk } from "../features/auth/authThunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginThunk(formData));
    if (res.type.includes("fulfilled")) {
      toast.success("Login successful");
      navigate("/");
    } else {
      toast.error(res.payload || "Login failed");
    }
  };

  return (
    <div className="h-screen w-full flex  bg-[#FDFCF8]  font-sans overflow-hidden">
      
      {/* LEFT SIDE: FORM SECTION */}
      <div className="w-full lg:w-[50%] h-full flex flex-col overflow-y-auto">
        <div className="flex-1 flex flex-col p-6 md:p-12 relative z-20  bg-[#FDFCF8] ">
          
          {/* Back Button & Logo */}
          <div className="flex-shrink-0 mb-4 flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft size={20} className="text-slate-600" />
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#236656] rounded-xl flex items-center justify-center text-white">
                <Feather size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter text-[#236656] uppercase">
                B-YOUR <span className="text-slate-400 font-light lowercase font-sans">Journal.</span>
              </span>
            </Link>
          </div>

          {/* Center Content with Animation */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-[420px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }} // Left se slide hoke aayega
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <header className="mb-8">
                    <h1 className="text-4xl font-serif font-medium text-[#236656] mb-4 tracking-tight">
                      Welcome back
                    </h1>
                    <p className="text-slate-500 text-base leading-relaxed">
                      Enter your credentials to access your library.
                    </p>
                  </header>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
                      <div className="group relative flex items-center">
                        <Mail size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full pl-14 pr-5 py-4 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-slate-700 ml-1">Password</label>
                      <div className="group relative flex items-center">
                        <Lock size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="w-full pl-14 pr-14 py-4 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm"
                          required
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 text-slate-400 hover:text-slate-900 transition-colors">
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* REMEMBER & FORGOT */}
                    <div className="flex items-center justify-between px-2">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-slate-300 accent-slate-900"
                        />
                        <span className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors">Keep me signed in</span>
                      </label>
                      <Link to="/forget-password" size={12} className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors">
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      disabled={loading}
                      className="w-full bg-[#236656] text-white py-4 rounded-full font-bold shadow-xl shadow-slate-200 hover:bg-slate-900 transition-all disabled:opacity-70 flex items-center justify-center gap-3 text-lg"
                    >
                      {loading ? "..." : "Sign In"}
                      {!loading && <span className="text-2xl leading-none mb-1">›</span>}
                    </button>
                  </form>

                  <footer className="mt-8">
                    <p className="text-sm text-slate-500">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-slate-900 font-bold underline underline-offset-8 decoration-slate-200 hover:decoration-slate-900 transition-all">
                        Create one for free
                      </Link>
                    </p>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE SECTION */}
      <div className="hidden lg:block relative lg:w-[50%] h-screen bg-slate-900">
        <svg 
          className="absolute left-[-1px] top-0 h-full w-40  fill-[#FDFCF8]  z-10" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d="M100 0 C 20 0, 20 100, 100 100 L 0 100 L 0 0 Z" />
        </svg>
        
        <img 
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop" 
          alt="Journaling" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-24 text-white z-0">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-md ml-12"
          >
            <h2 className="text-5xl font-serif italic mb-6 leading-tight tracking-tight">
              The pages are blank, but<br/> the possibilities are endless.
            </h2>
            <div className="w-full h-[1px] bg-white/30 mb-6" />
            <p className="text-white/80 text-xl font-light italic tracking-wide">
              Capturing moments, one page at a time
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;