
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  phrases,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (text.length < currentPhrase.length) {
          setText((prev) => currentPhrase.substring(0, prev.length + 1));
        } else {
          // Pause at the end of the phrase before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  // Find the longest phrase to prevent layout shifts
  const longestPhrase = useMemo(() => phrases.reduce((a, b) => (a.length > b.length ? a : b), ''), [phrases]);

  return (
    <Badge
      variant="default"
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 px-6 py-2 h-12 whitespace-nowrap",
        className
      )}
    >
      <span className="relative">
        <span className="invisible">{longestPhrase}</span>
        <span className="absolute inset-0 flex items-center justify-center">
            {text}
            <span className="animate-pulse">|</span>
        </span>
      </span>
    </Badge>
  );
}
