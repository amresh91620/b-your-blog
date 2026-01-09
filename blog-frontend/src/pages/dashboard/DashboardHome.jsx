import React from 'react';
import { FileText, MessageCircle, Eye, Heart, TrendingUp, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
  const user = useSelector((state) => state.auth.user);
  
  const stats = [
    { label: 'Total Blogs', value: '24', icon: FileText, color: 'bg-slate-600', change: '+12%' },
    { label: 'Total Comments', value: '156', icon: MessageCircle, color: 'bg-slate-700', change: '+8%' },
    { label: 'Total Views', value: '12.5K', icon: Eye, color: 'bg-slate-800', change: '+23%' },
    { label: 'Total Likes', value: '892', icon: Heart, color: 'bg-slate-900', change: '+15%' },
  ];

  const recentActivity = [
    { type: 'blog', title: 'How to Build a React Dashboard', views: 234, time: '2 hours ago' },
    { type: 'comment', author: 'Sarah Johnson', blog: 'JavaScript Best Practices', time: '4 hours ago' },
    { type: 'like', count: 15, blog: 'CSS Grid Layout Guide', time: '6 hours ago' },
    { type: 'view', count: 89, blog: 'Node.js Authentication', time: '1 day ago' },
  ];

  const getLastLoginTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-3">Welcome back, {user?.name || 'User'}</h1>
        <p className="text-slate-300 text-lg">Last login: {getLastLoginTime()}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-4 rounded-xl`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex items-center text-emerald-600 text-sm font-semibold">
                  <TrendingUp size={16} className="mr-1" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Performing Blog */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Top Performing Blog</h3>
          <div className="border border-slate-200 rounded-xl p-6 hover:bg-slate-50 transition-colors">
            <h4 className="font-semibold text-slate-900 mb-3 text-lg">How to Build a React Dashboard</h4>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center space-x-6">
                <span className="flex items-center font-medium">
                  <Eye size={16} className="mr-2" />
                  1,234 views
                </span>
                <span className="flex items-center font-medium">
                  <Heart size={16} className="mr-2" />
                  89 likes
                </span>
                <span className="flex items-center font-medium">
                  <MessageCircle size={16} className="mr-2" />
                  23 comments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-4"></div>
                  <div>
                    {activity.type === 'blog' && (
                      <p className="text-sm text-slate-900 font-medium">
                        New blog published: <span className="font-semibold">{activity.title}</span>
                      </p>
                    )}
                    {activity.type === 'comment' && (
                      <p className="text-sm text-slate-900 font-medium">
                        <span className="font-semibold">{activity.author}</span> commented on "{activity.blog}"
                      </p>
                    )}
                    {activity.type === 'like' && (
                      <p className="text-sm text-slate-900 font-medium">
                        <span className="font-semibold">{activity.count} new likes</span> on "{activity.blog}"
                      </p>
                    )}
                    {activity.type === 'view' && (
                      <p className="text-sm text-slate-900 font-medium">
                        <span className="font-semibold">{activity.count} new views</span> on "{activity.blog}"
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-xs text-slate-500 font-medium">
                  <Clock size={12} className="mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;