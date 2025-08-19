import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Copy, User } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';
import { useInView } from 'react-intersection-observer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useBlog();
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 mb-8 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article ref={ref} className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-saffron-100 to-blue-100 dark:from-saffron-900/30 dark:to-blue-900/30 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-saffron-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category === 'government-exams' && 'Government Exams'}
                {post.category === 'fitness' && 'Fitness & Discipline'}
                {post.category === 'motivation' && 'Motivation & Life'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Dharmendra Kumar
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Copy link"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Mock Article Content */}
              <div className="space-y-6">
                <p>
                  Success in government exams requires more than just academic knowledge – it demands a holistic approach that combines strategic preparation, physical fitness, and mental resilience. Having personally cleared multiple prestigious exams including the Indian Airforce, BSF, and Army selections, I've learned that the journey to success is as important as the destination itself.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  The Foundation: Discipline and Consistency
                </h2>

                <p>
                  The cornerstone of any successful exam preparation is unwavering discipline. This isn't about perfection – it's about showing up every single day, even when motivation wanes. During my preparation for the Indian Airforce exam, I learned that small, consistent actions compound over time to create extraordinary results.
                </p>

                <blockquote className="border-l-4 border-saffron-500 pl-6 my-8 bg-saffron-50 dark:bg-saffron-900/20 p-6 rounded-r-lg">
                  <p className="text-lg italic text-gray-800 dark:text-gray-200">
                    "Success is not a destination, it's a journey of consistent daily actions that align with your ultimate goals."
                  </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Physical Fitness: Your Secret Weapon
                </h2>

                <p>
                  Many aspirants underestimate the role of physical fitness in exam success. A healthy body supports a sharp mind, improves stamina for long study sessions, and builds the confidence needed to tackle challenging situations. Regular exercise became my daily ritual, not just for the physical tests but for mental clarity.
                </p>

                <ul className="list-disc list-inside space-y-2 my-6">
                  <li>Start each day with 30 minutes of cardiovascular exercise</li>
                  <li>Incorporate strength training 3-4 times per week</li>
                  <li>Practice yoga or meditation for mental balance</li>
                  <li>Maintain a consistent sleep schedule of 7-8 hours</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Strategic Study Approach
                </h2>

                <p>
                  Effective preparation isn't about studying harder – it's about studying smarter. Create a structured plan that covers all subjects systematically while allowing time for revision and practice tests. Regular mock tests helped me understand my strengths and identify areas needing improvement.
                </p>

                <p>
                  Remember, every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown. The difference is they didn't give up when things got tough. Stay committed to your journey, trust the process, and success will follow.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mt-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-saffron-200 to-blue-200 dark:from-saffron-800 to-blue-800 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-saffron-600 dark:text-saffron-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dharmendra Kumar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dharmendra has successfully cleared the Indian Airforce, BSF, and Army exams. He shares practical strategies, 
                fitness habits, and motivational lessons to help others succeed in their journey. He believes in discipline, 
                consistency, and a strong mind-body connection.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-saffron-100 to-blue-100 dark:from-saffron-900/30 dark:to-blue-900/30"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {relatedPost.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;