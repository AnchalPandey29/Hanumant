'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Server, Briefcase, Laptop, Smartphone, Scaling, Megaphone, Search } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';
import React, { useRef } from 'react';

const programs = [
  { icon: <Code className="h-8 w-8 text-secondary" />, title: 'Full Stack Development', description: 'Master both front-end and back-end technologies.' },
  { icon: <Laptop className="h-8 w-8 text-secondary" />, title: 'Data Science & ML', description: 'Unlock insights from data with Python, and ML frameworks.' },
  { icon: <Server className="h-8 w-8 text-secondary" />, title: 'Cloud & DevOps', description: 'Learn to build and manage scalable infrastructure.' },
  { icon: <Smartphone className="h-8 w-8 text-secondary" />, title: 'App Development', description: 'Build native and cross-platform mobile applications.' },
  { icon: <Scaling className="h-8 w-8 text-secondary" />, title: 'AutoCAD', description: 'Design and draft 2D & 3D models with precision.' },
  { icon: <Megaphone className="h-8 w-8 text-secondary" />, title: 'Digital Marketing', description: 'Grow your online presence with modern marketing strategies.' },
  { icon: <Search className="h-8 w-8 text-secondary" />, title: 'SEO', description: 'Optimize websites to rank higher on search engines.' },
];

const services = [
  { icon: <Briefcase className="h-8 w-8 text-accent" />, title: 'Corporate Training', description: 'Upskill your workforce with custom-tailored tech programs.' },
  { icon: <Laptop className="h-8 w-8 text-accent" />, title: 'IT Consulting', description: 'Leverage our expertise to solve your most complex business challenges.' },
  { icon: <Code className="h-8 w-8 text-accent" />, title: 'Software Development', description: 'End-to-end development services to bring your ideas to life.' },
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y - height / 2) / (height / 2) * -8;
    const rotateY = (x - width / 2) / (width / 2) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out will-change-transform h-full"
    >
      {children}
    </div>
  );
};


export default function ProgramsServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjA0LDIwNCwyMDQsMC4wNSkiPjxwYXRoIGQ9Ik0wIC41SDMybTAtMTZ2MzJNMTAgMC41SDIybTAtMTZ2MzJNMjAgMC41SDIybTAtMTZ2MzIiLz48L3N2Zz4=')] opacity-50 dark:opacity-100"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Comprehensive training and professional services to accelerate your growth.
            </p>
          </div>
        </AnimatedContent>

        <Tabs defaultValue="programs" className="w-full max-w-5xl mx-auto">
          <AnimatedContent delay={150}>
            <TabsList className="grid w-full grid-cols-2 h-14 bg-background/60 backdrop-blur-sm border shadow-inner">
              <TabsTrigger value="programs" className="text-base h-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Training Programs</TabsTrigger>
              <TabsTrigger value="services" className="text-base h-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Professional Services</TabsTrigger>
            </TabsList>
          </AnimatedContent>
          
          <TabsContent value="programs" className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {programs.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 150}>
                  <TiltCard>
                    <Card className="h-full text-center bg-background/60 dark:bg-card/70 backdrop-blur-md border border-white/10 shadow-lg group flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardHeader className="items-center relative z-10">
                            <div className="p-4 bg-secondary/10 rounded-full mb-2 border border-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20">
                                {item.icon}
                            </div>
                            <CardTitle className="font-headline mt-2 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 flex-grow">
                            <p className="text-sm text-foreground/70">{item.description}</p>
                        </CardContent>
                    </Card>
                  </TiltCard>
                </AnimatedContent>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="services" className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 150}>
                  <TiltCard>
                    <Card className="h-full text-center bg-background/60 dark:bg-card/70 backdrop-blur-md border border-white/10 shadow-lg group flex flex-col">
                         <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardHeader className="items-center relative z-10">
                            <div className="p-4 bg-accent/10 rounded-full mb-2 border border-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                                {item.icon}
                            </div>
                            <CardTitle className="font-headline mt-2 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 flex-grow">
                            <p className="text-sm text-foreground/70">{item.description}</p>
                        </CardContent>
                    </Card>
                  </TiltCard>
                </AnimatedContent>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
