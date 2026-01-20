import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Save, User, Trash2, Loader2, X, Mail, AlignLeft, ShieldCheck, CheckCircle2, Edit3 } from 'lucide-react';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, updateProfile } from '../../features/auth/profileSlice';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.profile);

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    bio: '',
    avatar: null,
    previewUrl: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropping, setCropping] = useState(false);
  const [tempImage, setTempImage] = useState(null);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        bio: user.bio || '',
        avatar: null,
        previewUrl: user.profileImage || null
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return toast.error("Please select an image file");
    if (file.size > 5 * 1024 * 1024) return toast.error("Image size should be less than 5MB");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setTempImage(reader.result);
      setCropping(true);
    };
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const saveCroppedImage = async () => {
    try {
      const croppedFile = await getCroppedImg(tempImage, croppedAreaPixels);
      const newPreviewUrl = URL.createObjectURL(croppedFile);
      setProfileData(prev => ({ ...prev, avatar: croppedFile, previewUrl: newPreviewUrl }));
      setCropping(false);
      setTempImage(null);
      toast.success("Avatar ready to save!");
    } catch (err) {
      toast.error("Failed to process image");
    }
  };

  const handleSave = async () => {
    if (profileData.name.trim().length < 3) return toast.error("Name is too short");
    try {
      await dispatch(updateProfile({
        name: profileData.name,
        bio: profileData.bio,
        avatar: profileData.avatar
      })).unwrap();
      setIsEditing(false);
      toast.success("Profile synchronized!");
    } catch (err) {
      toast.error(err || "Update failed");
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Settings</h1>
            <p className="text-slate-500 mt-1 font-medium">Manage your public identity and personal details.</p>
          </div>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-700 font-bold shadow-sm hover:bg-slate-50 transition-all active:scale-95"
            >
              <Edit3 size={18} /> Edit Profile
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Avatar Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col items-center shadow-sm">
              <div className="relative group">
                <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden ring-4 ring-slate-50 shadow-md bg-slate-100 transition-all duration-500">
                  <img
                    src={profileData.previewUrl || `https://ui-avatars.com/api/?name=${profileData.name}&background=10b981&color=fff`}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <label className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#0F172A] text-white rounded-2xl shadow-xl flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-all border-4 border-white">
                    <Camera size={20} />
                    <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                  </label>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{profileData.name || 'User'}</h3>
                <div className="inline-flex items-center mt-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  <CheckCircle2 size={12} className="mr-1.5" /> Verified Author
                </div>
              </div>

              {isEditing && profileData.previewUrl && (
                <button 
                  onClick={() => setProfileData(p => ({...p, avatar: null, previewUrl: null}))} 
                  className="mt-6 flex items-center text-rose-500 text-xs font-bold hover:bg-rose-50 px-4 py-2 rounded-xl transition-colors"
                >
                  <Trash2 size={14} className="mr-2" /> Remove Photo
                </button>
              )}
            </div>

            {/* Verification Stats */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-lg shadow-slate-200">
               <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-white/10 rounded-xl"><ShieldCheck size={20} className="text-emerald-400"/></div>
                  <span className="text-sm font-bold">Trust Badge</span>
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">Your account is fully verified. You can publish stories and engage with the community.</p>
            </div>
          </div>

          {/* Form Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-50 text-slate-600 rounded-2xl border border-slate-100">
                    <AlignLeft size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Display Name</label>
                      <input 
                        type="text" name="name" 
                        value={profileData.name} 
                        onChange={handleInputChange} 
                        disabled={!isEditing}
                        placeholder="Your name"
                        className={`w-full px-5 py-4 rounded-2xl border transition-all outline-none text-sm font-semibold ${
                          isEditing 
                          ? 'bg-white border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5' 
                          : 'bg-slate-50 border-transparent text-slate-500'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="email" 
                          value={profileData.email} 
                          disabled 
                          className="w-full pl-12 pr-5 py-4 bg-slate-50 border-transparent rounded-2xl text-slate-400 text-sm font-semibold cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Short Bio</label>
                    <textarea 
                      name="bio" 
                      value={profileData.bio} 
                      onChange={handleInputChange} 
                      disabled={!isEditing} 
                      rows={5}
                      placeholder="Write a few words about yourself..."
                      className={`w-full p-5 rounded-2xl border transition-all outline-none resize-none text-sm font-semibold leading-relaxed ${
                        isEditing 
                        ? 'bg-white border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5' 
                        : 'bg-slate-50 border-transparent text-slate-500'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              {isEditing && (
                <div className="bg-slate-50 p-6 border-t border-slate-100 flex items-center justify-end gap-4">
                  <button 
                    onClick={() => setIsEditing(false)} 
                    disabled={loading} 
                    className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Discard
                  </button>
                  <button 
                    onClick={handleSave} 
                    disabled={loading} 
                    className="px-8 py-3 bg-[#0F172A] text-white font-bold rounded-2xl shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all flex items-center disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 size={18} className="mr-2 animate-spin" />
                    ) : (
                      <Save size={18} className="mr-2 text-emerald-400" />
                    )}
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Cropper Overlay */}
      {cropping && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-[100] p-6">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800 tracking-tight">Adjust Profile Picture</h3>
              <button onClick={() => setCropping(false)} className="p-2 hover:bg-slate-200 rounded-xl transition-all">
                <X size={20} />
              </button>
            </div>
            
            <div className="relative h-72 bg-slate-200">
              <Cropper
                image={tempImage}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape="round"
                showGrid={false}
              />
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                   <span>Zoom</span>
                   <span>{(zoom * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setCropping(false)} className="flex-1 py-4 font-bold text-slate-400 hover:bg-slate-50 rounded-2xl transition-colors">Cancel</button>
                <button onClick={saveCroppedImage} className="flex-1 py-4 bg-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all">Apply</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;