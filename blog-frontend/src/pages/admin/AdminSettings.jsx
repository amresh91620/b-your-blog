import React from "react";
import { Settings, Save } from "lucide-react";

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Admin Settings</h1>
        <p className="text-zinc-500 mt-2">Configure admin panel settings</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-zinc-200">
        <h2 className="text-xl font-bold text-zinc-900 mb-6">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">Site Name</label>
            <input type="text" defaultValue="B-YOUR Journal" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-400" />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">Admin Email</label>
            <input type="email" defaultValue="admin@example.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-400" />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#dc2626] text-white rounded-xl font-bold hover:bg-[#b91c1c] transition-colors">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
