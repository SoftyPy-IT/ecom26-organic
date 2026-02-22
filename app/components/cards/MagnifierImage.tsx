'use client';
import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface MagnifierImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  zoom?: number; // zoom factor
}

export default function MagnifierImage({
  src,
  alt,
  zoom = 2,
}: MagnifierImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // clamp to container
    setLensPos({
      x: Math.max(0, Math.min(x, rect.width)),
      y: Math.max(0, Math.min(y, rect.height)),
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden rounded-xl border border-[#81b03f]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full object-cover transition-transform duration-300"
      />

      {/* Lens */}
      {showLens && (
        <div
          className="pointer-events-none absolute w-60 h-60 rounded-full border-2 border-gray-300 bg-white/10 backdrop-blur-sm"
          style={{
            left: lensPos.x - 120,
            top: lensPos.y - 120,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${containerRef.current?.offsetWidth! * zoom}px ${containerRef.current?.offsetHeight! * zoom
              }px`,
            backgroundPosition: `-${lensPos.x * zoom - 120}px -${lensPos.y * zoom - 120
              }px`,
          }}
        />
      )}
    </div>
  );
}
