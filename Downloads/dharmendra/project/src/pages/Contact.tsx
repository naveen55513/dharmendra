import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Twitter, Instagram, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'dharmendra@soulfitcareer.com',
      link: 'mailto:dharmendra@soulfitcareer.com'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      value: '@DHARMENDRA57553',
      link: 'https://x.com/DHARMENDRA57553?t=_hVWd9pb9AlB4X6mBr1StA&s=08'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@soulfitcareer',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-saffron-600 dark:text-saffron-400">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about exam preparation? Need guidance on your journey? 
            I'm here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.label}
                      </h3>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-600 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow My Journey
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/DHARMENDRA57553?t=_hVWd9pb9AlB4X6mBr1StA&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-green-700 dark:text-green-300">
                    Thank you for your message! I'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="exam-guidance">Exam Guidance</option>
                    <option value="fitness-advice">Fitness & Training</option>
                    <option value="motivation">Motivation & Mindset</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical"
                    placeholder="Tell me how I can help you..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-saffron-600 hover:bg-saffron-700 disabled:bg-saffron-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-sm flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  I typically respond within 24-48 hours. Looking forward to connecting with you!
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-saffron-600 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Don't wait for the "perfect moment" – it doesn't exist. The best time to start preparing 
            for your dreams is now. Let's work together to turn your aspirations into achievements.
          </p>
          <a
            href="/blog"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Success Strategies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;