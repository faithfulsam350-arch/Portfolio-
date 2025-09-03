'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from './image-lightbox';

interface ClickableImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  'data-ai-hint'?: string;
}

export function ClickableImage({ src, alt, fill, sizes, className, 'data-ai-hint': dataAiHint }: ClickableImageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`${className} cursor-pointer`}
        data-ai-hint={dataAiHint}
        onClick={() => setLightboxImage(src)}
      />
      <ImageLightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
