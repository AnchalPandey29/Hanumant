'use client';

import { Button } from '@/components/ui/button';
import { AnimatedContent } from '@/components/shared/animated-content';
import Image from 'next/image';
import { TrendingUp, Briefcase, Users, Target } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const benefits = [
  {
    icon: <TrendingUp className="h-7 w-7 text-secondary" />,
    text: 'Boost Your Skills & Career',
  },
  {
    icon: <Briefcase className="h-7 w-7 text-secondary" />,
    text: 'Grow Your Online Business',
  },
  {
    icon: <Users className="h-7 w-7 text-secondary" />,
    text: 'Get Professional Jobs',
  },
  {
    icon: <Target className="h-7 w-7 text-secondary" />,
    text: 'Join Us to Set your Goal',
  },
];

export default function CtaSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <section className="bg-primary text-primary-foreground py-20 sm:py-32"></section>;
    }
  return (
    <>
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NTg5NTMwMjN8MA&ixlib=rb-4.1.0&q=80&w=1920"
                alt="Team collaborating in a modern office"
                data-ai-hint="team meeting"
                fill
                className="object-cover opacity-10"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6 py-20 sm:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedContent>
                    <div className="max-w-lg">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">Best Offer - Join Us Today</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            It is one of the best IT company & training institutes in Lucknow. Hanumant Technology offers top IT services and 100% job-oriented training programs at a reasonable price.
                        </p>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Those interested in the internship and services on web design, website development, full-stack development, graphic design, video editing, digital marketing, AutoCAD, data science, data analytics, AI, and machine learning can apply now for getting the best deal.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg py-8 px-12 group relative overflow-hidden shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 transform hover:scale-105">
                                <span className="absolute inset-0 bg-white/10 transform scale-x-0 transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100"></span>
                                <span className="relative">Contact Now</span>
                            </Button>
                        </div>
                    </div>
                </AnimatedContent>
                
                <AnimatedContent delay={200}>
                  <div className="space-y-8">
                    {benefits.map((benefit, index) => (
                      <AnimatedContent key={index} delay={300 + index * 100}>
                        <div className="flex items-start gap-6 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10" style={{ animation: `float-item 6s ease-in-out infinite`, animationDelay: `${index * 1.2}s` }}>
                            <div className="bg-secondary/20 p-3 rounded-full border border-secondary/30">
                                {benefit.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">{benefit.text}</h3>
                            </div>
                        </div>
                      </AnimatedContent>
                    ))}
                  </div>
                </AnimatedContent>
            </div>
        </div>
    </section>
    <style jsx>{`
        @keyframes float-item {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.03); }
        }
    `}</style>
    </>
  );
}
