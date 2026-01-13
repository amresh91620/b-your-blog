import React, { useState } from 'react';
import { Eye, Edit, Trash2, Plus, MessageCircle, Heart, Calendar, MoreHorizontal, Search, Filter } from 'lucide-react';

const MyBlogs = ({ onCreateBlog }) => {
  const [blogs] = useState([
    { id: 1, title: 'How to Build a React Dashboard', category: 'React', date: '2024-01-15', status: 'published', views: 1234, likes: 89, comments: 23 },
    { id: 2, title: 'JavaScript Best Practices', category: 'JavaScript', date: '2024-01-12', status: 'published', views: 856, likes: 67, comments: 15 },
    { id: 3, title: 'CSS Grid Layout Guide', category: 'CSS', date: '2024-01-10', status: 'draft', views: 0, likes: 0, comments: 0 },
    { id: 4, title: 'Node.js Authentication', category: 'Node.js', date: '2024-01-08', status: 'pending', views: 234, likes: 12, comments: 5 },
    { id: 5, title: 'MongoDB Database Design', category: 'Database', date: '2024-01-05', status: 'published', views: 567, likes: 34, comments: 8 }
  ]);

  const getStatusBadge = (status) => {
    const styles = {
      published: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      draft: 'bg-zinc-100 text-zinc-600 border-zinc-200',
      pending: 'bg-amber-50 text-amber-700 border-amber-100'
    };
    
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">My Stories</h1>
          <p className="text-zinc-500 mt-1 text-sm">You have published <span className="font-semibold text-zinc-900">12 stories</span> this month.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-[#236656]/20 focus:border-[#236656] transition-all w-64"
            />
          </div>
          <button 
            onClick={onCreateBlog}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#236656] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#236656]/20 transition-all active:scale-95"
          >
            <Plus size={18} />
            New Story
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-100">
              <th className="py-4 px-6 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Article Details</th>
              <th className="py-4 px-6 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
              <th className="py-4 px-6 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Performance</th>
              <th className="py-4 px-6 text-[11px] font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {blogs.map((blog) => (
              <tr key={blog.id} className="group hover:bg-zinc-50/30 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-900 group-hover:text-[#236656] transition-colors cursor-pointer">
                      {blog.title}
                    </span>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[11px] font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                        {blog.category}
                      </span>
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(blog.date)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6">
                  {getStatusBadge(blog.status)}
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-900">{blog.views.toLocaleString()}</span>
                      <span className="text-[10px] text-zinc-400 font-medium uppercase">Views</span>
                    </div>
                    <div className="flex flex-col border-l border-zinc-100 pl-4">
                      <span className="text-xs font-bold text-zinc-900">{blog.likes}</span>
                      <span className="text-[10px] text-zinc-400 font-medium uppercase">Likes</span>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-2 text-zinc-400 hover:text-[#236656] hover:bg-[#236656]/5 rounded-lg transition-all" title="View">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded uppercase tracking-tighter">
                {blog.category}
              </span>
              {getStatusBadge(blog.status)}
            </div>
            
            <h3 className="font-bold text-zinc-900 mb-4 line-clamp-2 leading-snug">
              {blog.title}
            </h3>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
              <div className="flex gap-3">
                <div className="text-center">
                  <p className="text-xs font-bold text-zinc-900">{blog.views}</p>
                  <Eye size={14} className="text-zinc-300 mx-auto mt-0.5" />
                </div>
                <div className="text-center border-l border-zinc-50 pl-3">
                  <p className="text-xs font-bold text-zinc-900">{blog.likes}</p>
                  <Heart size={14} className="text-zinc-300 mx-auto mt-0.5" />
                </div>
              </div>
              
              <div className="flex gap-1">
                <button className="p-2 bg-zinc-50 text-zinc-600 rounded-xl"><Edit size={16} /></button>
                <button className="p-2 bg-zinc-900 text-white rounded-xl"><Eye size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;