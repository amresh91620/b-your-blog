import React from 'react';
import { FileText, MessageCircle, Eye, Heart, TrendingUp, Clock, ChevronRight, PlusCircle, Sparkles, BookOpen, Award, Users, BarChart, Calendar, Target } from 'lucide-react';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
  const user = useSelector((state) => state.auth.user);
  
  const stats = [
    { label: 'Total Stories', value: '24', icon: FileText, change: '+12%', trend: 'up' },
    { label: 'Engagements', value: '156', icon: MessageCircle, change: '+8%', trend: 'up' },
    { label: 'Global Views', value: '12.5K', icon: Eye, change: '+23%', trend: 'up' },
    { label: 'Appreciations', value: '892', icon: Heart, change: '+15%', trend: 'up' },
  ];

  const recentActivity = [
    { type: 'blog', title: 'How to Build a React Dashboard', views: 234, time: '2 hours ago', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { type: 'comment', author: 'Sarah Johnson', blog: 'JavaScript Best Practices', time: '4 hours ago', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { type: 'like', count: 15, blog: 'CSS Grid Layout Guide', time: '6 hours ago', color: 'bg-rose-100 text-rose-700 border-rose-200' },
    { type: 'view', count: 89, blog: 'Node.js Authentication', time: '1 day ago', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  ];

  const formattedDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Classic Header */}
      <div className="relative">
        <div className="bg-white to-slate-800 rounded-xl p-8 text-white shadow-sm border border-slate-500/50">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-emerald-500"></div>
                <span className="text-xs font-medium text-black uppercase tracking-wider">
                  {formatTime()} Report • {formattedDate()}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-serif font-semibold mb-4 text-black">
                Good {formatTime().toLowerCase()}, <span className="text-emerald-300">{user?.name?.split(' ')[0] || 'Writer'}</span>
              </h1>
              <p className="text-slate-800 max-w-lg leading-relaxed">
                Your creative journey continues.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3.5 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30">
                <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                Compose Story
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-emerald-500 rounded-tr-xl"></div>
      </div>

      {/* Classic Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-slate-100 rounded-lg">
                    <Icon size={20} className="text-slate-600" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                    <TrendingUp size={12} />
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <BookOpen size={18} className="text-slate-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
                  <p className="text-sm text-slate-500">Latest updates from your readers</p>
                </div>
              </div>
              <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                View All →
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-5 hover:bg-slate-50/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg border ${activity.color}`}>
                    {activity.type === 'blog' && <FileText size={18} />}
                    {activity.type === 'comment' && <MessageCircle size={18} />}
                    {activity.type === 'like' && <Heart size={18} />}
                    {activity.type === 'view' && <Eye size={18} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">
                          {activity.type === 'blog' && `Published: "${activity.title}"`}
                          {activity.type === 'comment' && `${activity.author} commented`}
                          {activity.type === 'like' && `Gained ${activity.count} new likes`}
                          {activity.type === 'view' && `${activity.count} unique readers visited`}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {activity.blog ? `"${activity.blog}"` : "Just now"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={12} />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          
          {/* Featured Story */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-6 text-white border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Award size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">Top Story</p>
                <h4 className="text-lg font-semibold">How to Build a React Dashboard</h4>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Trending in <span className="text-emerald-300 font-medium">#webdevelopment</span> with 40% higher engagement.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Views</p>
                <p className="text-xl font-bold">1.2k</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Likes</p>
                <p className="text-xl font-bold text-emerald-400">89</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Growth</p>
                <p className="text-xl font-bold">+24%</p>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
              Analyze Performance
              <ChevronRight size={16} />
            </button>
          </div>
          
          {/* Performance Insights */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart size={18} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Performance Insights</h4>
                <p className="text-sm text-slate-500">Weekly statistics</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Reader Engagement</span>
                <span className="text-sm font-medium text-emerald-600">+12%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 rounded-full h-2" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Story Completion</span>
                <span className="text-sm font-medium text-blue-600">+8%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-500 rounded-full h-2" style={{ width: '65%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">New Followers</span>
                <span className="text-sm font-medium text-rose-600">+15%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-rose-500 rounded-full h-2" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Sparkles size={18} className="text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Quick Stats</h4>
                <p className="text-sm text-slate-500">At a glance</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-500">Followers</span>
                </div>
                <p className="text-lg font-bold text-slate-900">2.4K</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-500">This Week</span>
                </div>
                <p className="text-lg font-bold text-slate-900">156</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-500">Avg. Read</span>
                </div>
                <p className="text-lg font-bold text-slate-900">4.2m</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-500">Rank</span>
                </div>
                <p className="text-lg font-bold text-slate-900">#42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;