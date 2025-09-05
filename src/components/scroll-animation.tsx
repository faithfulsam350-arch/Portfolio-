'use client';

import React, { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollAnimation({ children, className, delay }: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  const style = {
    animationDelay: delay ? `${delay}ms` : '0ms',
  };

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'opacity-0', // Start invisible
        isInView && 'animate-fade-in-up',
        className
      )}
    >
      {children}
    </div>
  );
}
