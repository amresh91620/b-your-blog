import React from "react";
import { Mail, Check } from "lucide-react";

const ManageMessages = () => {
  const messages = [
    { id: 1, name: "John Doe", email: "john@example.com", message: "Great blog! Keep it up.", isRead: false, date: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", message: "I have a question about your latest post.", isRead: true, date: "2024-01-14" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Messages</h1>
        <p className="text-zinc-500 mt-2">View messages from users</p>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`bg-white p-6 rounded-2xl border ${msg.isRead ? "border-zinc-200" : "border-blue-200 bg-blue-50/30"}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold">
                  {msg.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">{msg.name}</h3>
                  <p className="text-sm text-zinc-500">{msg.email}</p>
                  <p className="mt-3 text-zinc-700">{msg.message}</p>
                  <p className="text-xs text-zinc-400 mt-2">{msg.date}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors">
                <Check size={20} className={msg.isRead ? "text-green-500" : "text-zinc-400"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMessages;
