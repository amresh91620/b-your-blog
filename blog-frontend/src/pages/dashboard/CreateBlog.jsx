import React, { useState } from 'react';
import { Upload, Save, Send, X, Plus, Image as ImageIcon, Sparkles, Hash, Layers, Info } from 'lucide-react';
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
    <div className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
      
      {/* 🚀 Premium Sticky Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between py-6 mb-10 bg-zinc-50/80 backdrop-blur-xl border-b border-zinc-200/50 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-[#236656] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Studio Mode</span>
          </div>
          <h1 className="text-2xl font-black text-zinc-900 tracking-tight">Compose Story</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center px-4 py-2.5 text-zinc-500 font-bold text-sm hover:text-zinc-900 transition-colors">
            <Save size={18} className="mr-2" />
            Save Draft
          </button>
          <button className="flex items-center px-6 py-2.5 bg-[#236656] text-white font-bold rounded-xl shadow-lg shadow-[#236656]/20 hover:bg-[#1a4d41] hover:scale-[1.02] active:scale-95 transition-all">
            <Send size={18} className="mr-2" />
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* 📝 Editor Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Headline Input */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 p-10 group focus-within:border-[#236656]/30 transition-all">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Story Title</label>
            <textarea
              name="title"
              rows="2"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title your story..."
              className="w-full text-4xl lg:text-5xl font-black text-zinc-900 placeholder:text-zinc-100 outline-none border-none bg-transparent resize-none leading-tight"
            />
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden focus-within:border-[#236656]/30 transition-all">
             <div className="px-8 py-5 bg-zinc-50/50 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Manuscript</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-[#236656] bg-[#236656]/5 px-3 py-1 rounded-full uppercase">Markdown</span>
                </div>
             </div>
             <div className="p-4 min-h-[600px]" data-color-mode="light">
              <MDEditor
                value={formData.content}
                onChange={(val) => setFormData(prev => ({ ...prev, content: val || '' }))}
                preview="edit"
                height={600}
                className="!border-none !shadow-none !bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* ⚙️ Configuration Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Media Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 p-8">
            <h3 className="text-xs font-black text-zinc-900 mb-6 flex items-center uppercase tracking-widest">
              <ImageIcon className="mr-2 text-[#236656]" size={16} /> Cover Image
            </h3>
            
            <div 
              className={`relative aspect-[4/3] rounded-[1.5rem] border-2 border-dashed flex flex-col items-center justify-center transition-all overflow-hidden group ${
                formData.coverImage ? 'border-[#236656]' : 'border-zinc-200 hover:border-[#236656]/50 bg-zinc-50/50 hover:bg-white'
              }`}
            >
              {formData.coverImage ? (
                <>
                  <img src={URL.createObjectURL(formData.coverImage)} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => setFormData(prev => ({ ...prev, coverImage: null }))}
                      className="p-3 bg-white text-rose-500 rounded-2xl shadow-xl hover:scale-110 transition-transform"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center p-8 text-center w-full">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-[#236656] group-hover:scale-110 transition-all">
                    <Upload size={24} />
                  </div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Click to upload cover</p>
                  <p className="text-[10px] text-zinc-400 mt-2">16:9 Aspect ratio recommended</p>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files[0] && setFormData(p => ({...p, coverImage: e.target.files[0]}))} />
                </label>
              )}
            </div>
          </div>

          {/* Classification Selection */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 p-8">
            <h3 className="text-xs font-black text-zinc-900 mb-6 flex items-center uppercase tracking-widest">
              <Layers className="mr-2 text-[#236656]" size={16} /> Category
            </h3>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-[#236656]/20 font-bold text-zinc-600 transition-all appearance-none cursor-pointer"
            >
              <option value="">Select Topic</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          {/* Keywords / Tags */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-zinc-100 p-8">
            <h3 className="text-xs font-black text-zinc-900 mb-6 flex items-center uppercase tracking-widest">
              <Hash className="mr-2 text-[#236656]" size={16} /> Search Tags
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {formData.tags.map((tag, idx) => (
                <span key={idx} className="flex items-center pl-3 pr-1 py-1.5 bg-[#236656]/5 text-[#236656] rounded-xl text-[11px] font-bold border border-[#236656]/10">
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="ml-2 p-1 hover:bg-[#236656]/10 rounded-lg transition-colors">
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Add tag..."
                className="w-full px-5 py-4 pr-12 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-[#236656]/20 font-bold text-zinc-600 transition-all"
              />
              <button onClick={handleAddTag} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#236656] text-white rounded-xl hover:bg-[#1a4d41] transition-colors shadow-lg shadow-[#236656]/20">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* AI / Pro Tip */}
          <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-xl">
             <div className="relative z-10">
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-emerald-400" size={20} />
               </div>
               <h4 className="font-bold text-lg mb-3 leading-tight">Increase reach by 2x</h4>
               <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                 Adding a detailed category and at least <span className="text-white font-bold">5 keywords</span> helps our recommendation engine find the right audience for your story.
               </p>
             </div>
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
               <Sparkles size={120} />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateBlog;