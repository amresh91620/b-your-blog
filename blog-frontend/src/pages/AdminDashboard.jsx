import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Users,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowLeft,
  Shield,
  BarChart3,
} from "lucide-react";
import { logout } from "../features/auth/authSlice";

import AdminHome from "./admin/AdminHome";
import ManageUsers from "./admin/ManageUsers";
import ManageBlogs from "./admin/ManageBlogs";
import ManageMessages from "./admin/ManageMessages";
import AdminSettings from "./admin/AdminSettings";

const AdminDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      toast.error("Access denied. Admin only.");
      navigate("/");
    }
  }, [user, navigate]);

  const menuItems = [
    { id: "home", label: "Overview", icon: HomeIcon },
    { id: "users", label: "Manage Users", icon: Users },
    { id: "blogs", label: "Manage Blogs", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
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

  const renderContent = () => {
    const components = {
      home: <AdminHome />,
      users: <ManageUsers />,
      blogs: <ManageBlogs />,
      messages: <ManageMessages />,
      settings: <AdminSettings />,
    };
    return components[activeTab] || <AdminHome />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FDFDFD] text-zinc-900 flex overflow-hidden font-sans"
    >
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-100 transform transition-all duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-19 m-1 flex items-center px-6 bg-[#dc2626] border-b border-white rounded-xl">
            <div className="flex items-center gap-2">
              <Shield size={24} className="text-white" />
              <span className="text-lg font-bold tracking-tight text-white">ADMIN</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto p-2 text-white">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1 relative bg-[#dc2626] rounded">
            <p className="px-4 text-[15px] font-bold text-white uppercase tracking-widest mb-4">Menu</p>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div key={item.id} className="relative">
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#f5f5f5] rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`relative w-60 flex items-center justify-between px-4 py-2.5 rounded-l-xl transition-all duration-200 group ${isActive ? "bg-[#fefefe] text-black shadow-md shadow-zinc-300" : "text-white hover:bg-zinc-50 hover:text-zinc-900"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="p-4 border-t border-zinc-50 space-y-1 bg-[#dc2626]">
            <button onClick={() => navigate("/")} className="w-full flex items-center gap-3 px-4 py-2 text-sm bg-white text-black hover:bg-rose-50 rounded-xl transition-colors">
              <ArrowLeft size={18} />
              <span>Main Site</span>
            </button>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm bg-white text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </motion.aside>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col min-w-0 h-screen"
      >
        <header className="h-19 bg-[#dc2626] backdrop-blur-md border-b rounded-xl mx-4 mt-1 border-zinc-100 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-zinc-50 rounded-lg">
              <Menu size={20} />
            </button>
            <div>
              <h2 className="text-sm font-bold text-white">
                {menuItems.find((i) => i.id === activeTab)?.label}
              </h2>
              <p className="text-xs text-white/70 hidden sm:block">
                Admin Panel - {user?.name?.split(" ")[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full ring-2 ring-white/20 ring-offset-2 overflow-hidden bg-white flex items-center justify-center text-[#dc2626] text-xs font-bold transition-transform group-hover:scale-105">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
                </div>
              </div>
            </div>
          </div>
        </header>

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

export default AdminDashboard;
