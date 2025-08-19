import React from 'react';
import { Trophy, Target, Heart, Users, Calendar, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.1 });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({ threshold: 0.1 });

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Indian Airforce',
      description: 'Successfully cleared the rigorous selection process and training',
      year: '2019'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Border Security Force (BSF)',
      description: 'Passed all phases of the comprehensive examination',
      year: '2020'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Indian Army',
      description: 'Qualified through competitive selection and assessment',
      year: '2021'
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Discipline',
      description: 'Consistent daily actions that build unstoppable momentum'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Authenticity',
      description: 'Sharing real experiences and honest insights from my journey'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Building a supportive environment for aspiring candidates'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Striving for continuous improvement in all aspects of life'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div ref={heroRef} className={`text-center mb-20 transition-all duration-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-saffron-200 to-blue-200 dark:from-saffron-800 to-blue-800 rounded-full flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-saffron-600 dark:text-saffron-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet <span className="text-saffron-600 dark:text-saffron-400">Dharmendra Kumar</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From clearing multiple government exams to empowering thousands of aspirants, 
              my journey is built on discipline, perseverance, and an unwavering belief in the power of preparation.
            </p>
          </div>
        </div>

        {/* Personal Story */}
        <section ref={storyRef} className="mb-20">
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 md:p-12 transition-all duration-1000 ${storyInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey to Success
                </h2>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hi, I'm Dharmendra Kumar. I've cleared the Indian Airforce, BSF, and Army exams. 
                    Now I share practical strategies, fitness habits, and motivational lessons to help 
                    others succeed in their journey.
                  </p>
                  
                  <p>
                    My path wasn't easy. Like many of you, I faced moments of doubt, periods of intense 
                    preparation, and the pressure that comes with competitive examinations. But through 
                    it all, I learned that success isn't just about intelligence – it's about discipline, 
                    consistency, and a strong mind-body connection.
                  </p>
                  
                  <p>
                    I believe in discipline, consistency, and a strong mind-body connection. These aren't 
                    just words to me – they're the principles that transformed my life and continue to 
                    guide everything I do. Whether it's maintaining peak physical fitness, developing 
                    mental resilience, or sharing knowledge with fellow aspirants, these values shape 
                    my approach.
                  </p>
                  
                  <p>
                    Today, through SoulFit Career, I'm committed to helping you discover your own path 
                    to success. Every challenge you face, I've likely faced too. Every doubt you have, 
                    I've worked through. My goal is to be the mentor I wish I had during my own journey.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-12">
                <div className="bg-gradient-to-br from-saffron-100 to-blue-100 dark:from-saffron-900/30 dark:to-blue-900/30 rounded-xl p-8 text-center">
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-saffron-600 dark:text-saffron-400 mb-2">3+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Major Exams Cleared</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Lives Impacted</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section ref={achievementsRef} className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${achievementsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Major Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Milestones that shaped my understanding of what it takes to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  achievementsInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 rounded-full mb-6">
                  {achievement.icon}
                </div>
                
                <div className="text-sm text-saffron-600 dark:text-saffron-400 font-semibold mb-2">
                  {achievement.year}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything I do and teach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  {value.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-r from-saffron-600 to-blue-600 rounded-xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Mission
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            To empower every aspiring candidate with the knowledge, strategies, and mindset needed to 
            not just clear government exams, but to excel in all aspects of life. Success is not just 
            about reaching your destination – it's about becoming the person you need to be along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dharmendra@soulfitcareer.com"
              className="bg-white text-saffron-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;