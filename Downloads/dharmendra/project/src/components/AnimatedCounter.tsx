import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrameId: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(end * easeOutQuart));

        if (percentage < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-bold text-3xl md:text-4xl text-saffron-600 dark:text-saffron-400">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;