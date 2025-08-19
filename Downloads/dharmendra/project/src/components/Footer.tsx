import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Mail, Target, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-8 h-8 text-saffron-500" />
              <div className="text-xl font-bold">
                SoulFit <span className="text-saffron-500">Career</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering aspiring candidates with practical strategies, fitness habits, 
              and motivational lessons to succeed in government exams and life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/DHARMENDRA57553?t=_hVWd9pb9AlB4X6mBr1StA&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-saffron-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:dharmendra@soulfitcareer.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-saffron-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-saffron-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=government-exams" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Government Exams
                </Link>
              </li>
              <li>
                <Link to="/blog?category=fitness" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Fitness & Discipline
                </Link>
              </li>
              <li>
                <Link to="/blog?category=motivation" className="text-gray-400 hover:text-saffron-400 transition-colors duration-200">
                  Motivation & Life
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} SoulFit Career. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Dharmendra Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;