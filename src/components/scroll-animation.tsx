'use client';

import React, { useRef, ReactNode, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: '200' | '400' | '600';
  variant?: 'slide-in' | 'grow';
}

export function ScrollAnimation({ children, className, delay, variant = 'grow' }: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  // Use a state to control the animation and prevent it from re-running.
  const [hasAnimated, setHasAnimated] = React.useState(false);
  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0', // Start invisible
        hasAnimated && (variant === 'grow' ? 'animate-grow' : 'animate-slide-in-from-bottom'),
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
