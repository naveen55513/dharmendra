import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Filter } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';
import { useInView } from 'react-intersection-observer';

const Blog: React.FC = () => {
  const { posts } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref, inView } = useInView({ threshold: 0.1 });

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'government-exams', label: 'Government Exams' },
    { value: 'fitness', label: 'Fitness & Discipline' },
    { value: 'motivation', label: 'Motivation & Life' },
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            SoulFit Career <span className="text-saffron-600 dark:text-saffron-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, strategies, and motivation to help you succeed in government exams and life
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-12 transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredPosts.length} of {posts.length} articles
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index % 9) * 100}ms` }}
            >
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-saffron-100 to-blue-100 dark:from-saffron-900/30 dark:to-blue-900/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <span className="bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-300 px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.value === post.category)?.label}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors duration-200">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors duration-200 group"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="w-16 h-16 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;