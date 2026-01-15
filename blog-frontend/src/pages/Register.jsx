import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  User,
  Mail,
  Lock,
  CheckCircle2,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  RefreshCcw,
  Feather
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  sendOtpThunk,
  verifyOtpThunk,
  registerThunk,
} from "../features/auth/authThunk";

const Register = () => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const { loading, otpSent, emailVerified } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    if (!formData.email.includes("@")) return toast.error("Enter valid email");
    setOtpLoading(true);
    const res = await dispatch(sendOtpThunk(formData.email));
    if (res.type.includes("fulfilled")) {
      toast.success("OTP Sent");
      setTimer(30);
      setCanResend(false);
    } else {
      toast.error(res.payload || "Failed to send OTP");
    }
    setOtpLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (formData.otp.length !== 6) return toast.error("Enter 6-digit OTP");
    const res = await dispatch(verifyOtpThunk({ email: formData.email, otp: formData.otp }));
    if (res.type.includes("fulfilled")) toast.success("Email Verified");
    else toast.error(res.payload || "Invalid OTP");
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtpArr = formData.otp.split("");
    newOtpArr[index] = value.substring(value.length - 1);
    const combinedOtp = newOtpArr.join("");
    setFormData({ ...formData, otp: combinedOtp });
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFinalRegister = async (e) => {
    e.preventDefault();
    if (!emailVerified) return toast.error("Verify email first");
    if (formData.password !== formData.confirmPassword) return toast.error("Passwords do not match");
    const res = await dispatch(registerThunk({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }));
    if (res.type.includes("fulfilled")) {
      toast.success("Account Created");
      navigate("/login");
    } else {
      toast.error(res.payload);
    }
  };

  return (
    <div className="h-screen w-full flex bg-[#f4f1ea] font-sans overflow-hidden">
      
      {/* LEFT SIDE: FORM SECTION */}
      <div className="w-full lg:w-[50%] h-full flex flex-col overflow-y-auto">
        <div className="flex-1 flex flex-col p-6 md:p-8 relative z-20 bg-[#f4f1ea]">
          
          {/* Logo */}
          <div className="flex-shrink-0 mb-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#236656] rounded-xl flex items-center justify-center text-white">
                <Feather size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter text-[#236656] uppercase">
                B-YOUR <span className="text-slate-400 font-light lowercase font-sans">Journal.</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-[440px] w-full">
              <header className="mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-4 shadow-sm border border-slate-100">
                  <Sparkles size={24} />
                </div>
                <h1 className="text-4xl font-serif font-medium text-[#236656] mb-2 tracking-tight">Join the story</h1>
                <p className="text-slate-500 text-base">Create an account to start your writing journey.</p>
              </header>

          <form className="space-y-4" onSubmit={handleFinalRegister}>
            {/* NAME */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700 ml-1">Full Name</label>
              <div className="group relative flex items-center">
                <User size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-14 pr-5 py-3.5 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 transition-all text-sm shadow-sm"
                  required
                />
              </div>
            </div>

            {/* EMAIL & VERIFY */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative flex items-center group">
                <Mail size={18} className={`absolute left-5 ${emailVerified ? 'text-emerald-500' : 'text-slate-400 group-focus-within:text-slate-900'}`} />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={otpSent || emailVerified}
                  placeholder="name@example.com"
                  className={`w-full pl-14 pr-12 py-3.5 rounded-full text-sm transition-all border outline-none shadow-sm
                    ${emailVerified ? "bg-emerald-50 border-emerald-100 text-emerald-700 font-medium" : "bg-white border-slate-200 focus:border-slate-400"}`}
                  required
                />
                {emailVerified && <CheckCircle2 size={18} className="absolute right-5 text-emerald-500" />}
              </div>

              {!emailVerified && formData.email.includes("@") && (
                <div className="flex justify-end pr-2">
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpLoading || (otpSent && !canResend)}
                    className="text-[12px] font-bold text-slate-900 hover:text-slate-600 flex items-center gap-1 transition-all disabled:opacity-50"
                  >
                    {otpLoading ? <RefreshCcw size={12} className="animate-spin" /> : null}
                    {otpSent ? (canResend ? "Resend OTP" : `Resend in ${timer}s`) : "Verify Email"}
                  </button>
                </div>
              )}
            </div>

            {/* OTP SECTION */}
            <AnimatePresence>
              {otpSent && !emailVerified && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-5 bg-white rounded-3xl border border-slate-200 shadow-inner my-2">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-4 text-center tracking-widest">Security Code</p>
                  <div className="flex justify-between gap-2 mb-4">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        type="text"
                        maxLength="1"
                        value={formData.otp[idx] || ""}
                        onChange={(e) => handleOtpChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="w-10 h-12 border border-slate-200 rounded-xl text-center text-xl font-bold bg-slate-50 focus:border-slate-900 focus:bg-white outline-none transition-all"
                      />
                    ))}
                  </div>
                  <button type="button" onClick={handleVerifyOtp} className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                    <ShieldCheck size={16} /> Verify Code
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PASSWORDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700 ml-1">Password</label>
                <div className="relative flex items-center group">
                  <Lock size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 text-sm shadow-sm"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700 ml-1">Confirm</label>
                <div className="relative flex items-center group">
                  <Lock size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 text-sm shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!emailVerified || loading}
              className={`w-full mt-4 py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-xl text-lg
                ${emailVerified && !loading ? "bg-[#236656] text-white hover:bg-slate-900" : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"}`}
            >
              {loading ? "..." : "Complete Registration"}
              {!loading && <ArrowRight size={20} className="ml-2" />}
            </button>
          </form>

              <footer className="mt-6 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  Already a member? <Link to="/login" className="text-slate-900 font-bold underline underline-offset-4 decoration-slate-200 hover:decoration-slate-900 transition-all">Sign In</Link>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE SECTION WITH CURVE */}
      <div className="hidden lg:block relative lg:w-[50%] h-screen bg-slate-900">
        <svg 
          className="absolute left-[-1px] top-0 h-full w-40 fill-[#f4f1ea] z-10" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d="M100 0 C 20 0, 20 100, 100 100 L 0 100 L 0 0 Z" />
        </svg>
        
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
          alt="Creative Writing" 
          className="w-full h-full object-cover grayscale-[10%]"
        />
        
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-24 text-white">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="max-w-md ml-12"
          >
            <h2 className="text-5xl font-serif italic mb-6 leading-tight tracking-tight">
              Every story<br/> begins with a word.
            </h2>
            <div className="w-full h-[1px] bg-white/30 mb-6" />
            <p className="text-white/80 text-xl font-light italic tracking-wide">
              Join 1000+ writers sharing their daily journey.
            </p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Register;