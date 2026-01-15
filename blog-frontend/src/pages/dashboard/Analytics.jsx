import React from 'react';
import { TrendingUp, TrendingDown, Eye, Users, Clock, BarChart3 } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Views',
      value: '12,543',
      change: '+23.5%',
      trend: 'up',
      icon: Eye,
      color: 'text-[#236656]',
      bgColor: 'bg-[#236656]/10'
    },
    {
      title: 'Engagement Rate',
      value: '8.2%',
      change: '+1.2%',
      trend: 'up',
      icon: Users,
      color: 'text-[#236656]',
      bgColor: 'bg-[#236656]/10'
    },
    {
      title: 'Avg. Read Time',
      value: '4m 32s',
      change: '-0.8%',
      trend: 'down',
      icon: Clock,
      color: 'text-[#236656]',
      bgColor: 'bg-[#236656]/10'
    }
  ];

  const topBlogs = [
    {
      title: 'How to Build a React Dashboard',
      views: 2543,
      engagement: '12.4%',
      readTime: '6m 15s'
    },
    {
      title: 'JavaScript Best Practices',
      views: 1876,
      engagement: '9.8%',
      readTime: '4m 32s'
    },
    {
      title: 'CSS Grid Layout Guide',
      views: 1234,
      engagement: '8.7%',
      readTime: '3m 45s'
    },
    {
      title: 'Node.js Authentication',
      views: 987,
      engagement: '7.2%',
      readTime: '5m 12s'
    },
    {
      title: 'MongoDB Database Design',
      views: 756,
      engagement: '6.9%',
      readTime: '4m 18s'
    }
  ];

  const weeklyData = [
    { day: 'Mon', views: 120 },
    { day: 'Tue', views: 180 },
    { day: 'Wed', views: 240 },
    { day: 'Thu', views: 200 },
    { day: 'Fri', views: 300 },
    { day: 'Sat', views: 280 },
    { day: 'Sun', views: 220 }
  ];

  const maxViews = Math.max(...weeklyData.map(d => d.views));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your blog performance and engagement</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.bgColor} p-3 rounded-lg`}>
                  <Icon size={24} className={metric.color} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendIcon size={16} className="mr-1" />
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Views Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Views</h3>
            <BarChart3 size={20} className="text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 text-sm text-gray-600 font-medium">
                  {data.day}
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#236656] to-[#1a4d3d] h-full rounded-full transition-all duration-500"
                      style={{ width: `${(data.views / maxViews) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-16 text-sm text-gray-900 font-medium text-right">
                  {data.views}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Blogs */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Blogs</h3>
          
          <div className="space-y-4">
            {topBlogs.map((blog, index) => (
              <div key={index} className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                    {blog.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {blog.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Users size={12} className="mr-1" />
                      {blog.engagement}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-lg font-bold text-gray-900">#{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Summary</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-sm text-gray-600">Total Blogs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">1.2K</div>
            <div className="text-sm text-gray-600">Total Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Total Comments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">892</div>
            <div className="text-sm text-gray-600">Total Likes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;