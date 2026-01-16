import React from "react";
import { Search, Trash2, Edit, Eye } from "lucide-react";

const ManageBlogs = () => {
  const blogs = [
    { id: 1, title: "Getting Started with React", author: "John Doe", status: "published", views: 1234 },
    { id: 2, title: "Advanced JavaScript Concepts", author: "Jane Smith", status: "draft", views: 567 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Manage Blogs</h1>
        <p className="text-zinc-500 mt-2">View and manage all blog posts</p>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Title</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Author</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Views</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-zinc-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b border-zinc-100 hover:bg-zinc-50">
                <td className="px-6 py-4 font-medium text-zinc-900">{blog.title}</td>
                <td className="px-6 py-4 text-zinc-600">{blog.author}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${blog.status === "published" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-600">{blog.views}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                      <Eye size={16} className="text-zinc-600" />
                    </button>
                    <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                      <Edit size={16} className="text-zinc-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogs;
