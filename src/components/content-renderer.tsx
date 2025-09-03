'use client';

import { useEffect, useRef } from 'react';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Add responsive classes to all images
      const images = containerRef.current.querySelectorAll('img');
      images.forEach(img => {
        img.classList.add('max-w-full', 'h-auto');
      });

      // Add responsive classes to all videos
      const videos = containerRef.current.querySelectorAll('video');
      videos.forEach(video => {
        video.classList.add('max-w-full', 'h-auto');
      });
    }
  }, [content]);

  return (
    <div 
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
