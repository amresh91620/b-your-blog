import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Camera, Save, User, Trash2, Loader2, X, Mail, AlignLeft, 
  ShieldCheck, CheckCircle2, Edit3, Lock, Smartphone, LogOut, 
  Eye, EyeOff, AlertTriangle, KeyRound, BellRing 
} from 'lucide-react';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProfile, updateProfile, changePassword, logoutAllSessions, deleteAccount, clearProfile } from '../../features/auth/profileSlice';
import { logout } from '../../features/auth/authSlice';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, passwordLoading, dangerLoading } = useSelector((state) => state.profile);
  const authUser = useSelector((state) => state.auth?.user || null);

  // --- States for Profile ---
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropping, setCropping] = useState(false);
  const [tempImage, setTempImage] = useState(null);
  const [profileOverrides, setProfileOverrides] = useState({});

  // Derive profile data from user or overrides
  const profileData = useMemo(() => {
    const baseData = {
      name: user?.name || '',
      email: user?.email || '',
      bio: user?.bio || '',
      avatar: null,
      previewUrl: user?.profileImage || null
    };
    return { ...baseData, ...profileOverrides };
  }, [user, profileOverrides]);

  // --- States for Security ---
  const [passwordData, setPasswordData] = useState({
    currentPassword: '', newPassword: '', confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false, new: false, confirm: false
  });

  // --- States for Danger Zone ---
  const [deletePassword, setDeletePassword] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Only fetch profile if user is authenticated
    if (authUser) {
      dispatch(fetchProfile());
    }
  }, [dispatch, authUser]);

  // --- Profile Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileOverrides(prev => ({ ...prev, [name]: value }));
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
      setProfileOverrides(prev => ({ ...prev, avatar: croppedFile, previewUrl: newPreviewUrl }));
      setCropping(false);
      setTempImage(null);
      toast.success("Avatar ready to save!");
    } catch (error) {
      console.error("Error cropping image:", error);
      toast.error("Failed to process image");
    }
  };

  const handleSaveProfile = async () => {
    if (profileData.name.trim().length < 3) return toast.error("Name is too short");
    try {
      await dispatch(updateProfile({
        name: profileData.name,
        bio: profileData.bio,
        avatar: profileData.avatar
      })).unwrap();
      setIsEditing(false);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err || "Update failed");
    }
  };

  // --- Security Handlers ---
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChangePassword = async () => {
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      return toast.error("Please fill all fields");
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return toast.error('New passwords do not match');
    }
    if (passwordData.newPassword.length < 8) {
      return toast.error('Password must be at least 8 characters');
    }
    
    try {
      await dispatch(changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      })).unwrap();
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      toast.success('Password changed successfully');
    } catch (err) {
      toast.error(err || 'Failed to change password');
    }
  };

  // --- Danger Zone Handlers ---
  const handleLogoutAllSessions = async () => {
    try {
      await dispatch(logoutAllSessions()).unwrap();
      dispatch(logout());
      dispatch(clearProfile());
      localStorage.removeItem('token');
      toast.success('All sessions logged out successfully');
      navigate('/login');
    } catch (err) {
      toast.error(err || 'Failed to logout all sessions');
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) {
      return toast.error('Please enter your password');
    }
    
    try {
      await dispatch(deleteAccount(deletePassword)).unwrap();
      dispatch(logout());
      dispatch(clearProfile());
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success('Account deleted successfully');
      navigate('/');
    } catch (err) {
      toast.error(err || 'Failed to delete account');
      setShowDeleteModal(false);
      setDeletePassword('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-slate-900 mb-2">
            Account Settings
          </h1>
          <div className="h-1 w-20 bg-slate-300 mb-4"></div>
          <p className="text-slate-600">
            Manage your personal information and account security
          </p>
        </div>

        {/* Classic Tab Navigation */}
        <div className="flex border-b border-slate-300 mb-8">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-medium text-sm tracking-wide border-b-2 transition-all ${activeTab === 'profile' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 font-medium text-sm tracking-wide border-b-2 transition-all ${activeTab === 'security' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Security
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={profileData.previewUrl || `https://ui-avatars.com/api/?name=${profileData.name}&background=1e293b&color=fff&bold=true`}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeTab === 'profile' && isEditing && (
                  <label className="absolute bottom-0 right-1/2 translate-x-4 w-10 h-10 bg-slate-900 text-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-all border-2 border-white">
                    <Camera size={16} />
                    <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                  </label>
                )}
              </div>
              
              {/* Profile Info */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {profileData.name || 'User Name'}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{profileData.email}</p>
                <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                  <CheckCircle2 size={10} className="mr-1.5" /> Verified Member
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 my-6"></div>

              {/* Account Status */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <ShieldCheck size={18} className="text-slate-600"/>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Account Status</h4>
                  <p className="text-xs text-slate-500">
                    {activeTab === 'profile' 
                      ? "Your profile is currently visible to other users." 
                      : "Your account security is active and monitored."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:col-span-8">
            
            {activeTab === 'profile' ? (
              /* --- Profile Content --- */
              <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
                <div className="p-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <User size={20} className="text-slate-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Personal Information</h2>
                        <p className="text-sm text-slate-500">Update your personal details</p>
                      </div>
                    </div>
                    {!isEditing ? (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
                      >
                        <Edit3 size={14}/> Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSaveProfile}
                          disabled={loading}
                          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                          {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Display Name
                        </label>
                        <input 
                          type="text" 
                          name="name" 
                          value={profileData.name} 
                          onChange={handleInputChange} 
                          disabled={!isEditing}
                          autoComplete="name"
                          className={`w-full px-4 py-3 rounded-lg border text-sm ${isEditing ? 'border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900' : 'border-slate-200 bg-slate-50 text-slate-500'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <input 
                            type="email" 
                            value={profileData.email} 
                            disabled 
                            autoComplete="email"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Biography
                      </label>
                      <textarea 
                        name="bio" 
                        value={profileData.bio} 
                        onChange={handleInputChange} 
                        disabled={!isEditing} 
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border text-sm ${isEditing ? 'border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900' : 'border-slate-200 bg-slate-50 text-slate-500'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* --- Security Content --- */
              <div className="space-y-6">
                {/* Password Update Card */}
                <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <KeyRound size={20} className="text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Update Password</h2>
                      <p className="text-sm text-slate-500">Secure your account with a strong password</p>
                    </div>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); handleChangePassword(); }} className="space-y-6">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPasswords.current ? 'text' : 'password'}
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          autoComplete="current-password"
                          className="w-full px-4 py-3 pl-10 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                          placeholder="Enter current password"
                        />
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <button 
                          type="button"
                          onClick={() => togglePasswordVisibility('current')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPasswords.current ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* New Passwords */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPasswords.new ? 'text' : 'password'}
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            autoComplete="new-password"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                          />
                          <button 
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPasswords.confirm ? 'text' : 'password'}
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            autoComplete="new-password"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                          />
                          <button 
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Update Button */}
                    <div className="pt-6 border-t border-slate-200">
                      <button
                        type="submit"
                        disabled={passwordLoading || !passwordData.newPassword}
                        className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                      >
                        {passwordLoading ? (
                          <Loader2 className="animate-spin" size={16} />
                        ) : (
                          <Lock size={16} />
                        )}
                        {passwordLoading ? 'Updating...' : 'Update Password'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Danger Zone */}
                <div className="bg-white border border-red-100 shadow-sm rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle size={20} className="text-red-600" />
                    <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
                  </div>
                  <div className="space-y-4">
                    <button 
                      onClick={handleLogoutAllSessions}
                      disabled={dangerLoading}
                      className="w-full flex items-center justify-between p-4 border border-red-100 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        {dangerLoading ? <Loader2 size={16} className="text-red-600 animate-spin" /> : <LogOut size={16} className="text-red-600" />}
                        <span className="font-medium text-red-900">Logout All Sessions</span>
                      </div>
                      <span className="text-red-600">→</span>
                    </button>
                    <button 
                      onClick={() => setShowDeleteModal(true)}
                      disabled={dangerLoading}
                      className="w-full flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <Trash2 size={16} className="text-red-700" />
                        <span className="font-medium text-red-900">Delete Account</span>
                      </div>
                      <span className="text-red-700">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Classic Cropper Modal */}
      {cropping && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-900">Adjust Profile Picture</h3>
              <button
                onClick={() => setCropping(false)}
                className="p-1 hover:bg-slate-100 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="relative h-64 bg-slate-100 rounded-lg overflow-hidden mb-6">
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
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
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
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setCropping(false)}
                    className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveCroppedImage}
                    className="flex-1 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    Apply Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-red-900">Delete Account</h3>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletePassword('');
                }}
                className="p-1 hover:bg-slate-100 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="text-red-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Are you absolutely sure?</h4>
                  <p className="text-sm text-slate-600">This action cannot be undone.</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-4">
                This will permanently delete your account and all associated data. Please enter your password to confirm.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); handleDeleteAccount(); }} className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                  placeholder="Enter your password"
                />
              </form>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeletePassword('');
                  }}
                  className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={dangerLoading || !deletePassword}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {dangerLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Trash2 size={16} />
                  )}
                  {dangerLoading ? 'Deleting...' : 'Delete Account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;