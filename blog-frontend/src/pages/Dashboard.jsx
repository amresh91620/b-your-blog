import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  FileText,
  Plus,
  MessageCircle,
  User,
  Bell,
  BarChart3,
  LogOut,
  Menu,
  X,
  ArrowLeft,
  ChevronRight,
  Settings,
  HelpCircle,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";
import { logout } from "../features/auth/authSlice";
import { fetchProfile } from "../features/auth/profileSlice";

import DashboardHome from "./dashboard/DashboardHome";
import MyBlogs from "./dashboard/MyBlogs";
import CreateBlog from "./dashboard/CreateBlog";
import Comments from "./dashboard/Comments";
import Profile from "./dashboard/Profile";
import Notifications from "./dashboard/Notifications";

const Dashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.state?.activeTab || "home",
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth?.user || null);
  const user = useSelector((state) => state.profile?.user || authUser);

  useEffect(() => {
    if (location.state?.activeTab) setActiveTab(location.state.activeTab);
    // Only fetch profile if user is authenticated
    if (authUser) {
      dispatch(fetchProfile());
    }
  }, [location.state, dispatch, authUser]);

  const menuItems = [
    { id: "home", label: "Dashboard", icon: HomeIcon, badge: null },
    { id: "blogs", label: "My Stories", icon: FileText, badge: 12 },
    { id: "create", label: "New Publication", icon: Plus, badge: null },
    { id: "comments", label: "Engagements", icon: MessageCircle, badge: 5 },
    { id: "notifications", label: "Inbox", icon: Bell, badge: 3 },
    { id: "profile", label: "Account", icon: User, badge: null },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
      toast.success("You are successfully logged out");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  };

  const handleCreateBlog = () => {
    setActiveTab("create");
    setSidebarOpen(false);
  };

  const renderContent = () => {
    const components = {
      home: <DashboardHome />,
      blogs: <MyBlogs onCreateBlog={() => setActiveTab("create")} />,
      create: <CreateBlog />,
      comments: <Comments />,
      profile: <Profile />,
      notifications: <Notifications />,
    };
    return components[activeTab] || <DashboardHome />;
  };

  return (
    <div className="min-h-screen fix bg-slate-50 flex overflow-hidden font-sans antialiased text-slate-900">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Premium Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#f8fcfd] border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Brand Header */}
          <div className="p-3 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-xl md:text-xl font-serif font-medium tracking-tighter text-black transition-all duration-300">
                    B-YOUR{" "}
                    <span className="italic font-light text-[#0ff5bf]">
                      Journal.
                    </span>
                  </span>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Writer's Studio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white text-lg font-semibold">
                    {user?.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-black font-medium">
                  {user?.name || "Writer"}
                </h3>
                <p className="text-slate-600 text-sm">
                  {user?.email || "author@example.com"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="px-3 mb-4">
              <p className="text-xs font-medium text-slate-800 uppercase tracking-wider">
                Navigation
              </p>
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-400   to-emerald-600/5 text-white border-l-2 border-emerald-500"
                      : "text-slate-800 hover:text-white hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-black"
                          : "text-slate-800 group-hover:text-white"
                      }
                    />
                    <span
                      className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-300"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <ChevronRight size={14} className="text-emerald-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-slate-200 space-y-4">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-slate-800 hover:text-slate-400 hover:bg-slate-100 border rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Return to Site</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium  text-red-400 bg-red-500/10 rounded-lg transition-colors border hover:bg-slate-100 "
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Top Navigation Bar */}
        <header className="h-17.5 bg-[#f8fcfd] border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {menuItems.find((i) => i.id === activeTab)?.label}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-slate-500">Total Stories</p>
                <p className="text-sm font-semibold text-slate-900">12</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Engagements</p>
                <p className="text-sm font-semibold text-slate-900">156</p>
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
            </div>

            {/* Notifications */}
            <button
              onClick={() => setActiveTab("notifications")}
              className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile */}
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => setActiveTab("profile")}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-emerald-500 transition-colors">
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-medium">
                    {user?.name?.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto p-6">
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
