import React, { useState } from 'react';
import { Upload, Save, Send, X, Plus, Image as ImageIcon, Sparkles, Hash, Layers } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    tags: [],
    coverImage: null
  });
  
  const [newTag, setNewTag] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    'Technology', 'Programming', 'Web Development', 'Design', 'AI/ML', 'DevOps'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
      
      {/* 🚀 Top Navigation Header (Sticky) */}
      <div className="sticky top-0 z-30 flex items-center justify-between py-4 mb-8 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="text-indigo-600" size={24} />
            Drafting Story
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-all">
            <Save size={18} className="mr-2" />
            Save Draft
          </button>
          <button className="flex items-center px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all">
            <Send size={18} className="mr-2" />
            Publish Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 📝 Main Editor Area */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Title Input */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-8">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter a catchy title..."
              className="w-full text-4xl font-black text-slate-900 placeholder:text-slate-200 outline-none border-none bg-transparent"
            />
          </div>

          {/* Markdown Editor */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden">
             <div className="px-8 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Content Editor</span>
                <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded italic">Markdown Supported</span>
             </div>
             <div className="p-2 min-h-[500px]" data-color-mode="light">
              <MDEditor
                value={formData.content}
                onChange={(val) => setFormData(prev => ({ ...prev, content: val || '' }))}
                preview="edit"
                height={500}
                className="!border-none !shadow-none"
              />
            </div>
          </div>
        </div>

        {/* ⚙️ Sidebar Options */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Cover Image Upload */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center uppercase tracking-wider">
              <ImageIcon className="mr-2 text-indigo-600" size={16} /> Cover Media
            </h3>
            
            <div 
              className={`relative aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden ${
                formData.coverImage ? 'border-indigo-600' : 'border-slate-200 hover:border-indigo-400 bg-slate-50/50'
              }`}
            >
              {formData.coverImage ? (
                <>
                  <img src={URL.createObjectURL(formData.coverImage)} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setFormData(prev => ({ ...prev, coverImage: null }))}
                    className="absolute top-2 right-2 p-1.5 bg-rose-500 text-white rounded-lg shadow-lg hover:bg-rose-600"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-3 text-slate-400 group-hover:text-indigo-600 transition-colors">
                    <Upload size={20} />
                  </div>
                  <p className="text-xs font-bold text-slate-500">Drop cover image or <span className="text-indigo-600 underline">browse</span></p>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files[0] && setFormData(p => ({...p, coverImage: e.target.files[0]}))} />
                </label>
              )}
            </div>
          </div>

          {/* Category Selection */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center uppercase tracking-wider">
              <Layers className="mr-2 text-indigo-600" size={16} /> Category
            </h3>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none font-bold text-slate-600 transition-all appearance-none cursor-pointer"
            >
              <option value="">Choose category</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          {/* Tag System */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center uppercase tracking-wider">
              <Hash className="mr-2 text-indigo-600" size={16} /> Keywords
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.map((tag, idx) => (
                <span key={idx} className="flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-black border border-indigo-100 group">
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-indigo-400 hover:text-rose-500 transition-colors">
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>

            <div className="relative group">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Press enter to add..."
                className="w-full px-4 py-3 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none font-bold text-slate-600 transition-all"
              />
              <button onClick={handleAddTag} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-indigo-600 rounded-[2rem] p-6 text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <Sparkles size={80} />
             </div>
             <h4 className="font-black text-lg mb-2">Writing Tip</h4>
             <p className="text-xs text-indigo-100 leading-relaxed font-medium">
                Articles with at least one high-quality cover image and 3 tags get 40% more engagement.
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateBlog;