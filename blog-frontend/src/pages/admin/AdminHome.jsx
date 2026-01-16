import React from "react";
import { Users, FileText, MessageSquare, TrendingUp } from "lucide-react";

const AdminHome = () => {
  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, color: "bg-blue-500" },
    { label: "Total Blogs", value: "567", icon: FileText, color: "bg-green-500" },
    { label: "Messages", value: "89", icon: MessageSquare, color: "bg-purple-500" },
    { label: "Growth", value: "+12%", icon: TrendingUp, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
        <p className="text-zinc-500 mt-2">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-zinc-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-xl`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">Recent Activity</h2>
        <p className="text-zinc-500">Activity feed will be displayed here...</p>
      </div>
    </div>
  );
};

export default AdminHome;
