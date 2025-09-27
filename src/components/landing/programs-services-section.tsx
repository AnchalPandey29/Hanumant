'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Server, Briefcase, Laptop, Smartphone, Scaling, Megaphone, Search, Globe, Palette, Layers, Camera, Image as ImageIcon, ShieldCheck, Mail, Cloud, HardDrive } from 'lucide-react';
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
  { icon: <Globe className="h-8 w-8 text-accent" />, title: 'Website Development', description: 'Building responsive and high-performance websites for your business.' },
  { icon: <Smartphone className="h-8 w-8 text-accent" />, title: 'App Development', description: 'Creating intuitive mobile applications for iOS and Android platforms.' },
  { icon: <Palette className="h-8 w-8 text-accent" />, title: 'Website Design', description: 'Crafting visually stunning and user-friendly website designs.' },
  { icon: <Layers className="h-8 w-8 text-accent" />, title: 'App UI & UX Design', description: 'Designing seamless and engaging user experiences for mobile apps.' },
  { icon: <Camera className="h-8 w-8 text-accent" />, title: 'Photo & Video Editing', description: 'Professional editing services to make your visual content shine.' },
  { icon: <ImageIcon className="h-8 w-8 text-accent" />, title: 'Logo, Banner & Video Design', description: 'Creative design solutions for your brand’s identity and marketing materials.' },
  { icon: <Search className="h-8 w-8 text-accent" />, title: 'SEO, SMO & SEM', description: 'Boosting your online visibility and search engine ranking.' },
  { icon: <Megaphone className="h-8 w-8 text-accent" />, title: 'Digital Marketing', description: 'Comprehensive strategies to grow your digital footprint.' },
  { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Domain & SSL', description: 'Secure your website with reliable domain registration and SSL certificates.' },
  { icon: <Server className="h-8 w-8 text-accent" />, title: 'Web Hosting & Web Mail', description: 'Dependable hosting solutions and professional email services.' },
  { icon: <Cloud className="h-8 w-8 text-accent" />, title: 'Cloud Technology', description: 'Implementing scalable and efficient cloud infrastructure solutions.' },
  { icon: <HardDrive className="h-8 w-8 text-accent" />, title: 'Hardware & Network Support', description: 'Providing expert support for your IT hardware and network infrastructure.' },
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
    <section id="services" className="py-20 sm:py-32 relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.03]" style={{maskImage: "linear-gradient(to bottom, transparent, black, black, transparent)"}}></div>


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Comprehensive training and professional services to accelerate your growth.
            </p>
          </div>
        </AnimatedContent>

        <Tabs defaultValue="programs" className="w-full max-w-7xl mx-auto">
          <AnimatedContent delay={150}>
            <TabsList className="grid w-full grid-cols-2 h-14 bg-muted/60 backdrop-blur-sm border shadow-inner">
              <TabsTrigger value="programs" className="text-base h-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md">Training Programs</TabsTrigger>
              <TabsTrigger value="services" className="text-base h-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md">Professional Services</TabsTrigger>
            </TabsList>
          </AnimatedContent>
          
          <TabsContent value="programs" className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {programs.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 150}>
                  <TiltCard>
                    <Card className="h-full text-center bg-card/60 backdrop-blur-md border shadow-lg group flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {services.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 100}>
                  <TiltCard>
                    <Card className="h-full text-center bg-card/60 backdrop-blur-md border shadow-lg group flex flex-col">
                         <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
