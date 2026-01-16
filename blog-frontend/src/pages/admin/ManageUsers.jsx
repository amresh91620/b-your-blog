import React, { useState } from "react";
import { Search, Trash2, Edit, Shield, User } from "lucide-react";

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", status: "active" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "admin", status: "active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Manage Users</h1>
          <p className="text-zinc-500 mt-2">View and manage all registered users</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-zinc-200">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-400"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">User</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Email</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Role</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-zinc-900">Status</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-zinc-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-zinc-100 hover:bg-zinc-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium text-zinc-900">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.role === "admin" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                    {user.role === "admin" ? <Shield size={12} className="inline mr-1" /> : <User size={12} className="inline mr-1" />}
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-600">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
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

export default ManageUsers;
