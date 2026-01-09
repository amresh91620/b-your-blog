import React, { useState } from 'react';
import { Reply, Trash2, Clock, MessageCircle } from 'lucide-react';

const Comments = () => {
  const [comments] = useState([
    {
      id: 1,
      commenterName: 'Sarah Johnson',
      commenterAvatar: 'SJ',
      blogTitle: 'How to Build a React Dashboard',
      comment: 'This is an excellent tutorial! The step-by-step approach makes it very easy to follow. Thank you for sharing this valuable content.',
      date: '2024-01-15T10:30:00Z',
      isRead: false
    },
    {
      id: 2,
      commenterName: 'Mike Chen',
      commenterAvatar: 'MC',
      blogTitle: 'JavaScript Best Practices',
      comment: 'Great insights on JavaScript optimization. The performance tips are particularly helpful for large applications.',
      date: '2024-01-14T15:45:00Z',
      isRead: true
    },
    {
      id: 3,
      commenterName: 'Emily Davis',
      commenterAvatar: 'ED',
      blogTitle: 'CSS Grid Layout Guide',
      comment: 'I\'ve been struggling with CSS Grid for weeks. This guide finally made it click for me. The examples are perfect!',
      date: '2024-01-14T09:20:00Z',
      isRead: false
    },
    {
      id: 4,
      commenterName: 'Alex Rodriguez',
      commenterAvatar: 'AR',
      blogTitle: 'Node.js Authentication',
      comment: 'Security implementation looks solid. Have you considered adding rate limiting to the authentication endpoints?',
      date: '2024-01-13T14:15:00Z',
      isRead: true
    },
    {
      id: 5,
      commenterName: 'Lisa Wang',
      commenterAvatar: 'LW',
      blogTitle: 'MongoDB Database Design',
      comment: 'The schema design patterns you\'ve shared are really practical. This will definitely help with my current project.',
      date: '2024-01-12T11:30:00Z',
      isRead: false
    }
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const handleReply = (commentId) => {
    console.log('Replying to comment:', commentId);
    // Add reply logic here
  };

  const handleDelete = (commentId) => {
    console.log('Deleting comment:', commentId);
    // Add delete logic here
  };

  const unreadCount = comments.filter(comment => !comment.isRead).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
          <p className="text-gray-600">
            Manage comments on your blog posts
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {unreadCount} unread
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MessageCircle size={16} className="mr-2" />
          {comments.length} total comments
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
              !comment.isRead ? 'ring-2 ring-blue-100 bg-blue-50/30' : ''
            }`}
          >
            {/* Comment Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {comment.commenterAvatar}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{comment.commenterName}</h3>
                  <p className="text-sm text-gray-600">
                    Commented on: <span className="font-medium">{comment.blogTitle}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                {formatDate(comment.date)}
                {!comment.isRead && (
                  <div className="ml-3 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>

            {/* Comment Content */}
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
            </div>

            {/* Comment Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleReply(comment.id)}
                  className="flex items-center px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
                >
                  <Reply size={16} className="mr-2" />
                  Reply
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </button>
              </div>
              {!comment.isRead && (
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no comments) */}
      {comments.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border text-center">
          <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No comments yet</h3>
          <p className="text-gray-600">
            When readers comment on your blogs, they'll appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Comments;