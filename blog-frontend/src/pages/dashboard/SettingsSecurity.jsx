import React, { useState } from 'react';
import { 
  Lock, Shield, Smartphone, Trash2, LogOut, Eye, EyeOff, 
  AlertTriangle, KeyRound, ShieldCheck, BellRing 
} from 'lucide-react';

const SettingsSecurity = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    setIsChangingPassword(true);
    setTimeout(() => {
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setIsChangingPassword(false);
      alert('Password changed successfully');
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Area */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Privacy & Security</h1>
        <p className="text-slate-500 font-medium mt-1">Manage your credentials and protect your digital presence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Password Management */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <KeyRound size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Update Password</h2>
                <p className="text-sm text-slate-500">Ensure your account uses a long, random password.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Current Password</label>
                <div className="relative group">
                  <input
                    type={showPasswords.current ? 'text' : 'password'}
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 focus:bg-white transition-all outline-none text-slate-600 font-medium"
                    placeholder="••••••••••••"
                  />
                  <button
                    onClick={() => togglePasswordVisibility('current')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">New Password</label>
                  <div className="relative group">
                    <input
                      type={showPasswords.new ? 'text' : 'password'}
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 focus:bg-white transition-all outline-none text-slate-600 font-medium"
                      placeholder="New password"
                    />
                    <button
                      onClick={() => togglePasswordVisibility('new')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Confirm New Password</label>
                  <div className="relative group">
                    <input
                      type={showPasswords.confirm ? 'text' : 'password'}
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 focus:bg-white transition-all outline-none text-slate-600 font-medium"
                      placeholder="Confirm new password"
                    />
                    <button
                      onClick={() => togglePasswordVisibility('confirm')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={handleChangePassword}
                disabled={isChangingPassword || !passwordData.newPassword}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:opacity-50 transition-all flex items-center justify-center"
              >
                {isChangingPassword ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Updating...
                  </span>
                ) : (
                  <>
                    <Lock size={18} className="mr-2" />
                    Save New Password
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Security Features & Danger Zone */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Enhanced Security Toggle Card */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-8">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-indigo-600" />
              Advanced Protection
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-slate-400 group-hover:text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">2FA Auth</p>
                    <p className="text-[11px] text-slate-500 font-medium">Extra login layer</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative">
                   <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-indigo-50 border border-indigo-100 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <BellRing className="text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm font-bold text-indigo-900">Security Alerts</p>
                    <p className="text-[11px] text-indigo-600/70 font-medium">Email notifications</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-indigo-600 rounded-full relative">
                   <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full transition-all"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-rose-50/50 rounded-3xl border border-rose-100 p-8 shadow-sm shadow-rose-50">
            <div className="flex items-center gap-3 mb-6 text-rose-600">
              <AlertTriangle size={22} />
              <h3 className="text-lg font-extrabold">Danger Zone</h3>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => alert('Signing out everywhere...')}
                className="w-full flex items-center justify-between p-4 bg-white border border-rose-100 text-rose-600 rounded-2xl hover:bg-rose-600 hover:text-white transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center gap-3 text-left">
                  <LogOut size={18} />
                  <div>
                    <p className="text-sm font-bold">Logout Global</p>
                    <p className="text-[10px] opacity-70">Sign out from all devices</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => confirm('Delete account forever?')}
                className="w-full flex items-center justify-between p-4 bg-rose-600 text-white rounded-2xl hover:bg-rose-700 transition-all shadow-lg shadow-rose-200"
              >
                <div className="flex items-center gap-3 text-left">
                  <Trash2 size={18} />
                  <div>
                    <p className="text-sm font-bold">Deactivate Account</p>
                    <p className="text-[10px] text-rose-100">Permanent data removal</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsSecurity;