'use client';
import React, { useEffect, useRef } from 'react';
import { Code, GraduationCap, TrendingUp, BrainCircuit, Rocket, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const icons = [
  { icon: GraduationCap, size: 'w-16 h-16', color: 'text-sky-400' },
  { icon: Code, size: 'w-12 h-12', color: 'text-teal-400' },
  { icon: TrendingUp, size: 'w-14 h-14', color: 'text-indigo-400' },
  { icon: BrainCircuit, size: 'w-12 h-12', color: 'text-purple-400' },
  { icon: Rocket, size: 'w-10 h-10', color: 'text-pink-400' },
  { icon: Trophy, size: 'w-14 h-14', color: 'text-yellow-400' },
];

export function InteractiveVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          const parallaxFactor = (index + 1) * 5;
          const translateX = -x * parallaxFactor;
          const translateY = -y * parallaxFactor;
          icon.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] flex items-center justify-center">
      {/* Central Image */}
      <div className="absolute w-80 h-80">
        <Image 
          src="https://d1rdz15x9x7c4f.cloudfront.net/assets/payload-images/Why-Choose-OneClick-for-Data-Engineering-Services-.png" 
          alt="Data Engineering Services"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
      
      {/* Orbiting Icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const radius = 220; // Increased radius to orbit around the image
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const animationDelay = `${index * 1.5}s`;

        return (
          <div
            key={index}
            ref={el => iconsRef.current[index] = el}
            className="absolute transition-transform duration-300 ease-out"
            style={{ 
              top: `calc(50% + ${y}px - (var(--icon-size, 3rem) / 2))`, 
              left: `calc(50% + ${x}px - (var(--icon-size, 3rem) / 2))`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay,
              ['--icon-size' as string]: item.size.split(' ')[0].replace('w-', '') + 'rem',
            }}
          >
            <div className={cn(
              "p-4 bg-gray-800/50 rounded-full shadow-lg backdrop-blur-sm border border-white/10",
              item.size
            )}>
              <item.icon className={cn("w-full h-full", item.color)} strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
