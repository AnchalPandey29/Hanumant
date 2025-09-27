'use client';

import { Button } from '@/components/ui/button';
import { AnimatedContent } from '../shared/animated-content';
import { InteractiveVisual } from './interactive-visual';
import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" style={{maskImage: "linear-gradient(to bottom, white, transparent)"}}></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
    <style jsx>{`
      .bg-grid-slate-900\\[\\/0\\.04\\] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%230f172a1a'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
      }
      .dark .bg-grid-slate-400\\[\\/0\\.05\\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2394a3b81a'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
      }
    `}</style>
  </div>
);


export default function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background text-foreground overflow-hidden">
                <div className="relative container mx-auto px-4 md:px-6 z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                                Best IT Company & No.1 Training Institute
                            </h1>
                            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-foreground/80 md:text-xl">
                                Hanumant Technology is the Best IT Company & Training Institute in Lucknow. We provide #1 IT Services and Training programs with 100% job placement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-foreground overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <AnimatedContent>
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                        Best IT Company & No.1 Training Institute
                    </h1>
                </AnimatedContent>
                <AnimatedContent delay={150}>
                    <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-foreground/80 md:text-xl">
                        Hanumant Technology is the Best IT Company & Training Institute in Lucknow. We provide #1 IT Services and Training programs with 100% job placement.
                    </p>
                </AnimatedContent>
                <AnimatedContent delay={300} className="slide-up">
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-lg py-7 px-8 shadow-lg shadow-secondary/20 hover:shadow-secondary/30 transition-shadow">
                            Start Learning Today
                        </Button>
                        <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted hover:text-black rounded-full text-lg py-7 px-8">
                            Explore Programs
                        </Button>
                    </div>
                </AnimatedContent>
            </div>
            <div className="hidden md:block">
                <AnimatedContent delay={200}>
                    <InteractiveVisual />
                </AnimatedContent>
            </div>
        </div>
      </div>
    </section>
  );
}
