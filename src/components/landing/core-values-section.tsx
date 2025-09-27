'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, GraduationCap, HeartHandshake, Lightbulb, Target, Eye, ArrowRight, Users, ShieldCheck } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';
import React, { useState, useEffect } from 'react';

const aboutUsCards = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Our Mission',
    description: 'To deliver innovative and practical tech education that empowers individuals to achieve their full potential and bridges the talent gap in the industry.',
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: 'Our Vision',
    description: 'To be a global leader in technology training, recognized for our commitment to excellence, student success, and fostering a community of lifelong learners.',
  }
];

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-secondary" />,
    title: 'Innovation',
    description: 'We foster a culture of creativity and forward-thinking, encouraging new ideas to flourish.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-secondary" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in our curriculum and teaching methodologies.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
    title: 'Commitment',
    description: "Our students' success is our success. We are dedicated to supporting them on their journey.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-secondary" />,
    title: 'Adaptability',
    description: 'In a fast-paced tech world, we stay agile, constantly updating our courses to reflect industry trends.',
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: 'Community',
    description: 'Building a supportive network of students, alumni, and industry partners.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in all our interactions and operations.',
  },
];

export default function CoreValuesSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
      setIsMounted(true);
  }, []);

  if (!isMounted) {
      return <section id="values" className="py-20 sm:py-32 bg-muted/30"></section>;
  }

  return (
    <section id="values" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
       <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.03]" style={{maskImage: "linear-gradient(to bottom, transparent, black, black, transparent)"}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: About Us */}
          <div className="space-y-12">
            <AnimatedContent>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">About Us</h2>
              <p className="mt-4 text-lg text-foreground/70">
                Founded on the principles of excellence and accessibility, Hanumant Technology has been a beacon for aspiring tech professionals. Our journey is one of passion, dedication, and a relentless drive to empower learners and build future leaders.
              </p>
            </AnimatedContent>
            <div className="grid sm:grid-cols-2 gap-6">
                {aboutUsCards.map((card, index) => (
                    <AnimatedContent key={card.title} delay={150 * (index + 1)}>
                        <Card className="group relative rounded-2xl p-6 h-full bg-card/60 text-foreground shadow-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 dark:bg-white/2 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="relative z-10 space-y-4 h-full flex flex-col">
                                {card.icon}
                                <h3 className="font-headline text-2xl font-bold text-primary">{card.title}</h3>
                                <p className="text-primary/80 dark:text-primary-foreground/80 text-sm flex-1">{card.description}</p>
                            </div>
                        </Card>
                    </AnimatedContent>
                ))}
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div className="space-y-12">
            <AnimatedContent>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 text-lg text-foreground/70">
                    The principles that guide our mission to empower tech professionals.
                </p>
            </AnimatedContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
                <AnimatedContent key={value.title} delay={index * 100}>
                    <Card className="h-full text-center bg-card/60 backdrop-blur-sm border shadow-md hover:shadow-secondary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center">
                                    <div className="rounded-full bg-secondary/10 p-4 inline-flex transition-colors duration-300 group-hover:bg-secondary/20">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="font-headline text-base sm:text-lg mt-4">{value.title}</CardTitle>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-sm text-center text-foreground/80">{value.description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AnimatedContent>
            ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <AnimatedContent delay={500}>
            <div className="mt-24 text-center p-8 bg-primary rounded-2xl border shadow-sm">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">Discover how our values shape your journey.</h3>
                <Button variant="secondary" size="lg" className="rounded-full group shadow-lg hover:shadow-secondary/40 transition-shadow duration-300 text-secondary-foreground">
                    Explore Programs
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </AnimatedContent>
      </div>
      <style jsx>{`
        .bg-grid-slate-900\\[\\/0\\.02\\] {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%230f172a' stroke-dasharray='1 31'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-400\\[\\/0\\.03\\] {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%2394a3b8' stroke-dasharray='1 31'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
    `}</style>
    </section>
  );
}
