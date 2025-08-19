export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'government-exams' | 'fitness' | 'motivation';
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featuredImage?: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Crack Indian Airforce Exam: A Complete Strategy Guide',
    slug: 'how-to-crack-indian-airforce-exam-complete-strategy-guide',
    excerpt: 'Learn the proven strategies that helped me clear the Indian Airforce exam. From preparation timeline to physical fitness requirements, discover everything you need to know.',
    content: 'Complete content would go here...',
    category: 'government-exams',
    tags: ['indian airforce', 'exam strategy', 'preparation', 'defense exams'],
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 2,
    title: 'Building Mental Resilience: The Foundation of Success',
    slug: 'building-mental-resilience-foundation-of-success',
    excerpt: 'Mental strength is what separates successful candidates from the rest. Discover practical techniques to build unshakeable mental resilience during your preparation journey.',
    content: 'Complete content would go here...',
    category: 'motivation',
    tags: ['mental strength', 'resilience', 'motivation', 'mindset'],
    date: 'March 12, 2024',
    readTime: '6 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 3,
    title: 'Daily Fitness Routine for Government Exam Aspirants',
    slug: 'daily-fitness-routine-government-exam-aspirants',
    excerpt: 'A structured fitness plan designed specifically for exam preparation. Learn how physical fitness directly impacts your mental performance and exam success.',
    content: 'Complete content would go here...',
    category: 'fitness',
    tags: ['fitness routine', 'physical training', 'exercise', 'health'],
    date: 'March 10, 2024',
    readTime: '10 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 4,
    title: 'BSF Exam Preparation: From Application to Selection',
    slug: 'bsf-exam-preparation-application-to-selection',
    excerpt: 'A comprehensive guide covering the entire BSF selection process, including application tips, written exam strategy, and physical fitness standards.',
    content: 'Complete content would go here...',
    category: 'government-exams',
    tags: ['bsf exam', 'border security force', 'selection process', 'preparation'],
    date: 'March 8, 2024',
    readTime: '12 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 5,
    title: 'The Power of Discipline: Creating Unbreakable Habits',
    slug: 'power-of-discipline-creating-unbreakable-habits',
    excerpt: 'Discipline is the bridge between goals and accomplishment. Learn how to build discipline that sticks and creates lasting success in all areas of life.',
    content: 'Complete content would go here...',
    category: 'motivation',
    tags: ['discipline', 'habits', 'personal development', 'success'],
    date: 'March 5, 2024',
    readTime: '7 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 6,
    title: 'Army Exam Success: Physical and Mental Preparation Guide',
    slug: 'army-exam-success-physical-mental-preparation-guide',
    excerpt: 'Master both the physical and mental aspects of Army exam preparation. Get insights into the selection process and what really matters for success.',
    content: 'Complete content would go here...',
    category: 'government-exams',
    tags: ['army exam', 'physical fitness', 'mental preparation', 'selection'],
    date: 'March 3, 2024',
    readTime: '9 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 7,
    title: 'Nutrition for Peak Performance: Fueling Your Success',
    slug: 'nutrition-peak-performance-fueling-success',
    excerpt: 'What you eat directly impacts your performance. Discover the nutrition strategies that support intense study sessions and physical training.',
    content: 'Complete content would go here...',
    category: 'fitness',
    tags: ['nutrition', 'diet', 'performance', 'health'],
    date: 'March 1, 2024',
    readTime: '8 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 8,
    title: 'Overcoming Failure: Turning Setbacks into Comebacks',
    slug: 'overcoming-failure-turning-setbacks-comebacks',
    excerpt: 'Every failure is a setup for a comeback. Learn how to bounce back stronger from exam failures and use setbacks as stepping stones to success.',
    content: 'Complete content would go here...',
    category: 'motivation',
    tags: ['failure', 'resilience', 'comeback', 'motivation'],
    date: 'February 28, 2024',
    readTime: '6 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 9,
    title: 'Time Management Mastery for Competitive Exams',
    slug: 'time-management-mastery-competitive-exams',
    excerpt: 'Master the art of time management to maximize your preparation efficiency. Learn proven techniques to study smarter, not harder.',
    content: 'Complete content would go here...',
    category: 'government-exams',
    tags: ['time management', 'study techniques', 'efficiency', 'preparation'],
    date: 'February 25, 2024',
    readTime: '7 min read',
    author: 'Dharmendra Kumar'
  },
  {
    id: 10,
    title: 'Stress Management During Exam Preparation',
    slug: 'stress-management-during-exam-preparation',
    excerpt: 'Learn effective stress management techniques that keep you calm, focused, and performing at your best throughout your preparation journey.',
    content: 'Complete content would go here...',
    category: 'motivation',
    tags: ['stress management', 'mental health', 'relaxation', 'preparation'],
    date: 'February 22, 2024',
    readTime: '5 min read',
    author: 'Dharmendra Kumar'
  }
];