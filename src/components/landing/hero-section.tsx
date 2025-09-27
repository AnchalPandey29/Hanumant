'use client';

import { Button } from '@/components/ui/button';
import { AnimatedContent } from '../shared/animated-content';
import { InteractiveVisual } from './interactive-visual';
import React, { useState, useEffect } from 'react';

const GridPattern = () => (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-primary/5 stroke-primary/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          x="100%"
          y="-1"
          patternTransform="translate(-50)"
        >
          <path d="M.5 80V.5H80" fill="none"
 strokeDasharray="4 4"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
    </svg>
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
                            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
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
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),transparent)]"></div>
      <GridPattern />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <AnimatedContent>
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
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
                        <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted rounded-full text-lg py-7 px-8">
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
