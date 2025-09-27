'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, GraduationCap, HeartHandshake, Lightbulb, Target, Eye, ArrowRight, Users, ShieldCheck } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';
import React, { useState, useEffect } from 'react';

const aboutUsCards = [
  {
    icon: <Target className="h-10 w-10 text-primary dark:text-white/90" />,
    title: 'Our Mission',
    description: 'To deliver innovative and practical tech education that empowers individuals to achieve their full potential and bridges the talent gap in the industry.',
  },
  {
    icon: <Eye className="h-10 w-10 text-primary dark:text-white/90" />,
    title: 'Our Vision',
    description: 'To be a global leader in technology training, recognized for our commitment to excellence, student success, and fostering a community of lifelong learners.',
  }
];

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: 'Innovation',
    description: 'We foster a culture of creativity and forward-thinking, encouraging new ideas to flourish.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in our curriculum and teaching methodologies.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: 'Commitment',
    description: "Our students' success is our success. We are dedicated to supporting them on their journey.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Adaptability',
    description: 'In a fast-paced tech world, we stay agile, constantly updating our courses to reflect industry trends.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Community',
    description: 'Building a supportive network of students, alumni, and industry partners.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
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
      return <section id="values" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900"></section>;
  }

  return (
    <section id="values" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjA0LDIwNCwyMDQsMC4wNSkiPjxwYXRoIGQ9Ik0wIC41SDMybTAtMTZ2MzJNMTAgMC41SDIybTAtMTZ2MzJNMjAgMC41SDIybTAtMTZ2MzIiLz48L3N2Zz4=')] opacity-50"></div>
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.3),rgba(255,255,255,0))]"></div>
      
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
                        <div className="group relative rounded-2xl p-6 h-full bg-secondary/10 dark:bg-secondary/20 text-foreground dark:text-primary-foreground shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="relative z-10 space-y-4 h-full flex flex-col">
                                {card.icon}
                                <h3 className="font-headline text-2xl font-bold text-primary dark:text-white">{card.title}</h3>
                                <p className="text-primary/80 dark:text-primary-foreground/80 text-sm flex-1">{card.description}</p>
                            </div>
                        </div>
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
                    <Card className="h-full text-center bg-background/60 dark:bg-card/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-accent/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center">
                                    <div className="rounded-full bg-accent/10 p-4 inline-flex transition-colors duration-300 group-hover:bg-accent/20">
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
            <div className="mt-24 text-center p-8 bg-background/50 rounded-2xl border shadow-sm backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">Discover how our values shape your journey.</h3>
                <Button variant="secondary" size="lg" className="rounded-full group shadow-lg hover:shadow-secondary/40 transition-shadow duration-300">
                    Explore Programs
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
