import React, { useState } from 'react';
import { Camera, Save, Mail, User, FileText, ShieldCheck, BadgeCheck, Globe, Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Amresh Kumar',
    email: user?.email || 'amresh@writeflow.com',
    bio: 'Passionate full-stack developer with 5+ years of experience in React, Node.js, and modern web technologies. Love sharing knowledge through technical writing.',
    avatar: null
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setProfileData(prev => ({ ...prev, avatar: file }));
      }
    }
  };

  const stats = [
    { label: 'Published Blogs', value: '24', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Total Read Time', value: '450h', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Verified Reach', value: '12.5K', icon: BadgeCheck, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Account Settings</h1>
          <p className="text-slate-500 font-medium">Update your presence and profile across the platform</p>
        </div>
        
        <div className="flex items-center gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center"
            >
              <User size={18} className="mr-2" />
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-all"
              >
                Discard
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center"
              >
                <Save size={18} className="mr-2" />
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Details */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8">
            <h2 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center">
              <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
              Personal Details
            </h2>

            {/* Avatar Upload with Premium Ring */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-10 p-6 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl shadow-slate-200">
                  {profileData.avatar ? (
                    <img
                      src={URL.createObjectURL(profileData.avatar)}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-black">
                      {profileData.name.charAt(0)}
                    </div>
                  )}
                </div>
                {isEditing && (
                  <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 text-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Camera size={20} />
                    <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                  </label>
                )}
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-slate-900">Profile Picture</h4>
                <p className="text-sm text-slate-500 mb-3 leading-relaxed">PNG, JPG or GIF. Max 2MB recommended.</p>
                {isEditing && (
                   <button className="text-rose-600 text-sm font-bold flex items-center hover:underline">
                      <Trash2 size={14} className="mr-1" /> Remove photo
                   </button>
                )}
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all outline-none text-slate-600 font-medium disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email (Primary)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    value={profileData.email}
                    disabled
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-400 cursor-not-allowed font-medium"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2 pt-2">
                <label className="text-sm font-bold text-slate-700 ml-1">About Me / Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all outline-none text-slate-600 font-medium resize-none disabled:opacity-60 leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          {/* Stats Widget */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100">
            <h3 className="text-lg font-bold mb-6">Profile Analytics</h3>
            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                      <stat.icon size={20} />
                    </div>
                    <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
                  </div>
                  <span className="text-lg font-black">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Status Widget */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <ShieldCheck className="mr-2 text-indigo-600" size={22} />
              Trust & Safety
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="text-sm font-bold text-emerald-700">Identity Verified</span>
                <BadgeCheck className="text-emerald-600" size={18} />
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-sm font-bold text-slate-600">2FA Status</span>
                <span className="text-[10px] font-black bg-slate-200 px-2 py-0.5 rounded text-slate-700 uppercase">OFF</span>
              </div>
              <p className="text-[11px] text-slate-400 text-center px-2">
                Last updated on Jan 09, 2026. Manage these in Security tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;