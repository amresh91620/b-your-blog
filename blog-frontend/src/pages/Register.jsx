import { useState, useEffect, useRef } from "react";
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

  // --- States ---
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

  // --- Animations (Same as Login) ---
  const containerVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 }
  };

  // Timer Effect
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
    if (!formData.email.includes("@")) {
      return toast.error("Enter valid email");
    }
    setOtpLoading(true);
    try {
      const res = await dispatch(sendOtpThunk(formData.email));
      if (res.type.includes("fulfilled")) {
        toast.success("OTP Sent Successfully");
        setTimer(30);
        setCanResend(false);
      } else {
        toast.error(res.payload || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (formData.otp.length !== 6) return toast.error("Enter 6-digit OTP");
    const res = await dispatch(
      verifyOtpThunk({
        email: formData.email,
        otp: formData.otp,
      })
    );
    if (res.type.includes("fulfilled")) {
      toast.success("Email Verified");
    } else {
      toast.error(res.payload || "Invalid OTP");
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtpArr = formData.otp.split("");
    newOtpArr[index] = value.substring(value.length - 1);
    const combinedOtp = newOtpArr.join("");
    setFormData({ ...formData, otp: combinedOtp });
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFinalRegister = async (e) => {
    e.preventDefault();
    if (!emailVerified) return toast.error("Verify email first");
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    const res = await dispatch(
      registerThunk({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
    if (res.type.includes("fulfilled")) {
      toast.success("Account Created");
      navigate("/login");
    } else {
      toast.error(res.payload);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-start md:items-center justify-center pt-28 pb-12 px-6 font-sans text-slate-900 relative overflow-x-hidden">
      
      {/* Background Decorative Line - Isse 'fixed' kiya taaki scroll karne par ye top par hi rahe */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600 z-50" />

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        // CHANGE 3: Max-height aur responsiveness handle ki
        className="w-full max-w-[480px] bg-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 z-10 my-auto"
      >
        {/* HEADER */}
        <header className="mb-8">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
            <Sparkles size={24} />
          </div>
          <h2 className="text-3xl font-serif font-medium tracking-tight text-slate-900">
            Join the story
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Create an account to start your writing journey.
          </p>
        </header>

        <form className="space-y-5" onSubmit={handleFinalRegister}>
          {/* NAME */}
          <motion.div variants={itemVars} className="space-y-1.5">
            <label className="text-[13px] font-medium text-slate-700 ml-1">Full Name</label>
            <div className="group relative flex items-center">
              <User size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                required
              />
            </div>
          </motion.div>

          {/* EMAIL & VERIFY */}
          <motion.div variants={itemVars} className="space-y-1.5">
            <label className="text-[13px] font-medium text-slate-700 ml-1">Email Address</label>
            <div className={`group relative flex items-center transition-all ${emailVerified ? 'ring-2 ring-emerald-500/10' : ''}`}>
              <Mail size={18} className={`absolute left-4 ${emailVerified ? 'text-emerald-500' : 'text-slate-400 group-focus-within:text-teal-600'} transition-colors`} />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={otpSent || emailVerified}
                placeholder="name@example.com"
                className={`w-full pl-12 pr-12 py-3.5 rounded-2xl outline-none text-sm transition-all border border-transparent
                  ${emailVerified ? "bg-emerald-50 text-emerald-700 font-medium" : "bg-slate-50 focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5"}`}
                required
              />
              {emailVerified && <CheckCircle2 size={18} className="absolute right-4 text-emerald-500" />}
            </div>

            {!emailVerified && formData.email.includes("@") && (
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading || (otpSent && !canResend)}
                  className="text-[12px] font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-all disabled:opacity-50"
                >
                  {otpLoading ? <RefreshCcw size={12} className="animate-spin" /> : null}
                  {otpSent ? (canResend ? "Resend OTP" : `Resend in ${timer}s`) : "Verify Email"}
                </button>
              </div>
            )}
          </motion.div>

          {/* OTP GRID (Same as before) */}
          <AnimatePresence>
            {otpSent && !emailVerified && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 my-2">
                  <p className="text-[11px] uppercase font-bold text-slate-400 mb-4 text-center tracking-widest">Security Code</p>
                  <div className="flex justify-between gap-2 mb-4">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={formData.otp[index] || ""}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-12 border border-slate-200 rounded-xl text-center text-xl font-bold bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={formData.otp.length !== 6 || loading}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={16} />
                    {loading ? "Verifying..." : "Confirm Code"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PASSWORDS (Grid) */}
          <motion.div variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-slate-700 ml-1">Password</label>
              <div className="group relative flex items-center">
                <Lock size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-slate-700 ml-1">Confirm</label>
              <div className="group relative flex items-center">
                <Lock size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* SUBMIT */}
          <motion.button
            variants={itemVars}
            whileHover={emailVerified ? { y: -2 } : {}}
            whileTap={emailVerified ? { scale: 0.98 } : {}}
            type="submit"
            disabled={!emailVerified || loading}
            className={`w-full mt-2 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all shadow-xl
              ${emailVerified && !loading
                ? "bg-slate-900 text-white shadow-slate-200 hover:bg-slate-800"
                : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"}`}
          >
            {loading ? "Creating account..." : "Complete Registration"}
            {!loading && <ArrowRight size={18} className="ml-2" />}
          </motion.button>
        </form>

        <footer className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Already a member?{" "}
            <Link to="/login" className="text-slate-900 font-bold hover:underline decoration-teal-500 underline-offset-4">
              Sign In
            </Link>
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Register;