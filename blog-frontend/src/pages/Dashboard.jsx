import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon, FileText, Plus, MessageCircle, User,
  Bell, BarChart3, Settings, LogOut, Menu, X, ArrowLeft, ChevronRight
} from "lucide-react"; 
import { logout } from "../features/auth/authSlice";
import { fetchProfile } from "../features/auth/profileSlice";

import DashboardHome from "./dashboard/DashboardHome";
import MyBlogs from "./dashboard/MyBlogs";
import CreateBlog from "./dashboard/CreateBlog";
import Comments from "./dashboard/Comments";
import Profile from "./dashboard/Profile";
import Notifications from "./dashboard/Notifications";
import Analytics from "./dashboard/Analytics";
import SettingsSecurity from "./dashboard/SettingsSecurity";

const Dashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth?.user || null);
  const user = useSelector((state) => state.profile?.user || authUser);

  useEffect(() => {
    if (location.state?.activeTab) setActiveTab(location.state.activeTab);
    dispatch(fetchProfile());
  }, [location.state, dispatch]);

  const menuItems = [
    { id: "home", label: "Dashboard", icon: HomeIcon },
    { id: "blogs", label: "My Stories", icon: FileText },
    { id: "create", label: "New Publication", icon: Plus },
    { id: "comments", label: "Engagements", icon: MessageCircle, badge: 5 },
    { id: "analytics", label: "Performance", icon: BarChart3 },
    { id: "notifications", label: "Inbox", icon: Bell, badge: 3 },
    { id: "profile", label: "Account", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to end your session?")) {
      dispatch(logout());
      toast.success("Signed out safely");
      setTimeout(() => { window.location.href = "/"; }, 500);
    }
  };

  const renderContent = () => {
    const components = {
      home: <DashboardHome />,
      blogs: <MyBlogs onCreateBlog={() => setActiveTab("create")} />,
      create: <CreateBlog />,
      comments: <Comments />,
      profile: <Profile />,
      notifications: <Notifications />,
      analytics: <Analytics />,
      settings: <SettingsSecurity />,
    };
    return components[activeTab] || <DashboardHome />;
  };

  return (
    <div className="h-screen w-full bg-[#F8FAFC] flex overflow-hidden font-sans antialiased text-slate-900">
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[45] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#0F172A] transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Brand Logo with Close Button for Mobile */}
          <div className="h-24 flex items-center justify-between px-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">Studio<span className="text-emerald-500">.</span></span>
            </div>

            {/* FIX 1: Close Button for Mobile */}
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
            <p className="px-5 text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Management</p>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 group
                  ${isActive 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={19} className={isActive ? "text-emerald-400" : "group-hover:text-white"} />
                    <span className={`text-[14px] ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-emerald-400" />}
                  {item.badge && !isActive && (
                    <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-lg border border-slate-700 font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-6 space-y-3 border-t border-white/5">
            {/* FIX 2: Mobile Back to Web Button inside Sidebar */}
            <button 
              onClick={() => navigate('/')}
              className="lg:hidden w-full flex items-center gap-3 px-5 py-3 text-xs font-bold text-slate-400 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              <span>Back to Web</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-5 py-4 text-sm font-semibold text-slate-400 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/30 border border-transparent rounded-2xl transition-all"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Header */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200 px-6 md:px-10 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="lg:hidden p-2.5 text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                {menuItems.find(i => i.id === activeTab)?.label}
              </h2>
              <p className="text-[10px] md:text-xs font-medium text-slate-400">Welcome back, {user?.name?.split(' ')[0]}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop only Back to Web */}
            <button className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest" onClick={() => navigate('/')}>
              <ArrowLeft size={14} /> Back to Web
            </button>
            
            <div className="hidden md:block h-8 w-px bg-slate-200" />

            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveTab('profile')}>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden shadow-sm ring-2 ring-slate-100 group-hover:ring-emerald-500/30 transition-all duration-300">
                {user?.profileImage ? (
                  <img src={user.profileImage} className="w-full h-full object-cover" alt="Profile" />
                ) : (
                  <div className="w-full h-full bg-emerald-500 flex items-center justify-center text-white text-sm font-black">
                    {user?.name?.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Workspace */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto p-4 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Dashboard;