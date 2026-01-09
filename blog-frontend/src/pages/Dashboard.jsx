import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const menuItems = [
    { id: "home", label: "Dashboard", icon: HomeIcon },
    { id: "blogs", label: "My Blogs", icon: FileText },
    { id: "create", label: "Create Blog", icon: Plus },
    { id: "comments", label: "Comments", icon: MessageCircle, badge: 5 },
    { id: "profile", label: "Profile", icon: User },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
    { id: "notifications", label: "Notifications", icon: Bell, badge: 3 },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleCreateBlog = () => {
    setActiveTab("create");
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "blogs":
        return <MyBlogs onCreateBlog={handleCreateBlog} />;
      case "create":
        return <CreateBlog />;
      case "comments":
        return <Comments />;
      case "profile":
        return <Profile />;
      case "bookmarks":
        return <Bookmarks />;
      case "notifications":
        return <Notifications />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <SettingsSecurity />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 flex overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72
        bg-white/80 backdrop-blur-xl
        border-r border-zinc-200
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        transform transition-all duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-7 border-b border-zinc-200">
          <h1 className="text-xl font-semibold tracking-wide text-zinc-900">
            User Dashboard
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-xl hover:bg-zinc-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl
                transition-all duration-300
                ${
                  activeTab === item.id
                    ? "bg-zinc-900 text-white shadow-lg scale-[1.02]"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <div className="flex items-center">
                  <Icon
                    size={20}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium">{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-xs font-semibold rounded-full px-2 py-0.5
                    ${
                      activeTab === item.id
                        ? "bg-white text-zinc-900"
                        : "bg-rose-500 text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-zinc-200 space-y-2">
          <button
            onClick={handleBackToHome}
            className="w-full flex items-center px-4 py-3 text-zinc-600 hover:bg-zinc-100 rounded-xl"
          >
            <ArrowLeft size={20} className="mr-3" />
            Back to Home
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Top Bar */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-zinc-200 px-6 lg:px-10 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl hover:bg-zinc-100 mr-3"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-2xl lg:text-3xl font-semibold text-zinc-900">
                {menuItems.find((i) => i.id === activeTab)?.label || "Dashboard"}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs flex items-center justify-center rounded-full">
                  3
                </span>
              </div>

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center shadow-md">
                <span className="text-white font-semibold text-sm">
                  {user?.name
                    ? user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    : "U"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
