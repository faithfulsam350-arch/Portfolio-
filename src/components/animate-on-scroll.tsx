'use client';

import { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: '200' | '400' | '600';
  variant?: 'slide-in' | 'grow';
}

export function AnimateOnScroll({ children, className, delay, variant = 'grow' }: AnimateOnScrollProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0', // Start invisible
        isInView && (variant === 'grow' ? 'animate-grow' : 'animate-slide-in-from-bottom'),
        delay === '200' && 'animation-delay-200',
        delay === '400' && 'animation-delay-400',
        delay === '600' && 'animation-delay-600',
        className
      )}
    >
      {children}
    </div>
  );
}
