import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react'; // Eye icons add kiye
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { loginThunk } from "../features/auth/authThunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false); // Password visibility state
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

  /* Animations */
  const containerVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]  flex items-center justify-center p-6 font-sans text-slate-900">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600" />
      
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="w-full max-w-[440px] bg-white p-10 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <header className="mb-10">
          <h1 className="text-3xl font-serif font-medium tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-slate-500 text-sm">
            Enter your credentials to access your library.
          </p>
        </header>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* EMAIL */}
          <motion.div variants={itemVars} className="space-y-1.5">
            <label className="text-[13px] font-medium text-slate-700 ml-1">
              Email Address
            </label>
            <div className="group relative flex items-center transition-all duration-300">
              <Mail size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                required
              />
            </div>
          </motion.div>

          {/* PASSWORD */}
          <motion.div variants={itemVars} className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-[13px] font-medium text-slate-700">
                Password
              </label>
              <Link
                to="/forget-password"
                className="text-[12px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="group relative flex items-center">
              <Lock size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              <input
                type={showPassword ? "text" : "password"} // Dynamic type
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                required
              />
              {/* Show/Hide Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </motion.div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2 px-1">
            <input
              type="checkbox"
              id="remember"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 accent-teal-600 cursor-pointer"
            />
            <label htmlFor="remember" className="text-sm text-slate-500 select-none cursor-pointer">
              Keep me signed in
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full mt-2 flex justify-center items-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-semibold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Sign In"}
            {!loading && <ArrowRight size={18} className="ml-1" />}
          </motion.button>
        </form>

        <footer className="text-center mt-10">
          <p className="text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-slate-900 font-bold hover:underline decoration-teal-500 underline-offset-4"
            >
              Create one for free
            </Link>
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Login;