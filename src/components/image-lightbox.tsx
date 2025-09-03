
'use client';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export function ImageLightbox({ imageUrl, onClose }: ImageLightboxProps) {
  if (!imageUrl) {
    return null;
  }

  return (
    <Dialog open={!!imageUrl} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="w-[95vw] h-[95vh] max-w-none max-h-none p-0 bg-transparent border-0 flex items-center justify-center">
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            <div className="relative w-full h-full flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt="Lightbox image"
                    className="max-w-full max-h-full object-contain"
                />
            </div>
          <DialogClose asChild>
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
