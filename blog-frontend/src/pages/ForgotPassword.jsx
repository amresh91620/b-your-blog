import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, KeyRound, ArrowLeft, RotateCcw, ShieldCheck, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { forgotPasswordThunk, resetPasswordThunk } from "../features/auth/authThunk";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  
  // Password Visibility States
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
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 font-sans text-slate-900">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] bg-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <KeyRound size={24} />
                </div>
                <h2 className="text-3xl font-serif font-medium text-slate-900">Forgot Password</h2>
                <p className="text-slate-500 text-sm mt-2">
                  No worries, we'll send you reset instructions.
                </p>
              </div>

              <form onSubmit={handleRequestOtp} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-slate-700 ml-1">Email Address</label>
                  <div className="group relative flex items-center">
                    <Mail size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                    <input
                      type="email"
                      required
                      placeholder="Enter registered email"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>

                <Link to="/login" className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
                  <ArrowLeft size={16} /> Back to login
                </Link>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8 text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 mx-auto">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-serif font-medium text-slate-900">Verify Email</h2>
                <p className="text-slate-500 text-sm mt-2">
                  Enter the code sent to <span className="text-slate-900 font-semibold">{email}</span>
                </p>
              </div>

              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-1.5">
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="0 0 0 0 0 0"
                    className="w-full py-4 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500 text-center text-2xl font-bold tracking-[0.5em] transition-all"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, "") })}
                  />
                </div>

                <div className="space-y-4 pt-2">
                  {/* NEW PASSWORD */}
                  <div className="group relative flex items-center">
                    <Lock size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                    <input
                      type={showNewPassword ? "text" : "password"}
                      required
                      placeholder="New password"
                      className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                      value={formData.newPassword}
                      onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div className="group relative flex items-center">
                    <Lock size={18} className="absolute left-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      placeholder="Confirm password"
                      className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500/30 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  disabled={loading}
                  className="w-full mt-2 bg-teal-600 text-white py-4 rounded-2xl font-semibold shadow-xl shadow-teal-100 hover:bg-teal-700 transition-all disabled:opacity-70"
                >
                  {loading ? "Updating..." : "Reset Password"}
                </button>

                <div className="flex flex-col items-center gap-4 mt-6">
                  {canResend ? (
                    <button 
                      type="button" 
                      onClick={handleRequestOtp} 
                      className="text-sm text-teal-600 font-bold flex items-center gap-2 hover:bg-teal-50 px-4 py-2 rounded-xl transition-all"
                    >
                      <RotateCcw size={14} /> Resend OTP
                    </button>
                  ) : (
                    <p className="text-xs text-slate-400 font-medium">
                      Resend code in <span className="text-slate-900">{timer}s</span>
                    </p>
                  )}
                  
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4"
                  >
                    Change Email Address
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;