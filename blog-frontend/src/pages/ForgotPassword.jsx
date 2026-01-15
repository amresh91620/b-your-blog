import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, KeyRound, ArrowLeft, RotateCcw, ShieldCheck, Eye, EyeOff, Feather } from "lucide-react";
import toast from "react-hot-toast";
import { forgotPasswordThunk, resetPasswordThunk } from "../features/auth/authThunk";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, step]);

  const handleRequestOtp = async (e) => {
    if (e) e.preventDefault();
    const res = await dispatch(forgotPasswordThunk(email));
    if (forgotPasswordThunk.fulfilled.match(res)) {
      toast.success("OTP sent to your email");
      setStep(2);
      setTimer(30);
      setCanResend(false);
    } else {
      toast.error(res.payload);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    const res = await dispatch(
      resetPasswordThunk({
        email,
        otp: formData.otp,
        newPassword: formData.newPassword,
      })
    );
    if (resetPasswordThunk.fulfilled.match(res)) {
      toast.success("Password reset successful");
      navigate("/login");
    } else {
      toast.error(res.payload);
    }
  };

  return (
    <div className="h-screen w-full flex bg-[#f4f1ea] font-sans overflow-hidden">
      
      {/* LEFT SIDE: FORM SECTION */}
      <div className="w-full lg:w-[50%] h-full flex flex-col overflow-y-auto">
        <div className="flex-1 flex flex-col p-6 md:p-12 relative z-20 bg-[#f4f1ea]">
          
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
            <div className="max-w-[420px] w-full">
              <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <header className="mb-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-4 shadow-sm border border-slate-100">
                    <KeyRound size={28} />
                  </div>
                  <h1 className="text-4xl font-serif font-medium text-[#236656] mb-4 tracking-tight">Forgot password?</h1>
                  <p className="text-slate-500 text-base leading-relaxed">
                    No worries, we'll send you reset instructions.
                  </p>
                </header>

                <form onSubmit={handleRequestOtp} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
                    <div className="group relative flex items-center">
                      <Mail size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                      <input
                        type="email"
                        required
                        placeholder="Enter registered email"
                        className="w-full pl-14 pr-5 py-4 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="px-10 bg-[#236656] text-white py-4 rounded-full font-bold shadow-xl shadow-slate-200 hover:bg-slate-900 transition-all disabled:opacity-70 flex items-center justify-center gap-3 text-lg"
                  >
                    {loading ? "..." : "Send Reset Code"}
                    {!loading && <span className="text-2xl leading-none mb-1">›</span>}
                  </button>

                  <div className="pt-4">
                    <Link to="/login" className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-900 transition-colors font-medium">
                      <ArrowLeft size={16} /> Back to login
                    </Link>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <header className="mb-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 shadow-sm border border-emerald-100">
                    <ShieldCheck size={28} />
                  </div>
                  <h1 className="text-4xl font-serif font-medium tracking-tight text-[#236656] mb-2">Verify Identity</h1>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Code sent to <span className="text-slate-900 font-semibold">{email}</span>
                  </p>
                </header>

                <form onSubmit={handleResetPassword} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Reset Code</label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      placeholder="000000"
                      className="w-full py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-slate-400 text-center text-2xl font-bold tracking-[0.4em] transition-all shadow-sm"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, "") })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="relative group flex items-center">
                      <Lock size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                      <input
                        type={showNewPassword ? "text" : "password"}
                        required
                        placeholder="New password"
                        className="w-full pl-14 pr-14 py-4 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 transition-all text-sm shadow-sm"
                        value={formData.newPassword}
                        onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                      />
                      <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-5 text-slate-400 hover:text-slate-900">
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    <div className="relative group flex items-center">
                      <Lock size={18} className="absolute left-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        placeholder="Confirm new password"
                        className="w-full pl-14 pr-14 py-4 bg-white border border-slate-200 rounded-full outline-none focus:border-slate-400 transition-all text-sm shadow-sm"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-5 text-slate-400 hover:text-slate-900">
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full bg-[#236656] text-white py-4 rounded-full font-bold shadow-xl shadow-slate-200 hover:bg-slate-900 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {loading ? "..." : "Reset Password"}
                  </button>

                  <div className="flex flex-col items-center gap-4 mt-6">
                    {canResend ? (
                      <button 
                        type="button" 
                        onClick={handleRequestOtp} 
                        className="text-sm text-slate-900 font-bold flex items-center gap-2 hover:bg-white px-6 py-2 rounded-full border border-slate-200 transition-all"
                      >
                        <RotateCcw size={14} /> Resend OTP
                      </button>
                    ) : (
                      <p className="text-xs text-slate-400 font-medium">
                        Resend code in <span className="text-slate-900 font-bold">{timer}s</span>
                      </p>
                    )}
                    
                    <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-slate-900 underline underline-offset-4">
                      Change email address
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
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
          src="https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=2070&auto=format&fit=crop" 
          alt="Security and Privacy" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-24 text-white">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="max-w-md ml-12"
          >
            <h2 className="text-5xl font-serif italic mb-6 leading-tight tracking-tight">
              Your privacy is<br/> our priority.
            </h2>
            <div className="w-full h-[1px] bg-white/30 mb-6" />
            <p className="text-white/80 text-xl font-light italic tracking-wide">
              Securely manage your personal journal account.
            </p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default ForgotPassword;