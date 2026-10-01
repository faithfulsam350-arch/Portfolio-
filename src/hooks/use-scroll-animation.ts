'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0, // Trigger immediately when any part of the element is visible
      }
    );

    observer.observe(element);

    // Check if the element is already in view on mount
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
        observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isInView };
}
