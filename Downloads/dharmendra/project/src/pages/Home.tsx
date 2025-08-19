import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Dumbbell, Heart, Trophy, Users, Calendar } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { useInView } from 'react-intersection-observer';
import { mockBlogPosts } from '../data/mockData';

const Home: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: blogRef, inView: blogInView } = useInView({ threshold: 0.1 });

  const stats = [
    { label: 'Exams Cleared', value: 3, suffix: '+' },
    { label: 'Motivational Posts', value: 50, suffix: '+' },
    { label: 'Lives Impacted', value: 1000, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '+' },
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Government Exams',
      description: 'Proven strategies and insights from clearing Indian Airforce, BSF, and Army exams.',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitness & Discipline',
      description: 'Build the physical and mental strength needed for success in competitive exams.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Motivation & Life Lessons',
      description: 'Real-life experiences and motivational content to keep you focused on your goals.',
    },
  ];

  const latestPosts = mockBlogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-blue-50 via-white to-saffron-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-saffron-600 to-blue-600 bg-clip-text text-transparent">
                  Discipline.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-saffron-600 bg-clip-text text-transparent">
                  Focus.
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Success.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join Dharmendra Kumar on a journey of transformation through proven strategies, 
                fitness wisdom, and motivational insights for government exam success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link
                  to="/blog"
                  className="group bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Start Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 border-2 border-gray-300 dark:border-gray-600 hover:border-saffron-600 dark:hover:border-saffron-400"
                >
                  Learn About Dharmendra
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={aboutRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${aboutInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You'll Find Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive guidance covering all aspects of government exam preparation and personal development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 ${
                  aboutInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section ref={blogRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${blogInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fresh content to help you stay motivated and informed on your journey to success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  blogInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-saffron-100 to-blue-100 dark:from-saffron-900/30 dark:to-blue-900/30"></div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <span className="bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-300 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-500 ${blogInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              to="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands who have found success through discipline, preparation, and the right mindset. 
            Your journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-white text-saffron-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Learning Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-saffron-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;