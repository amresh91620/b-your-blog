import React, { useState } from 'react';
import { Bookmark, X, Calendar, User, ExternalLink } from 'lucide-react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: 'Advanced React Patterns and Best Practices',
      author: 'Sarah Johnson',
      authorAvatar: 'SJ',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'React'
    },
    {
      id: 2,
      title: 'Building Scalable Node.js Applications',
      author: 'Mike Chen',
      authorAvatar: 'MC',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Node.js'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use What',
      author: 'Emily Davis',
      authorAvatar: 'ED',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'CSS'
    },
    {
      id: 4,
      title: 'Database Design Principles for Modern Apps',
      author: 'Alex Rodriguez',
      authorAvatar: 'AR',
      date: '2024-01-03',
      readTime: '10 min read',
      category: 'Database'
    }
  ]);

  const handleRemoveBookmark = (bookmarkId) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.id !== bookmarkId));
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
          <h1 className="text-2xl font-bold text-gray-900">Bookmarks</h1>
          <p className="text-gray-600">Your saved articles for later reading</p>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Bookmark size={16} className="mr-2" />
          {bookmarks.length} saved articles
        </div>
      </div>

      {/* Bookmarks Grid */}
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {bookmark.category}
                  </span>
                  <button
                    onClick={() => handleRemoveBookmark(bookmark.id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
                  {bookmark.title}
                </h3>

                {/* Author */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                    {bookmark.authorAvatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{bookmark.author}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(bookmark.date)}
                  </div>
                  <span>{bookmark.readTime}</span>
                </div>

                {/* Action */}
                <button className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink size={16} className="mr-2" />
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 shadow-sm border text-center">
          <Bookmark size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarks yet</h3>
          <p className="text-gray-600">
            Start bookmarking articles you want to read later.
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;