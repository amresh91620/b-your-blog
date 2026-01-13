import React, { useState } from 'react';
import { Reply, Trash2, Clock, MessageCircle, CheckCircle2, MoreVertical, Filter } from 'lucide-react';

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
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const unreadCount = comments.filter(comment => !comment.isRead).length;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle size={18} className="text-[#236656]" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-[#236656]">Community</span>
          </div>
          <h1 className="text-3xl font-black text-zinc-900 tracking-tight">Responses</h1>
          <p className="text-zinc-500 text-sm mt-1">
            You have <span className="font-bold text-[#236656]">{unreadCount} new messages</span> waiting for your reply.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-600 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-all">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#236656] text-white rounded-xl text-sm font-bold hover:shadow-lg shadow-[#236656]/20 transition-all">
            <CheckCircle2 size={16} />
            Mark all read
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`group bg-white rounded-[2rem] p-8 border transition-all duration-300 ${
              !comment.isRead 
                ? 'border-[#236656]/20 shadow-xl shadow-[#236656]/5 ring-1 ring-[#236656]/5' 
                : 'border-zinc-100 shadow-sm hover:border-zinc-200'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              
              {/* Avatar & Indicator */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-[#236656]/5 rounded-2xl flex items-center justify-center text-[#236656] font-black text-lg border border-[#236656]/10 shadow-inner">
                  {comment.commenterAvatar}
                </div>
                {!comment.isRead && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#236656] border-4 border-white rounded-full"></div>
                )}
              </div>

              {/* Content Body */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                      {comment.commenterName}
                      {!comment.isRead && (
                        <span className="text-[9px] bg-[#236656] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>
                      )}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium">
                      On <span className="text-[#236656] font-bold cursor-pointer hover:underline">{comment.blogTitle}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <span className="text-[10px] font-bold flex items-center gap-1 uppercase tracking-tighter bg-zinc-50 px-2 py-1 rounded-lg">
                      <Clock size={12} />
                      {formatDate(comment.date)}
                    </span>
                    <button className="p-1 hover:bg-zinc-50 rounded-lg text-zinc-300 hover:text-zinc-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-zinc-600 leading-relaxed text-[15px] my-5">
                  "{comment.comment}"
                </p>

                {/* Interactive Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center px-5 py-2.5 bg-[#236656] text-white rounded-xl text-xs font-bold hover:shadow-lg shadow-[#236656]/10 active:scale-95 transition-all gap-2">
                      <Reply size={14} />
                      Reply to {comment.commenterName.split(' ')[0]}
                    </button>
                    <button className="p-2.5 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  {comment.isRead && (
                    <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Archived</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {comments.length === 0 && (
        <div className="bg-white rounded-[3rem] p-20 border border-zinc-100 text-center shadow-inner">
          <div className="w-20 h-20 bg-zinc-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={32} className="text-zinc-200" />
          </div>
          <h3 className="text-2xl font-black text-zinc-900 mb-2">Quiet in here...</h3>
          <p className="text-zinc-400 max-w-xs mx-auto text-sm leading-relaxed">
            Your stories are waiting for their first conversation. Share your work to start the discussion.
          </p>
        </div>
      )}
    </div>
  );
};

export default Comments;