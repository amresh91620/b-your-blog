import React, { useState } from 'react';
import { Eye, Edit, Trash2, Plus, MessageCircle, Heart, Calendar } from 'lucide-react';

const MyBlogs = ({ onCreateBlog }) => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'How to Build a React Dashboard',
      category: 'React',
      date: '2024-01-15',
      status: 'published',
      views: 1234,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'JavaScript Best Practices',
      category: 'JavaScript',
      date: '2024-01-12',
      status: 'published',
      views: 856,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: 'CSS Grid Layout Guide',
      category: 'CSS',
      date: '2024-01-10',
      status: 'draft',
      views: 0,
      likes: 0,
      comments: 0
    },
    {
      id: 4,
      title: 'Node.js Authentication',
      category: 'Node.js',
      date: '2024-01-08',
      status: 'pending',
      views: 234,
      likes: 12,
      comments: 5
    },
    {
      id: 5,
      title: 'MongoDB Database Design',
      category: 'Database',
      date: '2024-01-05',
      status: 'published',
      views: 567,
      likes: 34,
      comments: 8
    }
  ]);

  const getStatusBadge = (status) => {
    const styles = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Blogs</h1>
          <p className="text-gray-600">Manage your published and draft articles</p>
        </div>
        <button 
          onClick={onCreateBlog}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          New Blog
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Title</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Stats</th>
              <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                </td>
                <td className="py-4 px-6">
                  <span className="text-gray-600">{blog.category}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(blog.date)}
                  </div>
                </td>
                <td className="py-4 px-6">
                  {getStatusBadge(blog.status)}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {blog.views}
                    </span>
                    <span className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {blog.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      {blog.comments}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-900 flex-1 mr-4">{blog.title}</h3>
              {getStatusBadge(blog.status)}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>{blog.category}</span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {formatDate(blog.date)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  {blog.views}
                </span>
                <span className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  {blog.likes}
                </span>
                <span className="flex items-center">
                  <MessageCircle size={14} className="mr-1" />
                  {blog.comments}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;