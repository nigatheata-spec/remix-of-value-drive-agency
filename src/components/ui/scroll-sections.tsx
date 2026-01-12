'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollSectionProps {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  className?: string;
  variant?: 'first' | 'second';
}

export const ScrollSectionFirst: React.FC<ScrollSectionProps> = ({ 
  children, 
  scrollYProgress,
  className 
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className={cn(
        'sticky top-0 h-screen flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </motion.section>
  );
};

export const ScrollSectionSecond: React.FC<ScrollSectionProps> = ({ 
  children, 
  scrollYProgress,
  className 
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className={cn(
        'relative h-screen',
        className
      )}
    >
      {children}
    </motion.section>
  );
};

interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({ 
  children,
  className 
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className={cn('relative h-[200vh]', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            scrollYProgress,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ScrollContainer;
