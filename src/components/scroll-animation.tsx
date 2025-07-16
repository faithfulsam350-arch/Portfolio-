'use client';

import { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: '200' | '400' | '600';
}

export function ScrollAnimation({ children, className, delay }: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0', // Start invisible
        isInView && 'animate-fade-in-up',
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
