'use client';

import { useEffect, useRef } from 'react';

interface MockupPlayerProps {
  mockupId: string;
  width?: string;
  aspectRatio?: string;
  cameraZoom?: string;
  backgroundColor?: string;
  trigger?: string;
  triggerLoop?: boolean | string;
  triggerRestart?: boolean | string;
  className?: string;
}

export function MockupPlayer({
  mockupId,
  width = '100%',
  aspectRatio = '4 / 3',
  cameraZoom = '21',
  backgroundColor = '#000000',
  trigger = 'load',
  triggerLoop = 'true',
  triggerRestart = 'true',
  className = '',
}: MockupPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'mckp-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://embed.mckp.live/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden rounded-lg ${className}`}>
      {/* @ts-expect-error Custom Web Component */}
      <mockup-player
        mockup-id={mockupId}
        width={width}
        aspect-ratio={aspectRatio}
        trigger={trigger}
        trigger-loop={String(triggerLoop)}
        trigger-restart={String(triggerRestart)}
        camera-zoom={cameraZoom}
        background-color={backgroundColor}
      />
    </div>
  );
}
