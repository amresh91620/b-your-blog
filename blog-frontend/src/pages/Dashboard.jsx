import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  FileText,
  Plus,
  MessageCircle,
  User,
  Bookmark,
  Bell,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowLeft,
  Search,
} from "lucide-react";

import { logout } from "../features/auth/authSlice";

import DashboardHome from "./dashboard/DashboardHome";
import MyBlogs from "./dashboard/MyBlogs";
import CreateBlog from "./dashboard/CreateBlog";
import Comments from "./dashboard/Comments";
import Profile from "./dashboard/Profile";
import Bookmarks from "./dashboard/Bookmarks";
import Notifications from "./dashboard/Notifications";
import Analytics from "./dashboard/Analytics";
import SettingsSecurity from "./dashboard/SettingsSecurity";

const Dashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const menuItems = [
    { id: "home", label: "Overview", icon: HomeIcon },
    { id: "blogs", label: "My Stories", icon: FileText },
    { id: "create", label: "Write New", icon: Plus },
    { id: "comments", label: "Engagements", icon: MessageCircle, badge: 5 },
    { id: "analytics", label: "Insights", icon: BarChart3 },
    { id: "bookmarks", label: "Saved", icon: Bookmark },
    { id: "notifications", label: "Inbox", icon: Bell, badge: 3 },
    { id: "profile", label: "Account", icon: User },
    { id: "settings", label: "Preferences", icon: Settings },
  ];

  const handleLogout = () => {
    dispatch(logout());
    toast.success("You are successfully logged out");
    navigate("/");
  };

  const handleBackToHome = () => navigate("/");

  const handleCreateBlog = () => {
    setActiveTab("create");
    setSidebarOpen(false);
  };

  const renderContent = () => {
    const components = {
      home: <DashboardHome />,
      blogs: <MyBlogs onCreateBlog={handleCreateBlog} />,
      create: <CreateBlog />,
      comments: <Comments />,
      profile: <Profile />,
      bookmarks: <Bookmarks />,
      notifications: <Notifications />,
      analytics: <Analytics />,
      settings: <SettingsSecurity />,
    };
    return components[activeTab] || <DashboardHome />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FDFDFD] text-zinc-900 flex overflow-hidden font-sans"
    >
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64
        bg-white border-r border-zinc-100
        transform transition-all duration-500 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-19 m-1 flex items-center px-6 bg-[#236656] border-b border-white rounded-xl">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#000000] rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rotate-45" />
              </div>
              <span className="text-lg font-bold tracking-tight">STUDIO</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden ml-auto p-2 text-zinc-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 relative bg-[#236656] rounded">
            <p className="px-4 text-[15px] font-bold text-white  uppercase tracking-widest mb-4">
              Menu
            </p>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div key={item.id} className="relative">
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#f5f5f5] rounded-r-full "
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`relative w-60 flex items-center justify-between px-4 py-2.5 rounded-l-xl transition-all duration-200 group
                    ${isActive 
                      ? "bg-[#fefefe] text-black shadow-md shadow-zinc-300" 
                      : "text-white hover:bg-zinc-50 hover:text-zinc-900"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold
                        ${isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-600"}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t border-zinc-50 space-y-1 bg-[#236656]">
            <button 
              onClick={handleBackToHome}
           className="w-full flex items-center gap-3 px-4 py-2 text-sm bg-white text-black hover:bg-rose-50 rounded-xl transition-colors"
              >
              <ArrowLeft size={18} />
              <span>Main Site</span>
            </button>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm bg-white text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col min-w-0 h-screen"
      >
        {/* Top Navigation Bar */}
        <header className="h-19 bg-[#236656] backdrop-blur-md border-b rounded-xl mx-4 mt-1 border-zinc-100 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-zinc-50 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 className="text-sm font-bold text-zinc-900">
                {menuItems.find((i) => i.id === activeTab)?.label}
              </h2>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Welcome back, {user?.name?.split(" ")[0] || "Writer"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">            
            <div className="flex items-center gap-4 border-l border-zinc-100 pl-6">              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full ring-2 ring-zinc-100 ring-offset-2 overflow-hidden bg-zinc-900 flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-105">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="flex-1 overflow-y-auto bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto p-6 lg:p-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </main>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
