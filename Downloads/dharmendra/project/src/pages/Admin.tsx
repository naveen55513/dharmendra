import React, { useMemo, useState } from 'react';
import { Trash2, Plus, Tag, FileText, Type, User, Filter, Layers } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContext';

const Admin: React.FC = () => {
  const { posts, addPost, deletePost } = useBlog();
  const { logout } = useAuth();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<'government-exams' | 'fitness' | 'motivation'>('government-exams');
  const [tagsInput, setTagsInput] = useState('');
  const [author, setAuthor] = useState('Admin');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'government-exams' | 'fitness' | 'motivation'>('all');

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [posts, search, categoryFilter]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim()) return;
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    addPost({ title: title.trim(), excerpt: excerpt.trim(), content: content.trim(), category, tags, author: author.trim() || 'Admin' });
    setTitle('');
    setExcerpt('');
    setContent('');
    setTagsInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
          <button onClick={logout} className="px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:opacity-90 transition">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleAdd} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"><Plus className="w-5 h-5 mr-2"/>Create New Post</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center"><Type className="w-4 h-4 mr-2"/>Title</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Post title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center"><FileText className="w-4 h-4 mr-2"/>Excerpt</label>
                <textarea value={excerpt} onChange={e=>setExcerpt(e.target.value)} rows={2} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Short summary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center"><Layers className="w-4 h-4 mr-2"/>Content</label>
                <textarea value={content} onChange={e=>setContent(e.target.value)} rows={6} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Full content" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <select value={category} onChange={e=>setCategory(e.target.value as any)} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="government-exams">Government Exams</option>
                  <option value="fitness">Fitness & Discipline</option>
                  <option value="motivation">Motivation & Life</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center"><Tag className="w-4 h-4 mr-2"/>Tags</label>
                <input value={tagsInput} onChange={e=>setTagsInput(e.target.value)} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Comma separated tags" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center"><User className="w-4 h-4 mr-2"/>Author</label>
                <input value={author} onChange={e=>setAuthor(e.target.value)} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Author name" />
              </div>
              <button type="submit" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-2 px-4 rounded-md transition-colors">Add Post</button>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search posts..." className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"/>
              </div>
              <div>
                <select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value as any)} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="all">All Categories</option>
                  <option value="government-exams">Government Exams</option>
                  <option value="fitness">Fitness & Discipline</option>
                  <option value="motivation">Motivation & Life</option>
                </select>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filtered.map(post => (
                    <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/40">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{post.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{post.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{post.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button onClick={() => deletePost(post.id)} className="inline-flex items-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"><Trash2 className="w-4 h-4 mr-1"/>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;


