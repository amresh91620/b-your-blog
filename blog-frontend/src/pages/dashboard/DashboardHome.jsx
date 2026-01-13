import React from 'react';
import { FileText, MessageCircle, Eye, Heart, TrendingUp, Clock, ChevronRight, PlusCircle, Sparkles } from 'lucide-react';
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
    { type: 'blog', title: 'How to Build a React Dashboard', views: 234, time: '2 hours ago', color: 'bg-blue-50 text-blue-600' },
    { type: 'comment', author: 'Sarah Johnson', blog: 'JavaScript Best Practices', time: '4 hours ago', color: 'bg-[#236656]/10 text-[#236656]' },
    { type: 'like', count: 15, blog: 'CSS Grid Layout Guide', time: '6 hours ago', color: 'bg-rose-50 text-rose-600' },
    { type: 'view', count: 89, blog: 'Node.js Authentication', time: '1 day ago', color: 'bg-amber-50 text-amber-600' },
  ];

  const formattedDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-10 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Premium Welcome Header */}
      <div className="relative overflow-hidden bg-[#236656] rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-[#236656]/20">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Creator Portal
              </span>
              <span className="text-white/60 text-xs font-medium">| {formattedDate()}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Welcome back, <span className="text-emerald-300">{user?.name?.split(' ')[0] || 'Creator'}</span>
            </h1>
            <p className="text-emerald-50/70 max-w-lg text-lg leading-relaxed">
              Your creative influence is growing. You’ve gained <span className="text-white font-bold underline decoration-emerald-400 underline-offset-4">12% more engagement</span> than last month.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-center gap-2 bg-white text-[#236656] px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all active:scale-95 shadow-lg shadow-black/10">
              <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              Write New Story
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] -ml-20 -mb-20" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="group bg-white rounded-3xl p-7 border border-zinc-100 hover:border-[#236656]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#236656]/5">
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-zinc-50 rounded-2xl group-hover:bg-[#236656] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-bold">
                  <TrendingUp size={12} />
                  {stat.change}
                </div>
              </div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-bold text-zinc-900 mt-2 tracking-tight group-hover:translate-x-1 transition-transform">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Recent Activity Feed (3/5 Columns) */}
        <div className="lg:col-span-3 bg-white rounded-[2rem] border border-zinc-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-zinc-50 flex items-center justify-between bg-zinc-50/30">
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Activity Stream</h3>
              <p className="text-xs text-zinc-500 mt-1">Real-time updates from your readers</p>
            </div>
            <button className="text-[11px] font-bold text-[#236656] hover:bg-[#236656]/5 px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-[#236656]/10">
              View All
            </button>
          </div>
          
          <div className="divide-y divide-zinc-50 px-8">
            {recentActivity.map((activity, index) => (
              <div key={index} className="py-6 flex items-start justify-between group cursor-pointer transition-all hover:px-2">
                <div className="flex gap-5">
                  <div className={`mt-1 p-3 rounded-2xl shadow-sm ${activity.color} group-hover:scale-110 transition-transform`}>
                    {activity.type === 'blog' && <FileText size={18} />}
                    {activity.type === 'comment' && <MessageCircle size={18} />}
                    {activity.type === 'like' && <Heart size={18} />}
                    {activity.type === 'view' && <Eye size={18} />}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-zinc-900 leading-tight group-hover:text-[#236656] transition-colors">
                      {activity.type === 'blog' && `Story Published: "${activity.title}"`}
                      {activity.type === 'comment' && `${activity.author} shared a thought`}
                      {activity.type === 'like' && `Gained ${activity.count} new appreciations`}
                      {activity.type === 'view' && `${activity.count} unique readers visited`}
                    </div>
                    <p className="text-sm text-zinc-400 mt-1.5 italic">
                      {activity.blog ? `"${activity.blog}"` : "Active now"}
                    </p>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-zinc-300 uppercase flex items-center gap-1 bg-zinc-50 px-2 py-1 rounded-lg">
                   <Clock size={10} />
                   {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Insights (2/5 Columns) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Top Story Spotlight */}
          <div className="bg-zinc-900 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={16} className="text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Featured Story</span>
              </div>
              
              <h4 className="text-2xl font-bold leading-tight mb-4 group-hover:text-emerald-300 transition-colors">
                How to Build a React Dashboard
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                This story is trending in <span className="text-white font-medium">#webdevelopment</span>. Engagement is 40% higher than your average.
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/5">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Views</p>
                  <p className="text-xl font-bold italic">1.2k</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Likes</p>
                  <p className="text-xl font-bold italic text-emerald-400">89</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Growth</p>
                  <p className="text-xl font-bold italic">+24%</p>
                </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                Analyze Performance <ChevronRight size={14} />
              </button>
            </div>
          </div>
          
          {/* Smart Tip */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2rem] p-8">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 bg-[#236656] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#236656]/20">
                  <TrendingUp size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold text-zinc-900 italic underline decoration-emerald-200">Writing Tip</p>
                 <p className="text-[11px] text-[#236656] font-bold uppercase tracking-wider">SEO Alert</p>
               </div>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed italic">
              "Stories with <span className="font-bold text-[#236656]">React Tutorial</span> in the title are currently getting 3x more organic traffic. Consider a follow-up story."
            </p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;