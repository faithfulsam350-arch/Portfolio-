'use client';

import { useState } from 'react';
import { ImageLightbox } from './image-lightbox';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      setLightboxImage(img.src);
    }
  };

  return (
    <>
      <div 
        onClick={handleClick}
        className={`${className} [&_img]:max-w-full [&_img]:h-auto [&_img]:cursor-pointer [&_video]:max-w-full [&_video]:h-auto [&_video]:object-contain [&_div]:max-w-full`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ImageLightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
