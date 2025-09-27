'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Code, GraduationCap, TrendingUp, BrainCircuit, Rocket, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const icons = [
  { icon: GraduationCap, color: 'text-sky-400' },
  { icon: Code, color: 'text-teal-400' },
  { icon: TrendingUp, color: 'text-indigo-400' },
  { icon: BrainCircuit, color: 'text-purple-400' },
  { icon: Rocket, color: 'text-pink-400' },
  { icon: Trophy, color: 'text-yellow-400' },
];

export function InteractiveVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMounted) return;

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
  }, [isMounted]);

  if (!isMounted) {
    return <div className="w-full h-[500px]" />;
  }

  return (
    <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center bg-gray-900 rounded-full">
      {/* Central Image */}
      <div className="absolute w-80 h-80 z-10">
        <Image 
          src="https://portal.coepvlab.ac.in/VirtualMathsLab/resource/images/homepage/ams.gif" 
          alt="Abstract technology visualization"
          data-ai-hint="abstract technology"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
      
      {/* Orbiting Icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const radius = 220; // Radius for the orbit
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const animationDelay = `${index * 1.5}s`;

        return (
          <div
            key={index}
            ref={el => iconsRef.current[index] = el}
            className="absolute transition-transform duration-300 ease-out"
            style={{ 
              top: `calc(50% + ${y}px - 2rem)`, 
              left: `calc(50% + ${x}px - 2rem)`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay,
            }}
          >
            <div className={cn(
              "w-16 h-16 p-4 bg-background/50 rounded-full shadow-lg backdrop-blur-sm border border-white/10"
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
